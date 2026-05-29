/* DS Watermark — deterrent overlay for private evaluation copies */
(function () {
  'use strict';

  // ── 1. Inject styles ────────────────────────────────────────────────────
  var style = document.createElement('style');
  style.textContent = [
    /* Notice banner */
    '#ds-wm-notice{',
    '  position:sticky;top:0;z-index:10001;',
    '  background:#fffbeb;border-bottom:1px solid #f59e0b;',
    '  padding:9px 24px;font-size:12px;color:#78350f;',
    '  text-align:center;font-family:system-ui,sans-serif;',
    '  line-height:1.5;letter-spacing:.01em;',
    '}',
    /* Watermark overlay */
    '#ds-wm-overlay{',
    '  position:fixed;top:0;left:0;width:100%;height:100%;',
    '  pointer-events:none;z-index:9990;overflow:hidden;',
    '  user-select:none;-webkit-user-select:none;',
    '}',
    '#ds-wm-overlay span{',
    '  position:absolute;white-space:nowrap;',
    '  font-size:12px;font-family:system-ui,sans-serif;',
    '  color:rgba(0,0,0,.065);',
    '  transform:rotate(-35deg);transform-origin:center center;',
    '  pointer-events:none;user-select:none;-webkit-user-select:none;',
    '}',
    /* Print protection */
    '@media print{',
    '  #ds-wm-notice{display:block!important;}',
    '  body::before{',
    '    content:"Private evaluation copy — Omar Mokhtar";',
    '    display:block;text-align:center;',
    '    font-size:13px;color:#333;',
    '    padding:12px 0;border-bottom:1px solid #ccc;',
    '    margin-bottom:20px;font-family:system-ui,sans-serif;',
    '  }',
    '  #ds-wm-overlay{',
    '    position:fixed!important;display:block!important;',
    '    opacity:.18!important;',
    '  }',
    '}',
  ].join('\n');
  document.head.appendChild(style);

  // ── 2. Notice banner ────────────────────────────────────────────────────
  var notice = document.createElement('div');
  notice.id = 'ds-wm-notice';
  notice.setAttribute('role', 'note');
  notice.setAttribute('aria-live', 'polite');
  notice.textContent =
    'This private showcase is shared for evaluation purposes only. ' +
    'Please do not copy, reuse, or redistribute.';
  document.body.insertBefore(notice, document.body.firstChild);

  // ── 3. Repeating diagonal watermark overlay ─────────────────────────────
  var TEXT = 'Omar Mokhtar • Private Design System Showcase • Evaluation Only';
  var COL_STEP = 360;
  var ROW_STEP = 160;

  var overlay = document.createElement('div');
  overlay.id = 'ds-wm-overlay';
  overlay.setAttribute('aria-hidden', 'true');

  // Size grid to cover the full viewport; fixed positioning keeps it in place on scroll
  var cols = Math.ceil(window.innerWidth  / COL_STEP) + 3;
  var rows = Math.ceil(window.innerHeight / ROW_STEP) + 3;

  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < cols; c++) {
      var s = document.createElement('span');
      s.textContent = TEXT;
      // Offset alternating rows by half a column step for a denser stagger
      var xOffset = (r % 2 === 0) ? 0 : COL_STEP / 2;
      s.style.left = (c * COL_STEP + xOffset - 80) + 'px';
      s.style.top  = (r * ROW_STEP - 40) + 'px';
      overlay.appendChild(s);
    }
  }

  document.body.appendChild(overlay);

  // ── 4. Deterrents — not real security, just friction ────────────────────
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('keydown', function (e) {
    var key = e.key ? e.key.toLowerCase() : '';
    var mod = e.ctrlKey || e.metaKey;
    // Block Ctrl/Cmd + C, S, P, A, U (copy, save, print, select-all, view-source)
    if (mod && ['c', 's', 'p', 'a', 'u'].indexOf(key) !== -1) {
      e.preventDefault();
    }
  });
})();
