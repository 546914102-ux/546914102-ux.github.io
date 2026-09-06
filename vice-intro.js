(() => {
  const body = document.body;
  if (!body.classList.contains('vice-opening')) return;
  const finish = () => {
    body.classList.remove('vice-opening');
    body.classList.add('vice-opened');
  };
  setTimeout(finish, matchMedia('(prefers-reduced-motion: reduce)').matches ? 100 : 2100);
})();
