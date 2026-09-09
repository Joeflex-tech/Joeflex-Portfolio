const header=document.querySelector('.site-header');
let lastY=window.scrollY;
window.addEventListener('scroll',()=>{
  const y=window.scrollY;
  if(header) header.classList.toggle('scrolled',y>12);
  lastY=y;
},{passive:true});

document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});

const reveal=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}});
},{threshold:.08});
document.querySelectorAll('.project,.service,.about-card,.contact-section').forEach(el=>{el.classList.add('reveal');reveal.observe(el);});
