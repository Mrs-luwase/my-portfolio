// Leiss Uwase portfolio
// Small, purposeful interactivity: scrollspy nav, reveal-on-scroll,
// a live Kigali clock, a scroll-progress ruler, and a CV placeholder notice.

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header: blends into hero, solidifies on scroll ---------- */
  const header = document.querySelector('header');
  function updateHeaderState(){
    if (window.scrollY > 24) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  /* ---------- Reveal on scroll (single, restrained effect) ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Scrollspy nav ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navlinks a');
  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector(`.navlinks a[href="#${id}"]`);
      if (!link) return;
      if (entry.isIntersecting){
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => spyObserver.observe(s));

  /* ---------- Ruler scroll progress ---------- */
  const ticks = document.querySelectorAll('.ruler .tick');
  function updateRuler(){
    if (!ticks.length) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    const filledCount = Math.round(progress * ticks.length);
    ticks.forEach((tick, i) => {
      tick.classList.toggle('filled', i < filledCount);
    });
  }
  window.addEventListener('scroll', updateRuler, { passive: true });
  updateRuler();

  /* ---------- CV placeholder handling ---------- 
  const toast = document.getElementById('toast');
  function showToast(msg){
    if(!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 3200);
  }
  document.querySelectorAll('a[href="#cv"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('CV link not connected yet. Replace href="#cv" in index.html with your hosted CV URL.');
    });
  });*/

});
