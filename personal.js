// ── Populate personal info from personal.json ────────────────────────────────
// This lets anyone reuse this project as a template: just edit personal.json
// with your own details and every field below updates automatically.
(function () {
  fetch('personal.json')
    .then(function (r) { return r.json(); })
    .then(applyPersonalInfo)
    .catch(function (err) { console.error('Could not load personal.json:', err); });

  function applyPersonalInfo(p) {
    if (p.name) {
      document.title = p.name + ' | Digital Business Card';
      setContent('appTitle', p.name);
      setContent('ogTitle', p.name);
      setText('personalName', p.name);
    }

    if (p.title) {
      setContent('ogDescription', p.title);
      setText('personalTitle', p.title);
    }

    if (p.tagline) setText('personalTagline', p.tagline);

    if (p.website) {
      setContent('ogUrl', p.website);
      setContent('ogImage', p.website + '/vcard-image.jpg');
    }

    setHref('emailBusiness', p.businessemail ? 'mailto:' + p.businessemail : null);
    setHref('emailPersonal', p.personalemail ? 'mailto:' + p.personalemail : null);
    setHref('githubLink',   p.github);
    setHref('signalLink',   p.signal);
    setHref('linkedinLink', p.linkedin);
  }

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
