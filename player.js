// ── SomaFM Mini Player ────────────────────────────────────────────────────────
(function () {
  var STATIONS = [
    { id: 'beatblender',   img: 'https://api.somafm.com/logos/120/beatblender120.png',      title: 'Beat Blender',          desc: 'Deep-house & downtempo chill' },
    { id: 'groovesalad',   img: 'https://api.somafm.com/logos/120/groovesalad120.png',      title: 'Groove Salad',           desc: 'Ambient/downtempo beats & grooves' },
    { id: 'dronezone',     img: 'https://api.somafm.com/logos/120/dronezone120.jpg',        title: 'Drone Zone',             desc: 'Atmospheric textures, minimal beats' },
    { id: 'deepspaceone',  img: 'https://api.somafm.com/logos/120/deepspaceone120.gif',     title: 'Deep Space One',         desc: 'Ambient electronic & space music' },
    { id: 'spacestation',  img: 'https://api.somafm.com/logos/120/spacestation120.jpg',     title: 'Space Station Soma',     desc: 'Spaced-out ambient electronica' },
    { id: 'gsclassic',     img: 'https://api.somafm.com/logos/120/gsclassic120.jpg',        title: 'Groove Salad Classic',   desc: 'Classic early-2000s chilled grooves' },
    { id: 'groovesalad2',  img: 'https://api.somafm.com/logos/120/groovesalad2120.png',     title: 'Groove Salad 2',         desc: 'Alternative chilled ambient mix' },
    { id: 'synphaera',     img: 'https://api.somafm.com/logos/120/synphaera120.jpg',        title: 'Synphaera Radio',        desc: 'Electronic ambient & space music' },
    { id: 'secretagent',   img: 'https://api.somafm.com/logos/120/secretagent120.jpg',      title: 'Secret Agent',           desc: 'Stylish spy-era lounge' },
    { id: 'indiepop',      img: 'https://api.somafm.com/logos/120/indiepop120.jpg',         title: 'Indie Pop Rocks!',       desc: 'New & classic indie pop' },
    { id: 'u80s',          img: 'https://api.somafm.com/logos/120/u80s120.png',             title: 'Underground 80s',        desc: 'Synthpop & New Wave' },
    { id: 'lush',          img: 'https://api.somafm.com/logos/120/lush120.jpg',             title: 'Lush',                   desc: 'Mellow female vocals, electronic' },
    { id: 'seventies',     img: 'https://api.somafm.com/logos/120/seventies120.jpg',        title: 'Left Coast 70s',         desc: 'Mellow Seventies album rock' },
    { id: 'defcon',        img: 'https://api.somafm.com/logos/120/defcon120.png',           title: 'DEF CON Radio',          desc: 'Music for hacking' },
    { id: 'folkfwd',       img: 'https://api.somafm.com/logos/120/folkfwd120.jpg',          title: 'Folk Forward',           desc: 'Indie folk & alt-folk' },
    { id: 'thetrip',       img: 'https://api.somafm.com/logos/120/thetrip120.jpg',          title: 'The Trip',               desc: 'Progressive house & trance' },
    { id: 'bossa',         img: 'https://api.somafm.com/logos/120/bossa120.jpg',            title: 'Bossa Beyond',           desc: 'Bossa Nova, Samba & beyond' },
    { id: 'bootliquor',    img: 'https://api.somafm.com/logos/120/bootliquor120.jpg',       title: 'Boot Liquor',            desc: 'Americana roots music' },
    { id: 'reggae',        img: 'https://api.somafm.com/logos/120/reggae120.png',           title: 'Heavyweight Reggae',     desc: 'Reggae, Ska & Rocksteady' },
    { id: '7soul',         img: 'https://api.somafm.com/logos/120/7soul120.png',            title: 'Seven Inch Soul',        desc: 'Vintage soul on 45 RPM vinyl' },
    { id: 'poptron',       img: 'https://api.somafm.com/logos/120/poptron120.png',          title: 'PopTron',                desc: 'Electropop & indie dance rock' },
    { id: 'sonicuniverse', img: 'https://api.somafm.com/logos/120/sonicuniverse120.jpg',    title: 'Sonic Universe',         desc: 'Avant-garde jazz & beyond' },
    { id: 'suburbsofgoa',  img: 'https://api.somafm.com/logos/120/sog120.jpg',              title: 'Suburbs of Goa',         desc: 'Desi-influenced Asian world beats' },
    { id: 'fluid',         img: 'https://api.somafm.com/logos/120/fluid120.jpg',            title: 'Fluid',                  desc: 'Instrumental hiphop & future soul' },
    { id: 'darkzone',      img: 'https://api.somafm.com/logos/120/darkzone120.jpg',         title: 'The Dark Zone',          desc: 'Dark deep ambient' },
    { id: 'thistle',       img: 'https://api.somafm.com/logos/120/thistle120.png',          title: 'ThistleRadio',           desc: 'Celtic roots & branches' },
    { id: 'dz2',           img: 'https://api.somafm.com/logos/120/dz2120.jpg',              title: 'Drone Zone 2',           desc: 'Eclectic atmospheric textures' },
    { id: 'illstreet',     img: 'https://api.somafm.com/logos/120/illstreet120.jpg',        title: 'Illinois Street Lounge', desc: 'Bachelor pad & playful exotica' },
    { id: 'vaporwaves',    img: 'https://api.somafm.com/logos/120/vaporwaves120.jpg',       title: 'Vaporwaves',             desc: 'All Vaporwave. All the time.' },
    { id: 'cliqhop',       img: 'https://api.somafm.com/logos/120/cliqhop120.png',          title: 'cliqhop idm',            desc: 'Blips, beeps & IDM beats' },
    { id: 'digitalis',     img: 'https://api.somafm.com/logos/120/digitalis120.png',        title: 'Digitalis',              desc: 'Digitally-affected analog rock' },
    { id: 'missioncontrol',img: 'https://api.somafm.com/logos/120/missioncontrol120.jpg',   title: 'Mission Control',        desc: 'Celebrating NASA & space explorers' },
    { id: 'metal',         img: 'https://api.somafm.com/logos/120/metal120.png',            title: 'Metal Detector',         desc: 'Doom, prog, sludge & thrash' },
    { id: 'dubstep',       img: 'https://api.somafm.com/logos/120/dubstep120.png',          title: 'Dub Step Beyond',        desc: 'Dubstep, dub & deep bass' },
    { id: 'brfm',          img: 'https://api.somafm.com/logos/120/brfm120.jpg',             title: 'Black Rock FM',          desc: 'From the Black Rock Desert' },
    { id: 'tikitime',      img: 'https://api.somafm.com/logos/120/tikitime120.jpg',         title: 'Tiki Time',              desc: 'Classic Tiki & island rhythms' },
    { id: 'covers',        img: 'https://api.somafm.com/logos/120/covers120.jpg',           title: 'Covers',                 desc: "Songs you know, artists you don't" },
    { id: 'n5md',          img: 'https://api.somafm.com/logos/120/n5md120.png',             title: 'n5MD Radio',             desc: 'Ambient, post-rock & experimental' },
    { id: 'sf1033',        img: 'https://api.somafm.com/logos/120/sf1033120.png',           title: 'SF 10-33',               desc: 'Ambient + SF public safety radio' },
    { id: 'insound',       img: 'https://api.somafm.com/logos/120/insound120.jpg',          title: 'The In-Sound',           desc: '60s/70s Euro pop & psychedelia' },
    { id: 'live',          img: 'https://api.somafm.com/logos/120/live120.jpg',             title: 'SomaFM Live',            desc: 'Live events & rebroadcasts' },
    { id: 'doomed',        img: 'https://api.somafm.com/logos/120/doomed120.png',           title: 'Doomed',                 desc: 'Dark industrial & ambient' },
    { id: 'scanner',       img: 'https://api.somafm.com/logos/120/sf1033120.png',           title: 'SF Police Scanner',      desc: 'SF public safety scanner feed' },
    { id: 'specials',      img: 'https://api.somafm.com/logos/120/SomaFMDJSquare120.jpg',   title: 'SomaFM Specials',        desc: 'Afternoon Jazz, Wavepool & more' },
    { id: 'chillits',      img: 'https://api.somafm.com/logos/120/chillits120.png',         title: 'Chillits Radio',         desc: '25 years of chilling & camping' },
    { id: 'sfinsf',        img: 'https://api.somafm.com/logos/120/sfinsf120.jpg',           title: 'SF in SF',               desc: 'Sci-fi & fantasy author readings' },
  ];

  function streamUrl(id) {
    return 'https://ice2.somafm.com/' + id + '-128-mp3';
  }



  var avatarBtn  = document.getElementById('avatarBtn');
  var avatarEye  = document.getElementById('avatarEye');
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
    setAvatarImg(open);
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
    if (open) setAvatarImg(true);
  }

  function setAvatarImg(showStation) {
    if (showStation) {
      avatarEye.src = STATIONS[idx].img;
      avatarEye.style.objectPosition = 'center center';
      avatarEye.style.transform = 'none';
      avatarEye.style.maskImage = 'none';
      avatarEye.style.webkitMaskImage = 'none';
    } else {
      avatarEye.src = 'eye.gif';
      avatarEye.style.objectPosition = 'calc(50% + 20px) center';
      avatarEye.style.transform = 'scaleY(1.05)';
      avatarEye.style.maskImage = '';
      avatarEye.style.webkitMaskImage = '';
    }
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
