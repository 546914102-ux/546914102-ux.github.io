const progressBars=[...document.querySelectorAll(".slider-ui i")];
const resetProgress=()=>{
  progressBars.forEach((bar,index)=>bar.classList.toggle("on",index===current));
};
resetProgress();
setInterval(resetProgress,100);

const heroPage=document.querySelector(".hero");
const aboutPage=document.querySelector(".about");
let aboutRevealFrame=false;
const updateAboutReveal=()=>{
  if(!aboutPage)return;
  const rect=aboutPage.getBoundingClientRect();
  const visible=rect.top<=innerHeight*.52&&rect.bottom>innerHeight*.12;
  aboutPage.classList.toggle("about-content-visible",visible&&!aboutPage.classList.contains("about-intro-pending"));
  aboutRevealFrame=false;
};
const requestAboutReveal=()=>{
  if(aboutRevealFrame)return;
  aboutRevealFrame=true;
  requestAnimationFrame(updateAboutReveal);
};
updateAboutReveal();
addEventListener("scroll",requestAboutReveal,{passive:true});
addEventListener("resize",requestAboutReveal);
addEventListener("about-intro-complete",requestAboutReveal);

let diagonalFrame=false;
const flattenAboutDiagonal=()=>{
  const rect=aboutPage.getBoundingClientRect();
  const travel=Math.max(1,rect.height-innerHeight*.2);
  const progress=1-Math.max(0,Math.min(1,-rect.top/travel));
  aboutPage.style.setProperty("--diagonal-progress",progress.toFixed(4));
  diagonalFrame=false;
};
const requestDiagonalMotion=()=>{
  if(diagonalFrame)return;
  diagonalFrame=true;
  requestAnimationFrame(flattenAboutDiagonal);
};
flattenAboutDiagonal();
addEventListener("scroll",requestDiagonalMotion,{passive:true});
addEventListener("resize",requestDiagonalMotion);

let heroDiagonalFrame=false;
const flattenHeroDiagonal=()=>{
  const rect=heroPage.getBoundingClientRect();
  const travel=Math.max(1,rect.height-innerHeight*.2);
  const progress=1-Math.max(0,Math.min(1,-rect.top/travel));
  heroPage.style.setProperty("--hero-diagonal-progress",progress.toFixed(4));
  heroDiagonalFrame=false;
};
const requestHeroDiagonalMotion=()=>{
  if(heroDiagonalFrame)return;
  heroDiagonalFrame=true;
  requestAnimationFrame(flattenHeroDiagonal);
};
flattenHeroDiagonal();
addEventListener("scroll",requestHeroDiagonalMotion,{passive:true});
addEventListener("resize",requestHeroDiagonalMotion);

const risingSections=[
  {section:heroPage,targets:[heroPage]},
  {section:aboutPage,targets:[aboutPage]},
  {section:document.querySelector(".work"),targets:[document.querySelector(".work")]},
  {section:document.querySelector("footer"),targets:[document.querySelector("footer")]}
].filter(item=>item.section);
let textRiseFrame=false;
const updateSectionTextRise=()=>{
  risingSections.forEach(item=>{
    const rect=item.section.getBoundingClientRect();
    const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,rect.height*.72)));
    const rise=`${(-progress*84).toFixed(2)}px`;
    if(item.background)item.section.style.setProperty("--expertise-bg-rise",rise);
    else item.targets.forEach(target=>target.style.setProperty("--section-text-rise",rise));
  });
  textRiseFrame=false;
};
const requestSectionTextRise=()=>{
  if(textRiseFrame)return;
  textRiseFrame=true;
  requestAnimationFrame(updateSectionTextRise);
};
updateSectionTextRise();
addEventListener("scroll",requestSectionTextRise,{passive:true});
addEventListener("resize",requestSectionTextRise);

const expertiseSection=document.querySelector(".expertise");
let expertiseRevealFrame=false;
const updateExpertiseReveal=()=>{
  const rect=expertiseSection.getBoundingClientRect();
  const visible=rect.top<=innerHeight*.52&&rect.bottom>innerHeight*.12;
  expertiseSection.classList.toggle("expertise-content-visible",visible);
  expertiseRevealFrame=false;
};
const requestExpertiseReveal=()=>{
  if(expertiseRevealFrame)return;
  expertiseRevealFrame=true;
  requestAnimationFrame(updateExpertiseReveal);
};
updateExpertiseReveal();
addEventListener("scroll",requestExpertiseReveal,{passive:true});
addEventListener("resize",requestExpertiseReveal);

const expertiseCards=[...document.querySelectorAll(".services article")];
const cardTilts=[5,-5,5,-5,4,-4];
let cardMotionFrame=false;
const straightenCards=()=>{
  if(expertiseSection?.classList.contains("orbit-enabled")){
    cardMotionFrame=false;
    return;
  }
  if(innerWidth<=700){
    expertiseCards.forEach(card=>card.style.transform="rotate(0deg)");
    cardMotionFrame=false;
    return;
  }
  const start=innerHeight*.96;
  const end=Math.max(110,innerHeight*.14);
  expertiseCards.forEach((card,index)=>{
    const top=card.getBoundingClientRect().top;
    const progress=Math.max(0,Math.min(1,(start-top)/(start-end)));
    const angle=cardTilts[index]*(1-progress);
    card.style.transform=`rotate(${angle.toFixed(3)}deg)`;
  });
  cardMotionFrame=false;
};
const requestCardMotion=()=>{
  if(cardMotionFrame)return;
  cardMotionFrame=true;
  requestAnimationFrame(straightenCards);
};
straightenCards();
addEventListener("scroll",requestCardMotion,{passive:true});
addEventListener("resize",requestCardMotion);

