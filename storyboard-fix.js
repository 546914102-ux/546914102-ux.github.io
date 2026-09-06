(() => {
  const project = new URLSearchParams(window.location.search).get("project");
  if (project !== "peachy-keen") return;

  const frames = Array.from(
    { length: 16 },
    (_, index) => `assets/peachy-storyboard-${String(index + 1).padStart(2, "0")}.png`
  );

  window.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".project-gallery");
    if (!gallery) return;

    document.querySelectorAll(".project-storyboard").forEach((element) => element.remove());

    const section = document.createElement("section");
    section.className = "project-storyboard";
    section.setAttribute("aria-label", "Peachy Keen storyboard");
    section.innerHTML = `
      <img class="project-storyboard-shell" src="assets/peachy-storyboard-shell.jpg" alt="">
      <button class="project-storyboard-stage" type="button" aria-label="Scroll to view storyboard">
        <img src="${frames[0]}" alt="Storyboard frame 1 of 16">
      </button>
    `;
    gallery.append(section);

    const stage = section.querySelector(".project-storyboard-stage");
    const image = stage.querySelector("img");
    let current = 0;
    let locked = false;

    const show = (next) => {
      current = Math.max(0, Math.min(frames.length - 1, next));
      image.src = frames[current];
      image.alt = `Storyboard frame ${current + 1} of ${frames.length}`;
    };

    stage.addEventListener(
      "wheel",
      (event) => {
        if (locked || event.deltaY === 0) return;
        const next = current + (event.deltaY > 0 ? 1 : -1);
        if (next < 0 || next >= frames.length) return;

        event.preventDefault();
        locked = true;
        show(next);
        window.setTimeout(() => {
          locked = false;
        }, 120);
      },
      { passive: false }
    );

    stage.addEventListener("keydown", (event) => {
      let direction = 0;
      if (["ArrowDown", "ArrowRight"].includes(event.key)) direction = 1;
      if (["ArrowUp", "ArrowLeft"].includes(event.key)) direction = -1;
      if (!direction) return;

      const next = current + direction;
      if (next < 0 || next >= frames.length) return;
      event.preventDefault();
      show(next);
    });
  });
})();
