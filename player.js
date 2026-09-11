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
  var favBtn     = document.getElementById('favBtn');
  var favIcon    = document.getElementById('favIcon');
  var favsListBtn= document.getElementById('favsListBtn');
  var favsDrawer = document.getElementById('favsDrawer');
  var favsList   = document.getElementById('favsList');
  var favsEmpty  = document.getElementById('favsEmpty');
  var iconPlay   = document.getElementById('iconPlay');
  var iconPause  = document.getElementById('iconPause');
  var volSlider  = document.getElementById('volSlider');
  var playerDisplay= document.getElementById('playerDisplay');
  var stationName= document.getElementById('stationName');
  var stationDesc= document.getElementById('stationDesc');
  var stationIdx  = document.getElementById('stationIdx');
  var nowPlaying   = document.getElementById('nowPlaying');
  var audio      = document.getElementById('radioAudio');

  var FAVS_KEY    = 'somaFavourites';
  var VOL_KEY     = 'somaVolume';
  var LAST_KEY    = 'somaLastStation';
  var RETRY_DELAY = 5000;  // ms before retrying a failed stream
  var MAX_RETRIES = 5;

  var favs        = loadFavs();
  var idx         = startingIdx();
  var open        = false;
  var playing     = false;
  var nowTimer    = null;
  var animTimer   = null;
  var favsOpen    = false;
  var retryCount  = 0;
  var retryTimer  = null;
  var buffering   = false;

  // Restore saved volume
  var savedVol = parseFloat(localStorage.getItem(VOL_KEY));
  if (!isNaN(savedVol)) {
    audio.volume  = savedVol;
    volSlider.value = savedVol;
  } else {
    audio.volume = parseFloat(volSlider.value);
  }

  renderStation();
  fetchNowPlaying();
  renderFavsList();

  // ── Avatar toggle ────────────────────────────────────────────────────────────
  avatarBtn.addEventListener('click', function () {
    open = !open;
    playerWrap.classList.toggle('open', open);
    avatarBtn.setAttribute('aria-expanded', open);
    setAvatarImg(open);
    if (open && !playing) { saveLastStation(); startPlay(); }
  });

  // ── Play / Pause ─────────────────────────────────────────────────────────────
  playBtn.addEventListener('click', function () {
    if (playing) { audio.pause(); setPlaying(false); }
    else         { startPlay(); }
  });

  // ── Prev / Next ──────────────────────────────────────────────────────────────
  prevBtn.addEventListener('click', function () {
    idx = (idx - 1 + STATIONS.length) % STATIONS.length;
    switchStation('prev');
  });

  nextBtn.addEventListener('click', function () {
    idx = (idx + 1) % STATIONS.length;
    switchStation('next');
  });

  randBtn.addEventListener('click', function () {
    var next;
    do { next = Math.floor(Math.random() * STATIONS.length); } while (next === idx);
    idx = next;
    switchStation('shuffle');
  });

  // ── Volume (with persistence) ────────────────────────────────────────────────
  volSlider.addEventListener('input', function () {
    audio.volume = parseFloat(volSlider.value);
    try { localStorage.setItem(VOL_KEY, volSlider.value); } catch (e) {}
  });

  // ── Favourite toggle ─────────────────────────────────────────────────────────
  favBtn.addEventListener('click', function () {
    var id = STATIONS[idx].id;
    var pos = favs.indexOf(id);
    if (pos === -1) { favs.push(id); }
    else            { favs.splice(pos, 1); }
    saveFavs();
    updateFavBtn();
    renderFavsList();
  });

  // ── Favourites drawer toggle ──────────────────────────────────────────────────
  favsListBtn.addEventListener('click', function () {
    favsOpen = !favsOpen;
    favsDrawer.classList.toggle('open', favsOpen);
    favsDrawer.setAttribute('aria-hidden', !favsOpen);
    favsListBtn.setAttribute('aria-expanded', favsOpen);
  });

  // ── Audio events ─────────────────────────────────────────────────────────────
  audio.addEventListener('playing', function () {
    setPlaying(true);
    setBuffering(false);
    retryCount = 0;
    clearTimeout(retryTimer);
    updateMediaSession();
  });

  audio.addEventListener('pause', function () {
    setPlaying(false);
    setBuffering(false);
    updateMediaSession();
  });

  audio.addEventListener('waiting', function () {
    if (playing) setBuffering(true);
  });

  audio.addEventListener('canplay', function () {
    setBuffering(false);
  });

  // ── Error & stall handling with auto-retry ────────────────────────────────────
  function scheduleRetry() {
    if (retryCount >= MAX_RETRIES) {
      nowPlaying.textContent = '\u26a0 Stream unavailable. Try another station.';
      setBuffering(false);
      return;
    }
    retryCount++;
    setBuffering(true);
    nowPlaying.textContent = '\u21ba Reconnecting\u2026 (attempt ' + retryCount + '/' + MAX_RETRIES + ')';
    retryTimer = setTimeout(function () {
      audio.src = streamUrl(STATIONS[idx].id);
      audio.load();
      audio.play().catch(function () { scheduleRetry(); });
    }, RETRY_DELAY);
  }

  audio.addEventListener('error', function () {
    if (playing || buffering) scheduleRetry();
  });

  audio.addEventListener('stalled', function () {
    if (playing) scheduleRetry();
  });

  // ── Media Session API (hardware/keyboard media keys) ─────────────────────────
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play',         function () { startPlay(); });
    navigator.mediaSession.setActionHandler('pause',        function () { audio.pause(); });
    navigator.mediaSession.setActionHandler('previoustrack',function () {
      idx = (idx - 1 + STATIONS.length) % STATIONS.length;
      switchStation('prev');
    });
    navigator.mediaSession.setActionHandler('nexttrack',    function () {
      idx = (idx + 1) % STATIONS.length;
      switchStation('next');
    });
  }

  function updateMediaSession() {
    if (!('mediaSession' in navigator)) return;
    var s = STATIONS[idx];
    navigator.mediaSession.metadata = new MediaMetadata({
      title:  s.title,
      artist: 'SomaFM',
      album:  s.desc,
      artwork: [{ src: s.img, sizes: '120x120', type: 'image/jpeg' }]
    });
    navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
  }

  // ── Helpers ──────────────────────────────────────────────────────────────────
  function renderStation(skipImg) {
    var s = STATIONS[idx];
    playerDisplay.classList.remove('switching');
    void playerDisplay.offsetWidth;
    playerDisplay.classList.add('switching');
    stationName.textContent = s.title;
    stationDesc.textContent = s.desc;
    stationIdx.textContent  = (idx + 1) + ' / ' + STATIONS.length;
    if (open && !skipImg) setAvatarImg(true);
    renderFavsList();
    setTimeout(function () { playerDisplay.classList.remove('switching'); }, 250);
  }

  function setAvatarImg(showStation) {
    if (showStation) {
      avatarEye.src = STATIONS[idx].img;
      avatarEye.style.objectPosition = 'center center';
      avatarEye.style.transform = 'none';
      avatarEye.style.maskImage = 'none';
      avatarEye.style.webkitMaskImage = 'none';
      avatarBtn.classList.add('station-open');
    } else {
      avatarEye.src = 'eye.gif';
      avatarEye.style.objectPosition = 'calc(50% + 20px) center';
      avatarEye.style.transform = 'scaleY(1.05)';
      avatarEye.style.maskImage = '';
      avatarEye.style.webkitMaskImage = '';
      avatarBtn.classList.remove('station-open');
    }
  }

  function switchStation(dir) {
    var wasPlaying = playing;
    clearTimeout(retryTimer);
    retryCount = 0;
    audio.pause();
    setPlaying(false);
    setBuffering(false);
    audio.src = streamUrl(STATIONS[idx].id);
    saveLastStation();
    renderStation(true);
    fetchNowPlaying();
    if (open) animateAvatar(dir);
    if (wasPlaying) startPlay();
    updateMediaSession();
  }

  function animateAvatar(dir) {
    clearTimeout(animTimer);
    if (dir === 'shuffle') {
      animateShuffle();
    } else {
      slideImg(STATIONS[idx].img, dir === 'prev' ? 'anim-prev' : 'anim-next');
    }
  }

  function slideImg(src, cls) {
    avatarEye.classList.remove('anim-prev', 'anim-next');
    void avatarEye.offsetWidth; // restart animation
    avatarEye.src = src;
    avatarEye.classList.add(cls);
    animTimer = setTimeout(function () {
      avatarEye.classList.remove(cls);
    }, 220);
  }

  function animateShuffle() {
    // pick 4 random intermediate stations (not the final destination)
    var intermediates = [];
    while (intermediates.length < 4) {
      var r = Math.floor(Math.random() * STATIONS.length);
      if (r !== idx && intermediates.indexOf(r) === -1) intermediates.push(r);
    }
    // sequence: 4 intermediates then the real destination
    var sequence = intermediates.concat([idx]);
    var step = 0;
    var interval = 160; // ms per image
    function showNext() {
      slideImg(STATIONS[sequence[step]].img, 'anim-next');
      step++;
      if (step < sequence.length) {
        animTimer = setTimeout(showNext, interval);
        interval += 40; // each step slows down slightly
      }
    }
    showNext();
  }

  function startPlay() {
    if (!audio.src || audio.src === window.location.href) {
      audio.src = streamUrl(STATIONS[idx].id);
    }
    setBuffering(true);
    audio.load();
    audio.play().catch(function () { setBuffering(false); });
  }

  function setBuffering(state) {
    buffering = state;
    playBtn.classList.toggle('buffering', state);
  }

  function saveLastStation() {
    try { localStorage.setItem(LAST_KEY, STATIONS[idx].id); } catch (e) {}
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

  // ── Favourites helpers ────────────────────────────────────────────────────────────
  function loadFavs() {
    try { return JSON.parse(localStorage.getItem(FAVS_KEY)) || []; }
    catch (e) { return []; }
  }

  function saveFavs() {
    try { localStorage.setItem(FAVS_KEY, JSON.stringify(favs)); }
    catch (e) {}
  }

  function startingIdx() {
    // Priority: last played > first favourite > default (Beat Blender)
    var lastId = localStorage.getItem(LAST_KEY);
    if (lastId) {
      var li = STATIONS.findIndex(function (s) { return s.id === lastId; });
      if (li !== -1) return li;
    }
    if (favs.length) {
      var fi = STATIONS.findIndex(function (s) { return s.id === favs[0]; });
      if (fi !== -1) return fi;
    }
    return 0;
  }

  function updateFavBtn() {
    var active = favs.indexOf(STATIONS[idx].id) !== -1;
    favIcon.setAttribute('fill', active ? 'currentColor' : 'none');
    favBtn.classList.toggle('fav-active', active);
    favBtn.setAttribute('aria-pressed', active);
  }

  function renderFavsList() {
    updateFavBtn();
    favsList.innerHTML = '';
    var hasFavs = favs.length > 0;
    favsEmpty.style.display = hasFavs ? 'none' : '';
    favs.forEach(function (id) {
      var station = STATIONS.find(function (s) { return s.id === id; });
      if (!station) return;
      var li = document.createElement('li');
      li.className = station.id === STATIONS[idx].id ? 'active' : '';
      li.innerHTML =
        '<img src="' + station.img + '" alt="" aria-hidden="true" />' +
        '<span class="fav-title">' + station.title + '</span>' +
        '<button class="fav-del" aria-label="Remove ' + station.title + ' from favourites">&times;</button>';
      // click row → switch to station
      li.addEventListener('click', function (e) {
        if (e.target.classList.contains('fav-del')) return;
        var newIdx = STATIONS.findIndex(function (s) { return s.id === id; });
        if (newIdx !== -1 && newIdx !== idx) {
          idx = newIdx;
          switchStation('next');
        }
      });
      // click × → remove from favourites
      li.querySelector('.fav-del').addEventListener('click', function (e) {
        e.stopPropagation();
        favs = favs.filter(function (f) { return f !== id; });
        saveFavs();
        renderFavsList();
      });
      favsList.appendChild(li);
    });
  }
})();
// ─────────────────────────────────────────────────────────────────────────────
