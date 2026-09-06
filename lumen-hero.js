(() => {
  const hero = document.querySelector('.lumen-hero');
  if (!hero) return;
  const grid = hero.querySelector('.lumen-grid');
  const vertical = ['12.6%', '37.5%', '61.9%', '86.2%'];
  const horizontal = ['32.7%', '71.4%'];
  vertical.forEach((left, i) => {
    const line = document.createElement('i');
    line.className = 'lumen-v'; line.style.left = left;
    line.style.setProperty('--delay', `${600 + i * 100}ms`); grid.append(line);
  });
  horizontal.forEach((top, hi) => {
    const line = document.createElement('i');
    line.className = 'lumen-h'; line.style.top = top;
    line.style.setProperty('--delay', `${800 + hi * 150}ms`); grid.append(line);
    vertical.forEach((left, vi) => {
      const mark = document.createElement('b');
      mark.style.top = top; mark.style.left = left;
      mark.style.setProperty('--delay', `${1000 + (hi * 4 + vi) * 80}ms`); grid.append(mark);
    });
  });
  const menu = hero.querySelector('.lumen-menu');
  const toggle = hero.querySelector('.lumen-toggle');
  const close = hero.querySelector('.lumen-close');
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    menu.inert = !open;
    menu.setAttribute('aria-hidden', String(!open));
    toggle.setAttribute('aria-expanded', String(open));
    if (open) close.focus(); else toggle.focus({preventScroll:true});
  };
  toggle.addEventListener('click', () => setMenu(true));
  close.addEventListener('click', () => setMenu(false));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
    if (event.key === 'Tab') {
      const links = [...menu.querySelectorAll('button,a')];
      if (event.shiftKey && document.activeElement === links[0]) {event.preventDefault();links.at(-1).focus();}
      else if (!event.shiftKey && document.activeElement === links.at(-1)) {event.preventDefault();links[0].focus();}
    }
  });
  matchMedia('(min-width:1024px)').addEventListener('change', e => {if (e.matches && menu.classList.contains('is-open')) setMenu(false);});
})();
