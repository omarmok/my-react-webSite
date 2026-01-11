// Guard that keeps CI/build from running against known vulnerable Next.js releases.
const semverSegments = (version) => {
  const baseVersion = version.split('-')[0];
  return baseVersion.split('.').map((segment) => Number.parseInt(segment, 10) || 0);
};

const compareSegments = (current, minimum) => {
  for (let index = 0; index < minimum.length; index += 1) {
    const cur = current[index] || 0;
    const min = minimum[index];
    if (cur > min) return 1;
    if (cur < min) return -1;
  }
  return 0;
};

const minSafe = [16, 1, 1];
const installed = require('next/package.json').version;
const installedSegments = semverSegments(installed);

if (compareSegments(installedSegments, minSafe) < 0) {
  console.error(
    `Next.js ${installed} is vulnerable to the Server Components DoS (Dec 2025).` +
      ' Please upgrade to >=16.1.1 before running scripts or deploying.'
  );
  process.exitCode = 1;
} else {
  console.log(`Next.js ${installed} satisfies the >=16.1.1 minimum.`);
}
