// Leiss Uwase portfolio
// Purposeful interactivity only: scrollspy nav, an editor-style line-number
// gutter that tracks scroll progress, a single hero typing moment, and
// the CV link.

document.addEventListener('DOMContentLoaded', () => {

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

  /* ---------- Gutter: editor-style scroll progress ---------- */
  const nums = document.querySelectorAll('.gutter .num');
  function updateGutter(){
    if (!nums.length) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;
    const filledCount = Math.round(progress * nums.length);
    nums.forEach((n, i) => {
      n.classList.toggle('filled', i < filledCount);
    });
  }
  window.addEventListener('scroll', updateGutter, { passive: true });
  updateGutter();

  /* ---------- One orchestrated motion: hero terminal line types out ---------- */
  const term = document.querySelector('.termline');
  if (term && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const full = term.innerHTML;
    const promptPart = term.querySelector('.prompt') ? term.querySelector('.prompt').outerHTML : '';
    const staticPart = 'leiss@kigali:~$ ';
    const typed = 'whoami';
    term.innerHTML = promptPart + '<span>:</span><span class="path">~</span><span>$ </span><span class="typed"></span><span class="type-cursor">▌</span>';
    const target = term.querySelector('.typed');
    const cursor = term.querySelector('.type-cursor');
    let i = 0;
    function tick(){
      if (i <= typed.length){
        target.textContent = typed.slice(0, i);
        i++;
        setTimeout(tick, 80);
      } else if (cursor) {
        cursor.style.animation = 'blink 1s step-end infinite';
      }
    }
    setTimeout(tick, 300);
  }

  /* ---------- Project screenshot slideshows ---------- */
  document.querySelectorAll('[data-slideshow]').forEach(box => {
    const slides = Array.from(box.querySelectorAll('.slide'));
    if (slides.length < 2) return;
    const dotsWrap = box.querySelector('.dots');
    let current = 0;
    let timer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      if (i === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', 'Show screenshot ' + (i + 1));
      dot.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function goTo(i){
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (i + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
    }
    function next(){ goTo(current + 1); }
    function prev(){ goTo(current - 1); }

    const nextBtn = box.querySelector('.nav-next');
    const prevBtn = box.querySelector('.nav-prev');
    if (nextBtn) nextBtn.addEventListener('click', () => { next(); restart(); });
    if (prevBtn) prevBtn.addEventListener('click', () => { prev(); restart(); });

    function restart(){
      clearInterval(timer);
      timer = setInterval(next, 4500);
    }
    restart();
    box.addEventListener('mouseenter', () => clearInterval(timer));
    box.addEventListener('mouseleave', restart);
  });

  /* ---------- CV link ---------- */
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
  });

});
