// ── Theme toggle (dark → light → os) ─────────────────────────────────────────
(function () {
  var THEME_KEY = 'somaTheme';
  var THEMES    = ['dark', 'light', 'os'];
  var icons     = { dark: 'iconDark', light: 'iconLight', os: 'iconOs' };

  var btn        = document.getElementById('themeToggle');
  var root       = document.documentElement;
  var themeColor = document.getElementById('themeColor');
  var THEME_COLORS = { dark: '#0d1117', light: '#f6f8fa', os: '#0d1117' };

  var current   = localStorage.getItem(THEME_KEY) || 'dark';
  applyTheme(current);

  btn.addEventListener('click', function () {
    var next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
    current  = next;
    applyTheme(current);
    try { localStorage.setItem(THEME_KEY, current); } catch (e) {}
  });

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    btn.setAttribute('aria-label', 'Theme: ' + theme + ' — click to cycle');
    if (themeColor) themeColor.setAttribute('content', THEME_COLORS[theme] || THEME_COLORS.dark);
    Object.keys(icons).forEach(function (t) {
      document.getElementById(icons[t]).style.display = t === theme ? '' : 'none';
    });
  }
})();
// ─────────────────────────────────────────────────────────────────────────────