expertiseCards.forEach(card=>{
  const openProject=()=>location.href=`project.html?project=${encodeURIComponent(card.dataset.project)}`;
  card.addEventListener("click",openProject);
  card.addEventListener("keydown",event=>{
    if(event.key==="Enter"||event.key===" "){
      event.preventDefault();
      openProject();
    }
  });
});

const lightbox=document.createElement("div");
lightbox.className="project-lightbox";
lightbox.setAttribute("role","dialog");
lightbox.setAttribute("aria-modal","true");
lightbox.setAttribute("aria-label","Project image preview");
lightbox.innerHTML='<button type="button" aria-label="Close preview">×</button><img alt="">';
document.body.append(lightbox);
const preview=lightbox.querySelector("img");
const closeButton=lightbox.querySelector("button");
let lastTrigger=null;
const closeLightbox=()=>{
  lightbox.classList.remove("is-open");
  document.body.classList.remove("lightbox-open");
  setTimeout(()=>preview.removeAttribute("src"),350);
  lastTrigger?.focus?.();
};
document.addEventListener("click",event=>{
  const card=event.target.closest("#projects .work-card");
  if(!card)return;
  const image=card.querySelector("img");
  if(!image)return;
  lastTrigger=card;
  preview.src=image.dataset.fullSrc||image.currentSrc||image.src;
  preview.alt=image.alt;
  lightbox.classList.add("is-open");
  document.body.classList.add("lightbox-open");
  closeButton.focus();
});
closeButton.addEventListener("click",closeLightbox);
lightbox.addEventListener("click",event=>{
  if(event.target===lightbox)closeLightbox();
});
addEventListener("keydown",event=>{
  if(event.key==="Escape"&&lightbox.classList.contains("is-open"))closeLightbox();
});

const waterfallGrid=document.querySelector("#projects .work-grid");
if(waterfallGrid&&!waterfallGrid.hasAttribute("data-native-motion")&&!waterfallGrid.classList.contains("diagonal-gallery")){
  const sourceCards=[...waterfallGrid.querySelectorAll(":scope > .work-card")];
  waterfallGrid.classList.add("diagonal-gallery");
  const motion=matchMedia("(prefers-reduced-motion: reduce)");
  let offset=0,last=0,visible=false,frame=0;
  let width=waterfallGrid.clientWidth;
  waterfallGrid.classList.add("motion-stack-gallery");
  const filterSvg=document.createElementNS("http://www.w3.org/2000/svg","svg");
  filterSvg.setAttribute("width","0");filterSvg.setAttribute("height","0");
  filterSvg.style.position="absolute";filterSvg.setAttribute("aria-hidden","true");
  filterSvg.innerHTML=`<defs>${[12,28,48].map((amount,index)=>`<filter id="stack-glass-${index}" x="-35%" y="-40%" width="170%" height="180%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.006 0.014" numOctaves="1" seed="7" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="${amount}" xChannelSelector="R" yChannelSelector="G"/></filter>`).join("")}</defs>`;
  waterfallGrid.appendChild(filterSvg);
  let activeCard=null;
  sourceCards.forEach(card=>{
    card.addEventListener("pointerenter",()=>{
      activeCard?.classList.remove("is-pulled");
      activeCard=card;
      card.classList.add("is-pulled");
    });
    card.addEventListener("pointerleave",()=>{
      card.classList.remove("is-pulled");
      if(activeCard===card)activeCard=null;
    });
  });
  const draw=()=>{
    const cardHeight=Math.min(waterfallGrid.clientHeight*.44,width*.32);
    const cardWidth=cardHeight*.75;
    const step=cardWidth+Math.max(14,width*.012);
    const span=sourceCards.length*step;
    sourceCards.forEach((card,index)=>{
      const x=((index*step-offset)%span+span)%span-step;
      const center=x+cardWidth/2;
      const strength=Math.min(1,Math.max(0,1-Math.min(center,width-center)/(width*.15)));
      const img=card.querySelector("img");
      card.style.width=`${cardWidth}px`;card.style.height=`${cardHeight}px`;
      card.style.top=`calc(50% - ${cardHeight/2}px)`;
      card.style.transform=`translate3d(${x}px,0,0)`;card.style.zIndex="1";
      img.style.setProperty("--edge-scale",String(1+strength*.42));
      img.style.setProperty("--edge-skew",`${(center<width/2?-1:1)*strength*9}deg`);
      img.style.setProperty("--edge-filter",strength>.08?`url(#stack-glass-${strength>.65?2:strength>.3?1:0})`:"none");
    });
  };
  const tick=time=>{
    frame=0;
    if(!visible||document.hidden)return;
    if(last&&!activeCard&&!motion.matches)offset+=Math.min(time-last,50)*width*.000045;
    last=time;draw();frame=requestAnimationFrame(tick);
  };
  const resume=()=>{cancelAnimationFrame(frame);last=0;if(visible&&!document.hidden)frame=requestAnimationFrame(tick);};
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;resume();}).observe(waterfallGrid);
  new ResizeObserver(()=>{width=waterfallGrid.clientWidth;draw();}).observe(waterfallGrid);
  waterfallGrid.addEventListener("pointerleave",()=>{
    activeCard?.classList.remove("is-pulled");
    activeCard=null;
  });
  document.addEventListener("visibilitychange",resume);
  draw();
}
const waterfallCards=[...document.querySelectorAll("#projects .work-grid .work-card")];
waterfallCards.forEach(card=>{
  card.classList.add("gallery-visible");
  card.style.transitionDelay="0ms";
});
