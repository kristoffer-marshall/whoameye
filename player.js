// ── SomaFM Mini Player ────────────────────────────────────────────────────────
(function () {
  var STATIONS = [
    { id: 'beatblender',  title: 'Beat Blender',        desc: 'Deep-house & downtempo chill' },
    { id: 'groovesalad',  title: 'Groove Salad',         desc: 'Ambient/downtempo beats & grooves' },
    { id: 'dronezone',    title: 'Drone Zone',           desc: 'Atmospheric textures, minimal beats' },
    { id: 'deepspaceone', title: 'Deep Space One',       desc: 'Ambient electronic & space music' },
    { id: 'spacestation', title: 'Space Station Soma',   desc: 'Spaced-out ambient electronica' },
    { id: 'gsclassic',    title: 'Groove Salad Classic', desc: 'Classic early-2000s chilled grooves' },
    { id: 'groovesalad2', title: 'Groove Salad 2',       desc: 'Alternative chilled ambient mix' },
    { id: 'synphaera',    title: 'Synphaera Radio',      desc: 'Electronic ambient & space music' },
    { id: 'secretagent',  title: 'Secret Agent',         desc: 'Stylish spy-era lounge' },
    { id: 'indiepop',     title: 'Indie Pop Rocks!',     desc: 'New & classic indie pop' },
    { id: 'u80s',         title: 'Underground 80s',      desc: 'Synthpop & New Wave' },
    { id: 'lush',         title: 'Lush',                 desc: 'Mellow female vocals, electronic' },
    { id: 'seventies',    title: 'Left Coast 70s',       desc: 'Mellow Seventies album rock' },
    { id: 'defcon',       title: 'DEF CON Radio',        desc: 'Music for hacking' },
    { id: 'folkfwd',      title: 'Folk Forward',         desc: 'Indie folk & alt-folk' },
    { id: 'thetrip',      title: 'The Trip',             desc: 'Progressive house & trance' },
    { id: 'bossa',        title: 'Bossa Beyond',         desc: 'Bossa Nova, Samba & beyond' },
    { id: 'bootliquor',   title: 'Boot Liquor',          desc: 'Americana roots music' },
    { id: 'reggae',       title: 'Heavyweight Reggae',   desc: 'Reggae, Ska & Rocksteady' },
    { id: '7soul',        title: 'Seven Inch Soul',      desc: 'Vintage soul on 45 RPM vinyl' },
    { id: 'poptron',      title: 'PopTron',              desc: 'Electropop & indie dance rock' },
    { id: 'sonicuniverse',title: 'Sonic Universe',       desc: 'Avant-garde jazz & beyond' },
    { id: 'suburbsofgoa', title: 'Suburbs of Goa',       desc: 'Desi-influenced Asian world beats' },
    { id: 'fluid',        title: 'Fluid',                desc: 'Instrumental hiphop & future soul' },
    { id: 'darkzone',     title: 'The Dark Zone',        desc: 'Dark deep ambient' },
    { id: 'thistle',      title: 'ThistleRadio',         desc: 'Celtic roots & branches' },
    { id: 'dz2',          title: 'Drone Zone 2',         desc: 'Eclectic atmospheric textures' },
    { id: 'illstreet',    title: 'Illinois Street Lounge',desc: 'Bachelor pad & playful exotica' },
    { id: 'vaporwaves',   title: 'Vaporwaves',           desc: 'All Vaporwave. All the time.' },
    { id: 'cliqhop',      title: 'cliqhop idm',          desc: 'Blips, beeps & IDM beats' },
    { id: 'digitalis',    title: 'Digitalis',            desc: 'Digitally-affected analog rock' },
    { id: 'missioncontrol',title:'Mission Control',      desc: 'Celebrating NASA & space explorers' },
    { id: 'metal',        title: 'Metal Detector',       desc: 'Doom, prog, sludge & thrash' },
    { id: 'dubstep',      title: 'Dub Step Beyond',      desc: 'Dubstep, dub & deep bass' },
    { id: 'brfm',         title: 'Black Rock FM',        desc: 'From the Black Rock Desert' },
    { id: 'tikitime',     title: 'Tiki Time',            desc: 'Classic Tiki & island rhythms' },
    { id: 'covers',       title: 'Covers',               desc: 'Songs you know, artists you don\'t' },
    { id: 'n5md',         title: 'n5MD Radio',           desc: 'Ambient, post-rock & experimental' },
    { id: 'sf1033',       title: 'SF 10-33',             desc: 'Ambient + SF public safety radio' },
    { id: 'insound',      title: 'The In-Sound',         desc: '60s/70s Euro pop & psychedelia' },
    { id: 'live',         title: 'SomaFM Live',          desc: 'Live events & rebroadcasts' },
    { id: 'doomed',       title: 'Doomed',               desc: 'Dark industrial & ambient' },
    { id: 'scanner',      title: 'SF Police Scanner',    desc: 'SF public safety scanner feed' },
    { id: 'specials',     title: 'SomaFM Specials',      desc: 'Afternoon Jazz, Wavepool & more' },
    { id: 'chillits',     title: 'Chillits Radio',       desc: '25 years of chilling & camping' },
    { id: 'sfinsf',       title: 'SF in SF',             desc: 'Sci-fi & fantasy author readings' },
  ];

  function streamUrl(id) {
    return 'https://ice2.somafm.com/' + id + '-128-mp3';
  }

  var avatarBtn  = document.getElementById('avatarBtn');
  var playerWrap = document.getElementById('playerWrap');
  var playBtn    = document.getElementById('playBtn');
  var prevBtn    = document.getElementById('prevBtn');
  var nextBtn    = document.getElementById('nextBtn');
  var randBtn    = document.getElementById('randBtn');
  var iconPlay   = document.getElementById('iconPlay');
  var iconPause  = document.getElementById('iconPause');
  var volSlider  = document.getElementById('volSlider');
  var stationName= document.getElementById('stationName');
  var stationDesc= document.getElementById('stationDesc');
  var stationIdx  = document.getElementById('stationIdx');
  var nowPlaying   = document.getElementById('nowPlaying');
  var audio      = document.getElementById('radioAudio');

  var idx        = 0; // starts on Beat Blender
  var open       = false;
  var playing    = false;
  var nowTimer   = null;

  audio.volume = parseFloat(volSlider.value);
  renderStation();
  fetchNowPlaying();

  // ── Avatar toggle ────────────────────────────────────────────────────────────
  avatarBtn.addEventListener('click', function () {
    open = !open;
    playerWrap.classList.toggle('open', open);
    avatarBtn.setAttribute('aria-expanded', open);
    if (open && !playing) startPlay();
  });

  // ── Play / Pause ─────────────────────────────────────────────────────────────
  playBtn.addEventListener('click', function () {
    if (playing) { audio.pause(); setPlaying(false); }
    else         { startPlay(); }
  });

  // ── Prev / Next ──────────────────────────────────────────────────────────────
  prevBtn.addEventListener('click', function () {
    idx = (idx - 1 + STATIONS.length) % STATIONS.length;
    switchStation();
  });

  nextBtn.addEventListener('click', function () {
    idx = (idx + 1) % STATIONS.length;
    switchStation();
  });

  randBtn.addEventListener('click', function () {
    var next;
    do { next = Math.floor(Math.random() * STATIONS.length); } while (next === idx);
    idx = next;
    switchStation();
  });

  // ── Volume ───────────────────────────────────────────────────────────────────
  volSlider.addEventListener('input', function () {
    audio.volume = parseFloat(volSlider.value);
  });

  // ── Audio events ─────────────────────────────────────────────────────────────
  audio.addEventListener('pause',   function () { setPlaying(false); });
  audio.addEventListener('playing', function () { setPlaying(true);  });

  // ── Helpers ──────────────────────────────────────────────────────────────────
  function renderStation() {
    var s = STATIONS[idx];
    stationName.textContent = s.title;
    stationDesc.textContent = s.desc;
    stationIdx.textContent  = (idx + 1) + ' / ' + STATIONS.length;
  }

  function switchStation() {
    var wasPlaying = playing;
    audio.pause();
    setPlaying(false);
    audio.src = streamUrl(STATIONS[idx].id);
    renderStation();
    fetchNowPlaying();
    if (wasPlaying) startPlay();
  }

  function startPlay() {
    if (!audio.src || audio.src === window.location.href) {
      audio.src = streamUrl(STATIONS[idx].id);
    }
    audio.load();
    audio.play().catch(function () {});
  }

  function fetchNowPlaying() {
    clearTimeout(nowTimer);
    var id = STATIONS[idx].id;
    fetch('https://api.somafm.com/songs/' + id + '.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.songs && data.songs.length) {
          var s = data.songs[0];
          nowPlaying.textContent = '\u266B ' + s.artist + ' \u2014 ' + s.title;
        }
      })
      .catch(function () {})
      .finally(function () {
        // only keep polling while this station is still selected
        var capturedIdx = idx;
        nowTimer = setTimeout(function () {
          if (idx === capturedIdx) fetchNowPlaying();
        }, 30000);
      });
  }

  function setPlaying(state) {
    playing = state;
    iconPlay.style.display  = state ? 'none' : '';
    iconPause.style.display = state ? ''     : 'none';
    playBtn.setAttribute('aria-label', state ? 'Pause' : 'Play');
  }
})();
// ─────────────────────────────────────────────────────────────────────────────
