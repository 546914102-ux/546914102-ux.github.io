(() => {
  const hero = document.querySelector('.vesper');
  if (!hero) return;
  const video = hero.querySelector('.ves-video');
  const finishIntro = () => hero.classList.add('vice-intro-complete');
  const revealTimer = setTimeout(finishIntro, 2450);
  video.addEventListener('canplay', () => {
    setTimeout(() => { clearTimeout(revealTimer); finishIntro(); }, 1850);
  }, {once:true});
  const animated = [...hero.querySelectorAll('.ves-appear')];
  animated.forEach(el => el.addEventListener('animationend', e => {
    if (e.target === el) el.classList.add('is-in');
  }));
  requestAnimationFrame(() => requestAnimationFrame(() => {
    animated.forEach(el => {
      if (!el.getAnimations().some(a => ['running','finished'].includes(a.playState))) el.classList.add('is-in');
    });
  }));
  const burger = hero.querySelector('.ves-burger');
  const nav = hero.querySelector('.ves-nav');
  const mobile = matchMedia('(max-width:900px)');
  const setMenu = open => {
    hero.classList.toggle('ves-menu-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.inert = mobile.matches && !open;
  };
  setMenu(false);
  burger.addEventListener('click', () => setMenu(!hero.classList.contains('ves-menu-open')));
  hero.querySelector('.ves-backdrop').addEventListener('click', () => setMenu(false));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  hero.addEventListener('keydown', e => {if(e.key === 'Escape'){setMenu(false);burger.focus();}});
  mobile.addEventListener('change', () => setMenu(false));
})();
