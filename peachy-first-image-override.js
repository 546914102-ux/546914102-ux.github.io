(() => {
  const project = new URLSearchParams(window.location.search).get("project");
  if (project !== "peachy-keen") return;

  const selector = "main > section.project-gallery:nth-of-type(3) > figure:nth-of-type(1) > img";

  const replaceImage = () => {
    const image = document.querySelector(selector);
    if (!image) return false;

    image.src = "作品/PEACHY KEEN/汽水mv排版2.jpg";
    image.alt = "Peachy Keen project presentation";
    return true;
  };

  if (replaceImage()) return;

  const observer = new MutationObserver(() => {
    if (replaceImage()) observer.disconnect();
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("load", replaceImage, { once: true });
})();
