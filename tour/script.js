  let currentModel = 'b30';
  let currentView = 'front';

  const modelNames = {
    b30: 'BAIC <span class="gold">B30</span>',
    b40: 'BAIC <span class="gold">B40</span>',
    bj40: 'BAIC <span class="gold">BJ40</span>',
    bj80: 'BAIC <span class="gold">BJ80</span>',
    x55: 'BAIC <span class="gold">X55</span>',
    x55plus: 'BAIC <span class="gold">X55 Plus</span>',
  };

  const podImages = {
    b30: { front: 'images/pod_b30_front.png', side: 'images/pod_b30_side.png', rear: 'images/pod_b30_rear.png' },
    b40: { front: 'images/pod_b40_front.png', side: 'images/pod_b40_side.png', rear: 'images/pod_b40_rear.png' },
    bj40: { front: 'images/pod_bj40_front.png', side: 'images/pod_bj40_side.png', rear: 'images/pod_bj40_rear.png' },
    bj80: { front: 'images/pod_bj80_front.png', side: 'images/pod_bj80_side.png', rear: 'images/pod_bj80_rear.png' },
    x55: { front: 'images/pod_x55_front.png', side: 'images/pod_x55_side.png', rear: 'images/pod_x55_rear.png' },
    x55plus: { front: 'images/pod_x55plus_front.png', side: 'images/pod_x55plus_side.png', rear: 'images/pod_x55plus_rear.png' },
  };

  function selectPod(model) {
    currentModel = model;
    // Update card active state
    document.querySelectorAll('.pod-card').forEach(c => c.classList.remove('active'));
    document.querySelector(`.pod-card[data-model="${model}"]`).classList.add('active');
    // Update title
    document.getElementById('podViewerTitle').innerHTML = modelNames[model] + ' Aero-Cargo Pod';
    // Update images
    updateViewerImages();
  }

  function switchView(view) {
    currentView = view;
    document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    updateViewerImages();
  }

  function updateViewerImages() {
    const views = ['front', 'side', 'rear'];
    views.forEach(v => {
      const img = document.getElementById('img-' + v);
      img.src = podImages[currentModel][v];
      if (v === currentView) {
        img.className = 'visible';
      } else {
        img.className = 'hidden';
      }
    });
  }

  // === LIGHTBOX ===
  function openLightbox(src) {
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
    document.body.style.overflow = '';
  }

  // Close lightbox on Escape
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // Active nav link on scroll
  window.addEventListener('scroll', () => {
    const sections = ['pods', 'aerorack', 'carriers', 'cooler', 'btm'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 200) current = id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  });


    // AUDIO
const music = document.getElementById("bgMusic");

music.volume = 0.3;

/* Try autoplay immediately */
music.play().catch(() => {

  /* If browser blocks autoplay,
     play after first interaction */

  document.body.addEventListener("click", () => {
    music.play();
  }, { once:true });

});


