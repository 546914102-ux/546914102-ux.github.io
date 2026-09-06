(() => {
  const section = document.querySelector("#expertise.orbit-enabled");
  const track = section?.querySelector(".services");
  if (!section || !track) return;

  const originalCards = [...track.querySelectorAll("article[data-project]")];
  if (!originalCards.length) return;

  // Replacing the nodes removes the former horizontal-carousel listeners while
  // keeping every project cover, video and destination intact.
  const cards = originalCards.map(card => {
    const clean = card.cloneNode(true);
    clean.querySelectorAll(".project-card-native-link").forEach(link => link.remove());
    clean.classList.remove("reveal", "visible", "is-active");
    clean.removeAttribute("style");
    card.replaceWith(clean);
    return clean;
  });

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const ring = document.createElement("div");
  ring.className = "project-orbit-ring";
  ring.append(...cards);
  track.append(ring);
  // Keep the active link outside the transformed 3D tree for reliable hit testing.
  const coverLinks = cards.map(card => {
    const link = document.createElement("a");
    link.className = "project-orbit-active-link";
    link.href = card.dataset.href || `project.html?project=${encodeURIComponent(card.dataset.project)}`;
    link.setAttribute("aria-label", `Open ${card.querySelector("h3")?.textContent?.trim() || "project"}`);
    link.addEventListener("click", event => {
      event.preventDefault();
      window.location.assign(link.href);
    });
    track.append(link);
    return link;
  });
  let frame = 0;
  let orbitProgress = 0;
  let entranceProgress = reduceMotion.matches ? 1 : 0;
  let entranceStarted = reduceMotion.matches;
  let entranceFrame = 0;

  const render = () => {
    const progress = orbitProgress;
    // Reduced motion still exposes every project, without continuous spinning.
    const rotationProgress = reduceMotion.matches
      ? Math.round(progress * cards.length) / cards.length
      : progress;
    const rotation = rotationProgress * Math.PI * 2;
    const entranceEase = 1 - Math.pow(1 - entranceProgress, 3);
    const entranceSpin = (1 - entranceEase) * -Math.PI * 2;
    // Tangent planes on one 3D cylinder; perspective supplies scale and overlap.
    const cardWidth = cards[0].offsetWidth;
    const radius = cardWidth / (2 * Math.tan(Math.PI / cards.length)) * 1.38;
    const sway = -6 + Math.sin(rotation) * 4;
    ring.style.transform = `rotateZ(${(sway * entranceEase).toFixed(2)}deg) rotateY(${rotation + entranceSpin}rad)`;
    let frontIndex = 0;
    let frontDepth = -Infinity;

    cards.forEach((card, index) => {
      const baseAngle = index * Math.PI * 2 / cards.length;
      const angle = rotation + baseAngle;
      const depth = Math.cos(angle);
      const depth01 = (depth + 1) / 2;
      const backBlur = Math.max(0, -depth) * 9 * entranceEase;
      const depthBrightness = .55 + depth01 * .45;
      const entranceBrightness = 1 - (1 - depthBrightness) * entranceEase;
      const rowX = (index - (cards.length - 1) / 2) * cardWidth * .72 * (1 - entranceEase);
      const rowY = track.clientHeight * .72 * (1 - entranceEase);
      const formedAngle = baseAngle * entranceEase;
      const formedRadius = radius * entranceEase;
      card.style.setProperty("--orbit-transform", `translate(-50%,-50%) translate3d(${rowX.toFixed(2)}px,${rowY.toFixed(2)}px,0) rotateY(${formedAngle}rad) translateZ(${formedRadius.toFixed(2)}px)`);
      card.style.filter = `blur(${backBlur.toFixed(2)}px) brightness(${entranceBrightness.toFixed(2)})`;
      if (depth > frontDepth) {
        frontDepth = depth;
        frontIndex = index;
      }
    });
    cards.forEach((card, index) => card.classList.toggle("is-orbit-front", index === frontIndex));
    const trackBounds = track.getBoundingClientRect();
    cards.forEach((card, index) => {
      const bounds = card.getBoundingClientRect();
      const depth = Math.cos(rotation + index * Math.PI * 2 / cards.length);
      const link = coverLinks[index];
      const canOpen = entranceProgress >= .999 && depth > .05;
      // The transformed card itself provides accurate hit testing. Bounding-box
      // overlays overlap in perspective and can send an adjacent project.
      link.style.display = "none";
      card.style.pointerEvents = canOpen ? "auto" : "none";
      card.style.zIndex = String(10 + Math.round(depth * 100));
      link.style.left = `${bounds.left - trackBounds.left}px`;
      link.style.top = `${bounds.top - trackBounds.top}px`;
      link.style.width = `${bounds.width}px`;
      link.style.height = `${bounds.height}px`;
      link.style.zIndex = String(30 + Math.round(depth * 100));
    });
    frame = 0;
  };

  const requestRender = () => {
    if (frame) return;
    frame = requestAnimationFrame(render);
  };

  const rotateWithWheel = event => {
    if(entranceProgress < .999)return;
    const overCover = cards.some(card => {
      if (card.style.pointerEvents === "none") return false;
      const bounds = card.getBoundingClientRect();
      return event.clientX >= bounds.left && event.clientX <= bounds.right &&
        event.clientY >= bounds.top && event.clientY <= bounds.bottom;
    });
    if(!overCover)return;
    const direction = Math.sign(event.deltaY);
    const atStart = orbitProgress <= 0 && direction < 0;
    const atEnd = orbitProgress >= 1 && direction > 0;
    if(atStart || atEnd) return;
    event.preventDefault();
    const delta = Math.sign(event.deltaY) * Math.min(Math.abs(event.deltaY),120) * .00105;
    orbitProgress = Math.max(0,Math.min(1,orbitProgress + delta));
    requestRender();
  };
  track.addEventListener("wheel",rotateWithWheel,{passive:false});

  const startEntrance = () => {
    if(entranceStarted)return;
    entranceStarted=true;
    const startedAt=performance.now();
    const duration=2100;
    const tick=now=>{
      entranceProgress=Math.min(1,(now-startedAt)/duration);
      requestRender();
      if(entranceProgress<1)entranceFrame=requestAnimationFrame(tick);
      else entranceFrame=0;
    };
    entranceFrame=requestAnimationFrame(tick);
  };
  const entranceObserver=new IntersectionObserver(entries=>{
    if(entries.some(entry=>entry.isIntersecting)){
      startEntrance();
      entranceObserver.disconnect();
    }
  },{threshold:.28});
  entranceObserver.observe(section);

  cards.forEach((card, index) => {
    const title = card.querySelector("h3")?.textContent?.trim() || `Project ${index + 1}`;
    const destination = card.dataset.href || `project.html?project=${encodeURIComponent(card.dataset.project)}`;
    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `Open ${title}`);
    const open = () => {
      window.location.assign(destination);
    };
    card.addEventListener("click", open);
    card.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      open();
    });
  });

  addEventListener("resize", requestRender, { passive:true });
  addEventListener("scroll", requestRender, { passive:true });
  addEventListener("load", requestRender, { once:true });
  reduceMotion.addEventListener?.("change", requestRender);
  render();
})();
