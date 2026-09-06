const projects={
  "green-charm":{
    index:"03 / 06",title:"异相录 虚拟人设计",roleLabel:"Responsibilities",discipline:"In charge of full-case design",year:"2026",
    description:"WEN YE is an elegant Chinese-style virtual avatar derived from ancient Book of Songs verses. Quiet yet renowned, she carries the pure grace of cranes echoing across the wilderness.",
    hero:"assets/project-cover-1.png",
    statement:"VIRTUAL CHARACTER\nDESIGN",
    gallery:["作品/虚拟人/virtual-human-01.webp?v=20260906","作品/虚拟人/virtual-human-02.webp?v=20260906"],
    next:"fun-city",nextLabel:"City Life Fun Life\nKV Design",continuous:true
  },
  "chaitea":{
    index:"01 / 06",title:"Chai Tea品牌设计",roleLabel:"Discipline",discipline:"Brand Identity / Packaging",year:"2026",
    description:"A tea identity translating Guangcai heritage into a warm and contemporary everyday brand experience.",
    hero:"作品/chaitea/一彩茶时新版-01.png?v=2026082403",hideHero:true,
    statement:"Chai Tea Brand Design",
    gallery:[
      "作品/chaitea/一彩茶时新版-01.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-02.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-03.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-04.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-05.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-06.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-07.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-08.png?v=2026082403",
      "作品/chaitea/一彩茶时新版-09-clean.png?v=2026082404"
    ],
    trimBottomImages:[5,7],
    next:"visual-exploration",nextLabel:"一彩茶时\nIP设计",continuous:true
  },
  "peachy-keen":{
    index:"05 / 06",title:"Peachy Keen\nMV 设计",roleLabel:"Discipline",discipline:"Music Creation / MV Design",year:"2026",
    description:"A dreamy pink music visual filled with youthful energy, soft emotion, and playful movement.",
    hero:"assets/project-cover-3.png",hideHero:true,
    statement:"ARTIFICIAL INTELLIGENCE\nMUSIC VIDEO DESIGN",
    gallery:["assets/peachy-keen-layout-02.jpg","assets/peachy-keen-layout-03.jpg","assets/peachy-style-1.jpg","assets/peachy-style-11.jpg","assets/peachy-style-2.jpg","assets/peachy-style-22.jpg","assets/peachy-style-3.jpg","assets/peachy-style-33.jpg"],
    video:"assets/peachy-keen-final-web.mp4",
    storyboard:{
      shell:"assets/peachy-storyboard-shell.jpg",
      frames:Array.from({length:16},(_,index)=>`assets/peachy-storyboard-${String(index+1).padStart(2,"0")}.png`)
    },
    next:"new-project",nextLabel:"New Project",continuous:true
  },
  "fun-city":{
    index:"04 / 06",title:"City Life Fun Life KV Design",roleLabel:"Discipline",discipline:"KEY VISUAL DESIGN",year:"2026",
    description:"Centered on uppercase FUN, this design embeds skyscraper silhouettes into letters to reflect City Fun’s vitality.",
    hero:"assets/project-cover-4.png",heroVideo:"assets/fun-city-cover.mp4",
    statement:"KEY VISUAL\nDESIGN",
    gallery:["assets/fun-city-detail-02.png","assets/fun-city-detail-03.png","assets/fun-city-color-design.png","assets/fun-city-detail-06.png","assets/fun-city-detail-07.png","assets/fun-city-detail-08.png","assets/fun-city-detail-09.png","assets/fun-city-detail-10.png","assets/fun-city-detail-11.png"],
    galleryVideosAfter:[
      {after:0,src:"assets/fun-city-logo-design.mp4",label:"City Life Fun Life logo design animation"},
      {after:1,src:"assets/fun-city-symbol.mp4",label:"City Life Fun Life symbol animation"},
      {after:1,src:"assets/fun-city-secondary-graphics.mp4",label:"City Life Fun Life secondary graphics animation"},
      {after:2,src:"assets/fun-city-scene-1.mp4",label:"City Life Fun Life scene animation"},
      {after:2,src:"assets/fun-city-scene-2.mp4",label:"City Life Fun Life second scene animation"}
    ],
    next:"peachy-keen",nextLabel:"Peachy Keen\nMV Design",continuous:true
  },
  "visual-exploration":{
    index:"02 / 06",title:"一彩茶时 IP设计",roleLabel:"Discipline",discipline:"IP DESIGN / ANIMATION DESIGN",year:"2026",
    description:"CHAI‑ZAI is a mischievous white cat IP rooted in Cantonese enamel heritage, living playful little adventures amid elegant traditional porcelain art.",
    hero:"作品/chai/IP排版1.png",hideHero:true,
    gallery:["封面/测试.jpg?v=2","作品/chai/IP故事版-v7.jpg?v=2026082801","作品/chai/IP动态场景1-v2.png","作品/chai/IP动态场景2.png","作品/chai/IP动态场景3.png","作品/chai/IP动态场景4.png","作品/chai/IP周边设计1.jpg","作品/chai/IP周边设计2.jpg","作品/chai/IP周边设计3.jpg"],
    galleryVideoOverlays:[
      {at:1,src:"作品/chai/IP故事版嗷呜.mp4",label:"柴仔嗷呜角色动态展示"}
    ],
    galleryVideosAfter:[
      {after:1,src:"作品/chai/IP角色转换-0821.mp4",label:"柴仔 IP 角色转换动态展示"},
      {after:1,src:"作品/chai/IP杯子弹出.mp4",label:"柴仔杯子弹出动态展示"},
      {after:1,src:"作品/chai/IP底部视频节点13.mp4",label:"柴仔 IP 底部动态展示"},
      {after:2,src:"作品/chai/IP动态场景1.mp4",label:"柴仔饮茶场景动态展示",seamAfter:true},
      {after:3,src:"作品/chai/IP动态场景2.mp4",label:"柴仔夜读场景动态展示",seamAfter:true},
      {after:4,src:"作品/chai/IP动态场景3.mp4",label:"柴仔荷塘场景动态展示",seamAfter:true},
      {after:5,src:"作品/chai/IP动态场景4.mp4",label:"柴仔树下阅读场景动态展示"}
    ],
    gallerySeamsAfter:[
      {after:2,src:"作品/chai/IP场景衔接.png",label:"撕纸衔接装饰"},
      {after:3,src:"作品/chai/IP场景衔接.png",label:"撕纸衔接装饰"},
      {after:4,src:"作品/chai/IP场景衔接.png",label:"撕纸衔接装饰"},
      {after:5,src:"作品/chai/IP场景衔接.png",label:"撕纸衔接装饰"}
    ],
    next:"green-charm",nextLabel:"虚拟人\nIP设计",continuous:true
  },
  "new-project":{
    index:"06 / 06",title:"Work Projects",roleLabel:"JOB RESPONSIBILITIES",discipline:"SENIOR VISUAL DESIGNER, TEAM LEADER",year:"2023-2025",
    description:"BRAND PROJECT: OH!SOME, A NEW‑LIFESTYLE RETAIL BRAND",
    hero:"作品/project/背景.jpg",hideHero:true,
    statement:"NEW PROJECT\nCOMING SOON",
    gallery:["作品/工作内容/1.png?v=2026090301","作品/工作内容/2.png?v=2026090301","作品/工作内容/3.png?v=2026090301","作品/工作内容/5.png?v=2026090301","作品/工作内容/6.png?v=2026090301","作品/工作内容/7.png?v=2026090301","作品/工作内容/8.png?v=2026090301"],
    galleryVideosAfter:[
      {after:0,src:"作品/工作内容/new-project-video-02.mp4",label:"New Project visual motion"},
      {after:2,src:"作品/工作内容/小o新春三联动起来.mp4",label:"OH SOME Lunar New Year triptych motion"},
      {after:3,src:"作品/工作内容/视频节点 3 (2).mp4",label:"New Project operational material motion"},
      {after:3,src:"作品/工作内容/小o购物三联动起来 (1).mp4",label:"OH SOME shopping campaign motion"},
      {after:5,src:"作品/工作内容/视频节点 4 (1).mp4",label:"OH SOME home campaign motion"},
      {after:6,src:"作品/工作内容/小o生活三联动起来 (1).mp4",label:"OH SOME lifestyle triptych motion"}
    ],
    next:"chaitea",nextLabel:"ChaiTea\n品牌设计",continuous:true
  }
};
const key=new URLSearchParams(location.search).get("project");
const project=projects[key]||projects["green-charm"];
document.body.classList.add(`project-key-${key||"green-charm"}`);
document.title=`${project.title} — Vice Portfolio`;
document.querySelector(".project-index").textContent=project.index;
document.querySelector("h1").textContent=project.title;
document.querySelector(".project-description").textContent=project.description;
document.querySelector(".project-discipline").textContent=project.discipline;
document.querySelector(".project-role-label").textContent=project.roleLabel||"Discipline";
document.querySelector(".project-year").textContent=project.year||"2026";
document.querySelector(".project-statement-title").textContent=project.statement||"Building a visual world with clarity, character, and lasting impact.";
document.body.classList.toggle("project--continuous",Boolean(project.continuous));
const heroFigure=document.querySelector(".project-hero");
if(project.heroVideo){
  heroFigure.classList.add("has-video");
  heroFigure.innerHTML=`<video src="${project.heroVideo}" poster="${project.hero}" autoplay muted loop playsinline preload="auto" aria-label="${project.title} video cover"></video>`;
}else{
  const hero=heroFigure.querySelector("img");
  hero.src=project.hero;hero.alt=project.title;
}
heroFigure.hidden=Boolean(project.hideHero);
const gallery=document.querySelector(".project-gallery");
gallery.innerHTML=[
  project.video?`<video class="project-video" src="${project.video}" poster="${project.hero}" controls playsinline preload="metadata" aria-label="${project.title} music video"></video>`:"",
  ...project.gallery.flatMap((src,index)=>[
    (project.galleryVideoOverlays||[]).some(overlay=>overlay.at===index)
      ? `<figure class="project-gallery-overlay"><img src="${src}" alt="${project.title} project image ${index+1}" loading="lazy">${(project.galleryVideoOverlays||[]).filter(overlay=>overlay.at===index).map(overlay=>`<span class="project-keyed-video"><video src="${overlay.src}" autoplay muted loop playsinline preload="auto" aria-label="${overlay.label}"></video><canvas aria-hidden="true"></canvas></span>`).join("")}</figure>`
      : `<figure class="${(project.trimBottomImages||[]).includes(index)?"project-gallery-trim-bottom":""}"><img src="${src}" alt="${project.title} project image ${index+1}" loading="lazy"></figure>`,
    ...((project.galleryImagesAfter||[]).filter(image=>image.after===index).map(image=>`<figure><img src="${image.src}" alt="${image.label}" loading="lazy"></figure>`)),
    ...((project.gallerySeamsAfter||[]).filter(seam=>seam.after===index).map(seam=>`<figure class="project-gallery-seam"><img src="${seam.src}" alt="${seam.label}"></figure>`)),
    ...((project.galleryVideosAfter||[]).filter(video=>video.after===index).map(video=>[
      `<video class="project-inline-video" src="${video.src}" autoplay muted loop playsinline preload="metadata" aria-label="${video.label}"></video>`,
      video.seamAfter?`<figure class="project-gallery-seam"><img src="作品/chai/IP场景衔接.png" alt="撕纸衔接装饰"></figure>`:""
    ].join("")))
  ]),
  project.interactive?`<section class="project-image-switcher" aria-label="Peachy Keen interactive lookbook">
    <button class="project-image-switcher-arrow is-prev" type="button" aria-label="Previous look" disabled>←</button>
    <button class="project-image-switcher-frame" type="button" aria-label="Look 1. Click to view the alternate image.">
      <img src="${project.interactive.base[0]}" alt="Peachy Keen look 1" draggable="false">
    </button>
    <button class="project-image-switcher-arrow is-next" type="button" aria-label="Next look">→</button>
    <div class="project-image-switcher-controls" aria-hidden="true">
      <span>Scroll / Swipe</span>
      <span class="project-image-switcher-dots">${project.interactive.base.map((_,index)=>`<i class="${index===0?"is-active":""}"></i>`).join("")}</span>
      <span>Click / Tap</span>
    </div>
  </section>`:"",
  project.storyboard?`<section class="project-storyboard" aria-label="Peachy Keen storyboard viewer">
    <img class="project-storyboard-shell" src="${project.storyboard.shell}" alt="Scroll to view Peachy Keen storyboard">
    <button class="project-storyboard-stage" type="button" aria-label="Storyboard frame 1 of ${project.storyboard.frames.length}. Scroll, swipe, or use arrow keys to change frames.">
      <img src="${project.storyboard.frames[0]}" alt="Peachy Keen storyboard frame 1" draggable="false">
    </button>
  </section>`:""
].join("");
gallery.querySelectorAll(".project-keyed-video").forEach(layer=>{
  const video=layer.querySelector("video");
  const canvas=layer.querySelector("canvas");
  const context=canvas.getContext("2d",{willReadFrequently:true});
  let failed=false;
  const draw=()=>{
    if(failed)return;
    if(video.readyState>=2&&video.videoWidth){
      const width=Math.min(720,video.videoWidth);
      const height=Math.max(1,Math.round(width*video.videoHeight/video.videoWidth));
      if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height}
      try{
        context.drawImage(video,0,0,width,height);
        const frame=context.getImageData(0,0,width,height);
        const pixels=frame.data;
        const sample=(x,y)=>{const i=(y*width+x)*4;return[pixels[i],pixels[i+1],pixels[i+2]]};
        const topLeft=sample(2,2),topRight=sample(width-3,2),bottomLeft=sample(2,height-3),bottomRight=sample(width-3,height-3);
        for(let y=0;y<height;y++){
          const fy=y/(height-1||1);
          for(let x=0;x<width;x++){
            const fx=x/(width-1||1),i=(y*width+x)*4;
            const bg0=topLeft.map((value,c)=>value+(topRight[c]-value)*fx);
            const bg1=bottomLeft.map((value,c)=>value+(bottomRight[c]-value)*fx);
            const br=bg0[0]+(bg1[0]-bg0[0])*fy,bg=bg0[1]+(bg1[1]-bg0[1])*fy,bb=bg0[2]+(bg1[2]-bg0[2])*fy;
            const distance=Math.hypot(pixels[i]-br,pixels[i+1]-bg,pixels[i+2]-bb);
            pixels[i+3]=Math.max(0,Math.min(255,(distance-8)*(255/18)));
          }
        }
        context.putImageData(frame,0,0);
      }catch(error){failed=true;layer.classList.add("is-fallback")}
    }
    requestAnimationFrame(draw);
  };
  if(video.readyState>=2)requestAnimationFrame(draw);
  else video.addEventListener("loadeddata",()=>requestAnimationFrame(draw),{once:true});
  video.play().catch(()=>{});
});
if(project.storyboard){
  const stage=gallery.querySelector(".project-storyboard-stage");
  const image=stage.querySelector("img");
  let index=0,lastWheel=0,touchStartY=0;
  project.storyboard.frames.forEach(src=>{const preload=new Image();preload.src=src});
  const render=()=>{
    image.classList.add("is-changing");
    setTimeout(()=>{
      image.src=project.storyboard.frames[index];
      image.alt=`Peachy Keen storyboard frame ${index+1}`;
      stage.setAttribute("aria-label",`Storyboard frame ${index+1} of ${project.storyboard.frames.length}. Scroll, swipe, or use arrow keys to change frames.`);
      image.classList.remove("is-changing");
    },100);
  };
  const move=direction=>{
    const nextIndex=Math.max(0,Math.min(project.storyboard.frames.length-1,index+direction));
    if(nextIndex===index)return false;
    index=nextIndex;render();return true;
  };
  stage.addEventListener("wheel",event=>{
    const now=Date.now();
    if(Math.abs(event.deltaY)<8||now-lastWheel<240)return;
    if(move(event.deltaY>0?1:-1)){event.preventDefault();lastWheel=now}
  },{passive:false});
  stage.addEventListener("keydown",event=>{
    const direction=["ArrowRight","ArrowDown"].includes(event.key)?1:["ArrowLeft","ArrowUp"].includes(event.key)?-1:0;
    if(direction&&move(direction))event.preventDefault();
  });
  stage.addEventListener("touchstart",event=>{touchStartY=event.changedTouches[0].clientY},{passive:true});
  stage.addEventListener("touchend",event=>{
    const distance=touchStartY-event.changedTouches[0].clientY;
    if(Math.abs(distance)>36)move(distance>0?1:-1);
  },{passive:true});
}
if(project.interactive){
  const switcher=gallery.querySelector(".project-image-switcher");
  const frame=switcher.querySelector(".project-image-switcher-frame");
  const image=frame.querySelector("img");
  const previousButton=switcher.querySelector(".is-prev");
  const nextButton=switcher.querySelector(".is-next");
  const dots=[...switcher.querySelectorAll("i")];
  let index=0,alternate=false,lastWheel=0,touchStartY=0,suppressClick=false;
  [...project.interactive.base,...project.interactive.alternate].forEach(src=>{const preload=new Image();preload.src=src});
  const render=()=>{
    image.classList.add("is-changing");
    setTimeout(()=>{
      image.src=(alternate?project.interactive.alternate:project.interactive.base)[index];
      image.alt=`Peachy Keen look ${index+1}${alternate?" alternate":""}`;
      frame.setAttribute("aria-label",`Look ${index+1}${alternate?" alternate":""}. Click to ${alternate?"return to the main":"view the alternate"} image.`);
      dots.forEach((dot,dotIndex)=>dot.classList.toggle("is-active",dotIndex===index));
      previousButton.disabled=index===0;
      nextButton.disabled=index===project.interactive.base.length-1;
      image.classList.remove("is-changing");
    },120);
  };
  const move=direction=>{
    const nextIndex=Math.max(0,Math.min(project.interactive.base.length-1,index+direction));
    if(nextIndex===index)return false;
    index=nextIndex;alternate=false;render();return true;
  };
  switcher.addEventListener("wheel",event=>{
    const now=Date.now();
    if(Math.abs(event.deltaY)<8||now-lastWheel<420)return;
    if(move(event.deltaY>0?1:-1)){event.preventDefault();lastWheel=now}
  },{passive:false});
  frame.addEventListener("click",()=>{if(suppressClick){suppressClick=false;return}alternate=!alternate;render()});
  previousButton.addEventListener("click",()=>move(-1));
  nextButton.addEventListener("click",()=>move(1));
  frame.addEventListener("keydown",event=>{
    if(["ArrowDown","ArrowRight"].includes(event.key)&&move(1))event.preventDefault();
    if(["ArrowUp","ArrowLeft"].includes(event.key)&&move(-1))event.preventDefault();
  });
  frame.addEventListener("touchstart",event=>{touchStartY=event.changedTouches[0].clientY;suppressClick=false},{passive:true});
  frame.addEventListener("touchend",event=>{
    const delta=touchStartY-event.changedTouches[0].clientY;
    if(Math.abs(delta)>45){suppressClick=move(delta>0?1:-1)}
  },{passive:true});
}
const next=projects[project.next];
const nextLink=document.querySelector(".next-project");
nextLink.href=`project.html?project=${project.next}`;
nextLink.querySelector("span").textContent=project.nextLabel||next.title;
