const { test, expect } = require('@playwright/test');

const baseURL = 'http://127.0.0.1:3001';
const viewports = [
  { width: 390, height: 844, label: '390' },
  { width: 430, height: 932, label: '430' },
  { width: 768, height: 1024, label: '768' },
  { width: 1067, height: 900, label: '1067' },
  { width: 1500, height: 980, label: '1500' },
];

const routes = [
  '/',
  '/about',
  '/projects',
  '/government-ux',
  '/design-system',
  '/designops',
  '/ux-lead',
  '/certifications',
  '/recommendations',
  '/blog',
  '/contact',
  '/casestudy',
];

const screenshotMatrix = [
  ['/', '390'],
  ['/', '430'],
  ['/', '768'],
  ['/', '1067'],
  ['/', '1500'],
  ['/government-ux', '1500'],
  ['/design-system', '1067'],
  ['/designops', '1067'],
  ['/contact', '768'],
];

const outDir = '/tmp/dark-audit';

async function setTheme(page, theme) {
  await page.evaluate((value) => {
    localStorage.setItem('site_theme', value);
    document.documentElement.dataset.theme = value;
    document.documentElement.style.colorScheme = value;
  }, theme);
  await page.reload({ waitUntil: 'networkidle' });
}

test('theme audit', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1500, height: 980 } });
  const page = await context.newPage();

  await page.goto(baseURL, { waitUntil: 'networkidle' });
  await page.evaluate(() => localStorage.removeItem('site_theme'));
  await page.reload({ waitUntil: 'networkidle' });
  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe('light');

  await page.locator('.navbar__controls [role="switch"]').click();
  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe('dark');
  await expect.poll(async () => page.evaluate(() => localStorage.getItem('site_theme'))).toBe('dark');

  await page.goto(`${baseURL}/contact`, { waitUntil: 'networkidle' });
  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe('dark');

  for (const route of routes) {
    for (const viewport of viewports) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
      await expect(page.locator('body')).toBeVisible();
      await expect(page.locator('nav')).toBeVisible();

      if (viewport.width < 992) {
        const toggle = page.locator('.navbar__toggle').first();
        await expect(toggle).toBeVisible();
        await toggle.click();
        await expect(page.locator('.navbar__mobile.is-open')).toBeVisible();
        await expect(page.locator('.navbar__mobile-actions [role="switch"]')).toBeVisible();
        await toggle.click();
      } else {
        await expect(page.locator('.navbar__controls [role="switch"]')).toBeVisible();
      }

      if (route === '/contact') {
        await expect(page.locator('input, textarea').first()).toBeVisible();
      }

      if (route === '/design-system') {
        await expect(page.locator('.homepage-designsystem__access-panel-inner')).toBeVisible();
      }

      if (route === '/') {
        await expect(page.locator('.audio-card')).toBeVisible();
        await expect(page.locator('.footer')).toBeVisible();
      }

      const shouldShot = screenshotMatrix.some(([shotRoute, shotViewport]) => shotRoute === route && shotViewport === viewport.label);
      if (shouldShot) {
        const fileRoute = route === '/' ? 'home' : route.replace(/^\//, '');
        await page.screenshot({ path: `${outDir}/${fileRoute}-${viewport.label}-dark.png`, fullPage: true });
      }
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseURL, { waitUntil: 'networkidle' });
  const mobileMenuButton = page.locator('.navbar__toggle').first();
  await mobileMenuButton.click();
  await page.locator('.navbar__mobile-actions [role="switch"]').click();
  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe('light');
  await expect.poll(async () => page.evaluate(() => localStorage.getItem('site_theme'))).toBe('light');
  await page.reload({ waitUntil: 'networkidle' });
  await expect.poll(async () => page.locator('html').getAttribute('data-theme')).toBe('light');

  await context.close();
});
