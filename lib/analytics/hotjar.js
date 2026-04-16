let hotjarInitialized = false;

export function initHotjar({ id, version } = {}) {
  if (hotjarInitialized) {
    return;
  }

  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (window.location.protocol !== 'https:') {
    return;
  }

  const hjid = Number(id);
  const hjsv = Number(version);
  if (!Number.isFinite(hjid) || hjid <= 0 || !Number.isFinite(hjsv) || hjsv <= 0) {
    return;
  }

  if (document.getElementById('hotjar-script')) {
    hotjarInitialized = true;
    return;
  }

  hotjarInitialized = true;

  window.hj =
    window.hj ||
    function (...args) {
      (window.hj.q = window.hj.q || []).push(args);
    };

  window._hjSettings = { hjid, hjsv };

  const script = document.createElement('script');
  script.id = 'hotjar-script';
  script.async = true;
  script.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${hjsv}`;
  document.head.appendChild(script);
}

