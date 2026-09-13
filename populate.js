// ── Populate page from PERSONAL config (defined in personal.js) ──────────────
(function () {
  var p = window.PERSONAL;
  if (!p) { console.error('personal.js not loaded'); return; }

  if (p.name) {
    document.title = p.name + ' | Digital Business Card';
    setContent('appTitle', p.name);
    setContent('ogTitle',  p.name);
    setText('personalName', p.name);
  }

  if (p.title) {
    setContent('ogDescription', p.title);
    setText('personalTitle', p.title);
  }

  if (p.tagline) setText('personalTagline', p.tagline);

  if (p.website) {
    setContent('ogUrl',   p.website);
    setContent('ogImage', p.website + '/vcard-image.jpg');
  }

  setHref('emailBusiness', p.businessemail ? 'mailto:' + p.businessemail : null);
  setHref('emailPersonal', p.personalemail ? 'mailto:' + p.personalemail : null);
  setHref('githubLink',    p.github);
  setHref('signalLink',    p.signal);
  setHref('linkedinLink',  p.linkedin);

  function setContent(id, value) {
    var el = document.getElementById(id);
    if (el) el.setAttribute('content', value);
  }

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setHref(id, value) {
    if (!value) return;
    var el = document.getElementById(id);
    if (el) el.setAttribute('href', value);
  }
})();
// ─────────────────────────────────────────────────────────────────────────────
