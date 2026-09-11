// ── SomaFM Mini Player ────────────────────────────────────────────────────────
(function () {
  var STATIONS = [
    { id: 'beatblender',   title: 'Beat Blender',         desc: 'Deep-house & downtempo chill' },
    { id: 'groovesalad',   title: 'Groove Salad',          desc: 'Ambient/downtempo beats & grooves' },
    { id: 'dronezone',     title: 'Drone Zone',            desc: 'Atmospheric textures, minimal beats' },
    { id: 'deepspaceone',  title: 'Deep Space One',        desc: 'Ambient electronic & space music' },
    { id: 'spacestation',  title: 'Space Station Soma',    desc: 'Spaced-out ambient electronica' },
    { id: 'gsclassic',     title: 'Groove Salad Classic',  desc: 'Classic early-2000s chilled grooves' },
    { id: 'groovesalad2',  title: 'Groove Salad 2',        desc: 'Alternative chilled ambient mix' },
    { id: 'synphaera',     title: 'Synphaera Radio',       desc: 'Electronic ambient & space music' },
    { id: 'secretagent',   title: 'Secret Agent',          desc: 'Stylish spy-era lounge' },
    { id: 'indiepop',      title: 'Indie Pop Rocks!',      desc: 'New & classic indie pop' },
    { id: 'u80s',          title: 'Underground 80s',       desc: 'Synthpop & New Wave' },
    { id: 'lush',          title: 'Lush',                  desc: 'Mellow female vocals, electronic' },
    { id: 'seventies',     title: 'Left Coast 70s',        desc: 'Mellow Seventies album rock' },
    { id: 'defcon',        title: 'DEF CON Radio',         desc: 'Music for hacking' },
    { id: 'folkfwd',       title: 'Folk Forward',          desc: 'Indie folk & alt-folk' },
    { id: 'thetrip',       title: 'The Trip',              desc: 'Progressive house & trance' },
    { id: 'bossa',         title: 'Bossa Beyond',          desc: 'Bossa Nova, Samba & beyond' },
    { id: 'bootliquor',    title: 'Boot Liquor',           desc: 'Americana roots music' },
    { id: 'reggae',        title: 'Heavyweight Reggae',    desc: 'Reggae, Ska & Rocksteady' },
    { id: '7soul',         title: 'Seven Inch Soul',       desc: 'Vintage soul on 45 RPM vinyl' },
    { id: 'poptron',       title: 'PopTron',               desc: 'Electropop & indie dance rock' },
    { id: 'sonicuniverse', title: 'Sonic Universe',        desc: 'Avant-garde jazz & beyond' },
    { id: 'suburbsofgoa',  title: 'Suburbs of Goa',        desc: 'Desi-influenced Asian world beats' },
    { id: 'fluid',         title: 'Fluid',                 desc: 'Instrumental hiphop & future soul' },
    { id: 'darkzone',      title: 'The Dark Zone',         desc: 'Dark deep ambient' },
    { id: 'thistle',       title: 'ThistleRadio',          desc: 'Celtic roots & branches' },
    { id: 'dz2',           title: 'Drone Zone 2',          desc: 'Eclectic atmospheric textures' },
    { id: 'illstreet',     title: 'Illinois Street Lounge',desc: 'Bachelor pad & playful exotica' },
    { id: 'vaporwaves',    title: 'Vaporwaves',            desc: 'All Vaporwave. All the time.' },
    { id: 'cliqhop',       title: 'cliqhop idm',           desc: 'Blips, beeps & IDM beats' },
    { id: 'digitalis',     title: 'Digitalis',             desc: 'Digitally-affected analog rock' },
    { id: 'missioncontrol',title: 'Mission Control',       desc: 'Celebrating NASA & space explorers' },
    { id: 'metal',         title: 'Metal Detector',        desc: 'Doom, prog, sludge & thrash' },
    { id: 'dubstep',       title: 'Dub Step Beyond',       desc: 'Dubstep, dub & deep bass' },
    { id: 'brfm',          title: 'Black Rock FM',         desc: 'From the Black Rock Desert' },
    { id: 'tikitime',      title: 'Tiki Time',             desc: 'Classic Tiki & island rhythms' },
    { id: 'covers',        title: 'Covers',                desc: "Songs you know, artists you don't" },
    { id: 'n5md',          title: 'n5MD Radio',            desc: 'Ambient, post-rock & experimental' },
    { id: 'sf1033',        title: 'SF 10-33',              desc: 'Ambient + SF public safety radio' },
    { id: 'insound',       title: 'The In-Sound',          desc: '60s/70s Euro pop & psychedelia' },
    { id: 'live',          title: 'SomaFM Live',           desc: 'Live events & rebroadcasts' },
    { id: 'doomed',        title: 'Doomed',                desc: 'Dark industrial & ambient' },
    { id: 'scanner',       title: 'SF Police Scanner',     desc: 'SF public safety scanner feed' },
    { id: 'specials',      title: 'SomaFM Specials',       desc: 'Afternoon Jazz, Wavepool & more' },
    { id: 'chillits',      title: 'Chillits Radio',        desc: '25 years of chilling & camping' },
    { id: 'sfinsf',        title: 'SF in SF',              desc: 'Sci-fi & fantasy author readings' },
  ];

  function streamUrl(id) {
    return 'https://ice2.somafm.com/' + id + '-128-mp3';
  }
  function artUrl(id) {
    return 'https://api.somafm.com/logos/120/' + id + '120.png';
  }
  function songsUrl(id) {
    return 'https://api.somafm.com/songs/' + id + '.json';
  }

  // ── DOM refs ─────────────────────────────────────────────────────────────────
  var avatarBtn   = document.getElementById('avatarBtn');
  var playerWrap  = document.getElementById('playerWrap');
  var playBtn     = document.getElementById('playBtn');
  var prevBtn     = document.getElementById('prevBtn');
  var nextBtn     = document.getElementById('nextBtn');
  var muteBtn     = document.getElementById('muteBtn');
  var iconPlay    = document.getElementById('iconPlay');
  var iconPause   = document.getElementById('iconPause');
  var iconSpeaker = document.getElementById('iconSpeaker');
  var iconMuted   = document.getElementById('iconMuted');
  var volSlider   = document.getElementById('volSlider');
  var stationName = document.getElementById('stationName');
  var stationDesc = document.getElementById('stationDesc');
  var stationIdx  = document.getElementById('stationIdx');
  var nowPlaying  = document.getElementById('nowPlaying');
  var stationArt  = document.getElementById('stationArt');
  var vizCanvas   = document.getElementById('vizCanvas');
  var audio       = document.getElementById('radioAudio');

  // ── State ────────────────────────────────────────────────────────────────────
  var idx          = 0;
  var open         = false;
  var playing      = false;
  var muted        = false;
  var nowPollTimer = null;

  // ── Web Audio (lazy-init on first play to avoid autoplay policy issues) ──────
  var audioCtx  = null;
  var analyser  = null;
  var sourceNode= null;
  var vizRaf    = null;
  var vizBuf    = null;

  function initAudio() {
    if (audioCtx) return;
    audioCtx  = new (window.AudioContext || window.webkitAudioContext)();
    analyser  = audioCtx.createAnalyser();
    analyser.fftSize = 64;
    vizBuf    = new Uint8Array(analyser.frequencyBinCount);
    sourceNode= audioCtx.createMediaElementSource(audio);
    sourceNode.connect(analyser);
    analyser.connect(audioCtx.destination);
  }

  // ── Visualizer ───────────────────────────────────────────────────────────────
  var ctx2d = vizCanvas.getContext('2d');
  var VW    = vizCanvas.width;
  var VH    = vizCanvas.height;
  var BAR_COUNT = 12;
  var BAR_GAP   = 2;
  var BAR_W     = Math.floor((VW - BAR_GAP * (BAR_COUNT - 1)) / BAR_COUNT);

  function drawViz() {
    vizRaf = requestAnimationFrame(drawViz);
    ctx2d.clearRect(0, 0, VW, VH);
    if (!analyser) return;
    analyser.getByteFrequencyData(vizBuf);
    // sample BAR_COUNT evenly-spaced bins from the lower half of the spectrum
    var step = Math.floor(vizBuf.length / 2 / BAR_COUNT);
    for (var i = 0; i < BAR_COUNT; i++) {
      var val = vizBuf[i * step] / 255;
      var barH = Math.max(2, Math.round(val * VH));
      var x = i * (BAR_W + BAR_GAP);
      var alpha = 0.5 + val * 0.5;
      ctx2d.fillStyle = 'rgba(227,160,8,' + alpha + ')'; // --pulse colour
      ctx2d.fillRect(x, VH - barH, BAR_W, barH);
    }
  }

  function startViz() {
    if (!vizRaf) drawViz();
  }
  function stopViz() {
    if (vizRaf) { cancelAnimationFrame(vizRaf); vizRaf = null; }
    ctx2d.clearRect(0, 0, VW, VH);
  }

  // ── Now-playing polling ───────────────────────────────────────────────────────
  function fetchNowPlaying() {
    var id = STATIONS[idx].id;
    var url = songsUrl(id);
    fetch(url)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var songs = data.songs || [];
        if (songs.length) {
          var s = songs[0];
          nowPlaying.textContent = '\u266a ' + s.artist + ' \u2013 ' + s.title;
        }
      })
      .catch(function () { nowPlaying.textContent = ''; });
  }

  function startPolling() {
    clearInterval(nowPollTimer);
    nowPlaying.textContent = '';
    fetchNowPlaying();
    nowPollTimer = setInterval(fetchNowPlaying, 30000);
  }

  function stopPolling() {
    clearInterval(nowPollTimer);
    nowPollTimer = null;
    nowPlaying.textContent = '';
  }

  // ── Render station UI ─────────────────────────────────────────────────────────
  function renderStation() {
    var s = STATIONS[idx];
    stationName.textContent = s.title;
    stationDesc.textContent = s.desc;
    stationIdx.textContent  = (idx + 1) + ' / ' + STATIONS.length;
    stationArt.src          = artUrl(s.id);
    stationArt.alt          = s.title;
  }

  // ── Avatar toggle ─────────────────────────────────────────────────────────────
  avatarBtn.addEventListener('click', function () {
    open = !open;
    playerWrap.classList.toggle('open', open);
    avatarBtn.setAttribute('aria-expanded', open);
    if (open && !playing) startPlay();
  });

  // ── Play / Pause ──────────────────────────────────────────────────────────────
  playBtn.addEventListener('click', function () {
    if (playing) { audio.pause(); }
    else         { startPlay(); }
  });

  // ── Prev / Next ───────────────────────────────────────────────────────────────
  prevBtn.addEventListener('click', function () {
    idx = (idx - 1 + STATIONS.length) % STATIONS.length;
    switchStation();
  });
  nextBtn.addEventListener('click', function () {
    idx = (idx + 1) % STATIONS.length;
    switchStation();
  });

  // ── Mute ──────────────────────────────────────────────────────────────────────
  muteBtn.addEventListener('click', function () {
    muted = !muted;
    audio.muted = muted;
    iconSpeaker.style.display = muted ? 'none' : '';
    iconMuted.style.display   = muted ? ''     : 'none';
    muteBtn.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
  });

  // ── Volume ────────────────────────────────────────────────────────────────────
  volSlider.addEventListener('input', function () {
    audio.volume = parseFloat(volSlider.value);
    if (muted) {
      muted = false;
      audio.muted = false;
      iconSpeaker.style.display = '';
      iconMuted.style.display   = 'none';
    }
  });

  // ── Keyboard shortcuts (active when player is open) ───────────────────────────
  document.addEventListener('keydown', function (e) {
    if (!open) return;
    // Ignore if focus is inside a text input elsewhere
    var tag = document.activeElement && document.activeElement.tagName;
    if (tag === 'INPUT' && document.activeElement !== volSlider) return;
    if (tag === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      idx = (idx + 1) % STATIONS.length;
      switchStation();
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      idx = (idx - 1 + STATIONS.length) % STATIONS.length;
      switchStation();
    } else if (e.key === ' ') {
      e.preventDefault();
      if (playing) { audio.pause(); } else { startPlay(); }
    } else if (e.key === 'm' || e.key === 'M') {
      muteBtn.click();
    }
  });

  // ── Audio events ──────────────────────────────────────────────────────────────
  audio.addEventListener('pause', function () {
    setPlaying(false);
    stopViz();
    stopPolling();
  });
  audio.addEventListener('playing', function () {
    setPlaying(true);
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    startViz();
    startPolling();
  });

  // ── Helpers ───────────────────────────────────────────────────────────────────
  function switchStation() {
    var wasPlaying = playing;
    audio.pause();
    stopPolling();
    audio.src = streamUrl(STATIONS[idx].id);
    renderStation();
    if (wasPlaying) startPlay();
  }

  function startPlay() {
    initAudio();
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    if (!audio.src || audio.src === window.location.href) {
      audio.src = streamUrl(STATIONS[idx].id);
    }
    audio.load();
    audio.play().catch(function () {});
  }

  function setPlaying(state) {
    playing = state;
    iconPlay.style.display  = state ? 'none' : '';
    iconPause.style.display = state ? ''     : 'none';
    playBtn.setAttribute('aria-label', state ? 'Pause' : 'Play');
  }

  // ── Boot ──────────────────────────────────────────────────────────────────────
  audio.volume = parseFloat(volSlider.value);
  renderStation();

})();
// ─────────────────────────────────────────────────────────────────────────────
