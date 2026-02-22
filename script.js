// ═══════════════ PARTICLES ═══════════════
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * W;
    this.y = Math.random() * H;
    this.r = Math.random() * 2.5 + .5;
    this.dx = (Math.random() - .5) * .6;
    this.dy = (Math.random() - .5) * .6;
    this.alpha = Math.random() * .5 + .1;
    this.color = Math.random() > .5 ? '#39ff6a' : '#f5c300';
  }
  update() {
    this.x += this.dx; this.y += this.dy;
    if(this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.shadowBlur = 8; ctx.shadowColor = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

for(let i = 0; i < 90; i++) particles.push(new Particle());

function drawConnections() {
  for(let i = 0; i < particles.length; i++) {
    for(let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx*dx + dy*dy);
      if(dist < 100) {
        ctx.save();
        ctx.globalAlpha = (1 - dist/100) * .15;
        ctx.strokeStyle = '#39ff6a';
        ctx.lineWidth = .6;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
        ctx.restore();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ═══════════════ TYPEWRITER ═══════════════
const texts = ['Articulações', 'Musculares', 'nas Costas', 'Crônicas'];
let tIdx = 0, cIdx = 0, deleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const full = texts[tIdx];
  if (!deleting) {
    typeEl.textContent = full.slice(0, ++cIdx);
    if (cIdx === full.length) { deleting = true; setTimeout(type, 1800); return; }
    setTimeout(type, 80);
  } else {
    typeEl.textContent = full.slice(0, --cIdx);
    if (cIdx === 0) { deleting = false; tIdx = (tIdx + 1) % texts.length; setTimeout(type, 400); return; }
    setTimeout(type, 45);
  }
}
type();

// ═══════════════ SCROLL REVEAL ═══════════════
const allReveal = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale');
const revObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) { e.target.classList.add('visible'); revObs.unobserve(e.target); }
  });
}, { threshold: .12 });
allReveal.forEach(el => revObs.observe(el));

// ═══════════════ ANIMATED COUNTERS ═══════════════
function animCounter(el, target, suffix) {
  let start = 0;
  const step = target / 80;
  const interval = setInterval(() => {
    start = Math.min(start + step, target);
    el.textContent = Math.round(start) + suffix;
    if(start >= target) clearInterval(interval);
  }, 20);
}

const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      const el = e.target;
      animCounter(el, +el.dataset.target, el.dataset.suffix || '');
      counterObs.unobserve(el);
    }
  });
}, { threshold: .5 });
document.querySelectorAll('.counter-num').forEach(el => counterObs.observe(el));

// ═══════════════ INGREDIENT BARS ═══════════════
const barObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      const bar = e.target.querySelector('.ing-bar');
      if(bar) { setTimeout(() => bar.style.width = bar.dataset.width, 200); }
      barObs.unobserve(e.target);
    }
  });
}, { threshold: .3 });
document.querySelectorAll('.ing-card').forEach(el => barObs.observe(el));

// ═══════════════ BEFORE/AFTER DRAG SLIDER ═══════════════
const baContainer = document.querySelector('.ba-container');
if(baContainer) {
  const beforeEl = baContainer.querySelector('.ba-before');
  const handle = baContainer.querySelector('.ba-handle');
  let dragging = false;

  function setSlider(x) {
    const rect = baContainer.getBoundingClientRect();
    let pct = Math.max(5, Math.min(95, ((x - rect.left) / rect.width) * 100));
    beforeEl.style.clipPath = `inset(0 ${100-pct}% 0 0)`;
    handle.style.left = pct + '%';
  }
  // initial
  setSlider(baContainer.getBoundingClientRect().left + baContainer.offsetWidth * .5);

  handle.addEventListener('mousedown', () => dragging = true);
  handle.addEventListener('touchstart', () => dragging = true, {passive:true});
  window.addEventListener('mouseup', () => dragging = false);
  window.addEventListener('touchend', () => dragging = false);
  window.addEventListener('mousemove', e => { if(dragging) setSlider(e.clientX); });
  window.addEventListener('touchmove', e => { if(dragging) setSlider(e.touches[0].clientX); }, {passive:true});

  // auto-animate hint on load
  setTimeout(() => {
    let dir = -1, pos = 50;
    const hint = setInterval(() => {
      if(dragging) { clearInterval(hint); return; }
      pos += dir * .6;
      if(pos < 25 || pos > 75) { dir *= -1; if(Math.abs(pos-50) < 2) clearInterval(hint); }
      setSlider(baContainer.getBoundingClientRect().left + baContainer.offsetWidth * (pos/100));
    }, 16);
    setTimeout(() => clearInterval(hint), 4000);
  }, 1200);
}

