// ── Neon hexagon-forming particles animation ──────────────────────────────────
// Based on codepen.io/towc/pen/mJzOWJ
(function () {
  // Maximum spread of the animation from center, as a fraction of half the screen width/height.
  // 1.0 = full half-viewport on that axis; 0.2 = 20% of half the viewport.
  var maxSpreadFractionX = 0.4;
  var maxSpreadFractionY = 1.0;

  var c = document.getElementById('bg');
  var w = c.width = window.innerWidth;
  var h = c.height = window.innerHeight;
  var ctx = c.getContext('2d');

  var opts = {
    len: 30,
    count: 20,
    baseTime: 10,
    addedTime: 8,
    dieChance: .02,
    spawnChance: 1,
    sparkChance: .1,
    sparkDist: 10,
    sparkSize: 3,
    color: 'hsl(hue,100%,light%)',
    baseLight: 50,
    addedLight: 10,
    shadowToTimePropMult: 6,
    baseLightInputMultiplier: .01,
    addedLightInputMultiplier: .02,
    cx: w / 2,
    cy: h / 2,
    repaintAlpha: .04,
    hueChange: .7
  };

  var tick = 0,
      lines = [],
      dieX = (w / 2 * maxSpreadFractionX) / opts.len,
      dieY = (h / 2 * maxSpreadFractionY) / opts.len,
      baseRad = Math.PI * 2 / 6;

  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, w, h);

  function loop() {
    window.requestAnimationFrame(loop);
    ++tick;
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,' + opts.repaintAlpha + ')';
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    if (lines.length < opts.count && Math.random() < opts.spawnChance)
      lines.push(new Line());
    lines.forEach(function (line) { line.step(); });
  }

  function Line() { this.reset(); }
  Line.prototype.reset = function () {
    this.x = 0; this.y = 0;
    this.addedX = 0; this.addedY = 0;
    this.rad = 0;
    this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
    this.color = opts.color.replace('hue', tick * opts.hueChange);
    this.cumulativeTime = 0;
    this.beginPhase();
  };
  Line.prototype.beginPhase = function () {
    this.x += this.addedX;
    this.y += this.addedY;
    this.time = 0;
    this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;
    this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
    this.addedX = Math.cos(this.rad);
    this.addedY = Math.sin(this.rad);
    if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY)
      this.reset();
  };
  Line.prototype.step = function () {
    ++this.time;
    ++this.cumulativeTime;
    if (this.time >= this.targetTime) this.beginPhase();
    var prop = this.time / this.targetTime,
        wave = Math.sin(prop * Math.PI / 2),
        x = this.addedX * wave,
        y = this.addedY * wave;
    ctx.shadowBlur = prop * opts.shadowToTimePropMult;
    ctx.fillStyle = ctx.shadowColor = this.color.replace('light', opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
    ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);
    if (Math.random() < opts.sparkChance)
      ctx.fillRect(
        opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2,
        opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2,
        opts.sparkSize, opts.sparkSize
      );
  };

  window.addEventListener('resize', function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);
    opts.cx = w / 2;
    opts.cy = h / 2;
    dieX = (w / 2 * maxSpreadFractionX) / opts.len;
    dieY = (h / 2 * maxSpreadFractionY) / opts.len;
  });

  loop();
})();
// ─────────────────────────────────────────────────────────────────────────────
