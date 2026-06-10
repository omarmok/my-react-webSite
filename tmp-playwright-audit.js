const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const baseURL = 'http://127.0.0.1:3001';
const viewports = [
  { width: 390, height: 844, label: '390' },
  { width: 430, height: 932, label: '430' },
  { width: 768, height: 1024, label: '768' },
  { width: 1067, height: 900, label: '1067' },
  { width: 1500, height: 980, label: '1500' },
];
const routes = ['/', '/about', '/projects', '/government-ux', '/design-system', '/designops', '/ux-lead', '/certifications', '/recommendations', '/blog', '/contact', '/casestudy'];
const shotMatrix = new Set([
  '/::390',
  '/::430',
  '/::768',
  '/::1067',
  '/::1500',
  '/government-ux::1500',
  '/design-system::1067',
  '/designops::1067',
  '/contact::768',
]);
const outDir = '/tmp/dark-audit';
fs.mkdirSync(outDir, { recursive: true });

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1500, height: 980 } });
  const page = await context.newPage();

  const consoleErrors = [];
  page.on('pageerror', (error) => consoleErrors.push(`pageerror: ${error.message}`));
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(`console:${msg.text()}`);
  });

  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.removeItem('site_theme'));
  await page.reload({ waitUntil: 'networkidle' });
  let theme = await page.locator('html').getAttribute('data-theme');
  assert(theme === 'light', `Expected first visit light theme, got ${theme}`);

  await page.locator('.navbar__controls [role="switch"]').click();
  theme = await page.locator('html').getAttribute('data-theme');
  assert(theme === 'dark', `Expected dark theme after desktop toggle, got ${theme}`);
  let storedTheme = await page.evaluate(() => localStorage.getItem('site_theme'));
  assert(storedTheme === 'dark', `Expected localStorage dark, got ${storedTheme}`);

  await page.goto(`${baseURL}/contact`, { waitUntil: 'networkidle' });
  theme = await page.locator('html').getAttribute('data-theme');
  assert(theme === 'dark', `Expected persisted dark theme on navigation, got ${theme}`);

  for (const route of routes) {
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
      theme = await page.locator('html').getAttribute('data-theme');
      assert(theme === 'dark', `Expected dark theme on ${route} ${viewport.label}, got ${theme}`);
      assert(await page.locator('body').isVisible(), `Body hidden on ${route} ${viewport.label}`);
      assert(await page.locator('nav').first().isVisible(), `Nav hidden on ${route} ${viewport.label}`);

      if (viewport.width < 992) {
        const toggle = page.locator('.navbar__toggle').first();
        assert(await toggle.isVisible(), `Mobile nav toggle hidden on ${route} ${viewport.label}`);
        await toggle.click();
        assert(await page.locator('.navbar__mobile.is-open').isVisible(), `Mobile menu failed to open on ${route} ${viewport.label}`);
        assert(await page.locator('.navbar__mobile-actions [role="switch"]').isVisible(), `Mobile theme toggle hidden on ${route} ${viewport.label}`);
        await toggle.click();
      } else {
        assert(await page.locator('.navbar__controls [role="switch"]').isVisible(), `Desktop theme toggle hidden on ${route} ${viewport.label}`);
      }

      if (route === '/contact') {
        assert(await page.locator('input').first().isVisible(), `Contact input hidden on ${viewport.label}`);
        assert(await page.locator('textarea').isVisible(), `Contact textarea hidden on ${viewport.label}`);
      }

      if (route === '/design-system') {
        assert(await page.locator('.homepage-designsystem__access-panel-inner').isVisible(), `Design system access panel hidden on ${viewport.label}`);
      }

      if (route === '/') {
        assert(await page.locator('.audio-card').isVisible(), `Audio card hidden on home ${viewport.label}`);
        assert(await page.locator('.footer').isVisible(), `Footer hidden on home ${viewport.label}`);
      }

      if (shotMatrix.has(`${route}::${viewport.label}`)) {
        const fileRoute = route === '/' ? 'home' : route.replace(/^\//, '');
        await page.screenshot({ path: path.join(outDir, `${fileRoute}-${viewport.label}-dark.png`), fullPage: true });
      }
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.locator('.navbar__toggle').first().click();
  await page.locator('.navbar__mobile-actions [role="switch"]').click();
  theme = await page.locator('html').getAttribute('data-theme');
  assert(theme === 'light', `Expected light theme after mobile toggle, got ${theme}`);
  storedTheme = await page.evaluate(() => localStorage.getItem('site_theme'));
  assert(storedTheme === 'light', `Expected localStorage light after mobile toggle, got ${storedTheme}`);
  await page.reload({ waitUntil: 'networkidle' });
  theme = await page.locator('html').getAttribute('data-theme');
  assert(theme === 'light', `Expected persisted light theme after refresh, got ${theme}`);

  const summary = {
    consoleErrors,
    screenshots: fs.readdirSync(outDir).sort(),
  };
  console.log(JSON.stringify(summary, null, 2));

  await context.close();
  await browser.close();
})().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