// ═══════════════ PARALLAX HERO IMAGE ═══════════════
const heroImg = document.querySelector('.hero-float');
window.addEventListener('mousemove', e => {
  if(!heroImg) return;
  const x = (e.clientX / window.innerWidth - .5) * 18;
  const y = (e.clientY / window.innerHeight - .5) * 12;
  heroImg.style.transform = `translate(${x}px,${y}px)`;
});

// ═══════════════ CONFETTI ON CTA CLICK ═══════════════
const confCanvas = document.getElementById('confetti-canvas');
const confCtx = confCanvas ? confCanvas.getContext('2d') : null;
let confPieces = [], confRunning = false;

function launchConfetti() {
  if(!confCanvas || confRunning) return;
  confRunning = true;
  confCanvas.style.display = 'block';
  confCanvas.width = window.innerWidth;
  confCanvas.height = window.innerHeight;
  const colors = ['#f5c300','#2db84a','#39ff6a','#fff','#c0392b','#128c50'];
  for(let i = 0; i < 120; i++) {
    confPieces.push({
      x: Math.random() * confCanvas.width,
      y: -10 - Math.random() * 200,
      r: Math.random() * 7 + 3,
      c: colors[Math.floor(Math.random()*colors.length)],
      dx: (Math.random()-.5)*3,
      dy: Math.random()*4+2,
      rot: Math.random()*360,
      drot: (Math.random()-.5)*8,
      shape: Math.random() > .5 ? 'rect' : 'circle'
    });
  }
  function drawConf() {
    confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    confPieces = confPieces.filter(p => p.y < confCanvas.height + 20);
    confPieces.forEach(p => {
      p.x += p.dx; p.y += p.dy; p.rot += p.drot;
      confCtx.save();
      confCtx.translate(p.x, p.y);
      confCtx.rotate(p.rot * Math.PI/180);
      confCtx.fillStyle = p.c;
      if(p.shape === 'rect') confCtx.fillRect(-p.r, -p.r/2, p.r*2, p.r);
      else { confCtx.beginPath(); confCtx.arc(0,0,p.r,0,Math.PI*2); confCtx.fill(); }
      confCtx.restore();
    });
    if(confPieces.length > 0) requestAnimationFrame(drawConf);
    else { confCanvas.style.display='none'; confRunning=false; }
  }
  drawConf();
}

document.querySelectorAll('.btn-glow').forEach(btn => {
  btn.addEventListener('click', () => setTimeout(launchConfetti, 100));
});

// ═══════════════ CURSOR GLOW (desktop only) ═══════════════
if(window.matchMedia('(pointer:fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `position:fixed;pointer-events:none;z-index:9999;width:28px;height:28px;border-radius:50%;background:radial-gradient(circle,rgba(57,255,106,.35),transparent);transform:translate(-50%,-50%);transition:transform .1s;mix-blend-mode:screen;`;
  document.body.appendChild(glow);
  window.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
}

// ═══════════════ STICKY NAV SHOW ═══════════════
window.addEventListener('scroll', () => {
  const floatWa = document.getElementById('float-wa');
  if(floatWa) floatWa.style.opacity = window.scrollY > 200 ? '1' : '0';
});
