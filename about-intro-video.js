(() => {
  const section = document.querySelector('#about');
  const overlay = section?.querySelector('.about-video-intro');
  const video = overlay?.querySelector('video');
  if (!section || !overlay || !video) return;
  let finished = false;
  let showingResume = false;
  let inView = false;
  let observer;
  const sizeVideo = () => {
    if (!video.videoWidth || !video.videoHeight) return;
    const fitScale = Math.min(section.clientWidth / video.videoWidth, section.clientHeight / video.videoHeight);
    const scale = Math.min(.72, fitScale * .72);
    video.style.width = `${video.videoWidth * scale}px`;
    video.style.height = `${video.videoHeight * scale}px`;
  };
  const finish = () => {
    if (finished) return;
    finished = true;
    video.pause();
    section.classList.remove('about-intro-pending');
    overlay.classList.add('is-finished');
    observer?.disconnect();
    window.dispatchEvent(new Event('about-intro-complete'));
    setTimeout(() => { overlay.hidden = true; }, 550);
  };
  const showResume = () => {
    if (finished || showingResume) return;
    showingResume = true;
    video.pause();
    const shuffle = items => {
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      return items;
    };
    const stickers = [...overlay.querySelectorAll('.about-resume-stickers img')];
    const swapSides = Math.random() < .5;
    shuffle(stickers).forEach((sticker, index) => {
      const onLeft = (index < Math.ceil(stickers.length / 2)) !== swapSides;
      const x = onLeft ? 5 + Math.random() * 17 : 78 + Math.random() * 17;
      sticker.style.setProperty('--fall-x', `${x}%`);
      sticker.style.setProperty('--fall-size', `${102 + Math.random() * 64}px`);
      sticker.style.setProperty('--fall-delay', `${.9 + Math.random() * 1.4}s`);
      sticker.style.setProperty('--fall-duration', `${3.8 + Math.random() * 2}s`);
      sticker.style.setProperty('--fall-start', `${-35 + Math.random() * 70}deg`);
      sticker.style.setProperty('--fall-end', `${120 + Math.random() * 360}deg`);
      sticker.style.setProperty('--fall-drift', `${-35 + Math.random() * 70}px`);
    });
    overlay.classList.add('is-resume');
    observer?.disconnect();
  };
  const play = () => {
    if (finished || showingResume || !inView || document.hidden) return;
    video.muted = true;
    video.play().catch(finish);
  };
  video.addEventListener('loadedmetadata', sizeVideo);
  video.addEventListener('ended', showResume);
  video.addEventListener('error', finish);
  overlay.querySelector('.about-video-skip')?.addEventListener('click', finish);
  overlay.querySelector('.about-resume-next')?.addEventListener('click', finish);
  window.addEventListener('resize', sizeVideo, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else play();
  });
  observer = new IntersectionObserver(entries => {
    inView = entries[0].isIntersecting && entries[0].intersectionRatio >= .5;
    if (inView) play();
    else video.pause();
  }, { threshold: [0, .5] });
  observer.observe(section);
  sizeVideo();
  if (video.error) finish();
})();
