const q=(s,c=document)=>c.querySelector(s),qa=(s,c=document)=>[...c.querySelectorAll(s)];
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");reveal.unobserve(e.target)}}),{threshold:.12});
qa(".reveal").forEach(el=>reveal.observe(el));

const cursor=q(".cursor");
addEventListener("pointermove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px"});
qa("a,button,.work-card").forEach(el=>{el.addEventListener("mouseenter",()=>cursor.classList.add("big"));el.addEventListener("mouseleave",()=>cursor.classList.remove("big"))});

const menu=q(".menu"),header=q(".topbar");
menu.addEventListener("click",()=>header.classList.toggle("open"));
qa(".topbar nav a").forEach(a=>a.addEventListener("click",()=>header.classList.remove("open")));

let current=0;const slides=qa(".slide"),bars=qa(".slider-ui i"),thumb=q(".slider-ui img");
if(slides.length>1&&thumb)setInterval(()=>{slides[current].classList.remove("active");if(bars[current])bars[current].style.background="rgba(255,255,255,.25)";current=(current+1)%slides.length;slides[current].classList.add("active");if(bars[current])bars[current].style.background="#fff";thumb.src=slides[current].src},5200);

let ticking=false;
addEventListener("scroll",()=>{if(!ticking){requestAnimationFrame(()=>{const img=q(".about-image img");if(img){const box=img.parentElement.getBoundingClientRect();if(box.top<innerHeight&&box.bottom>0)img.style.transform=`translateY(${(box.top-innerHeight)*.035}px)`}ticking=false});ticking=true}});
