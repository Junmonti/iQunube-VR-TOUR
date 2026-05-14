
  // Active nav on scroll
  window.addEventListener('scroll', () => {
    const sections = ['about', 'products', 'tour', 'vision', 'contact'];
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 200) current = id;
    });
    document.querySelectorAll('.nav-links a:not(.nav-cta)').forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current ? '#D4AF37' : '';
    });
  });
