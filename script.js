document.getElementById('year').textContent = new Date().getFullYear();

const header = document.querySelector('.site-header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.classList.toggle('scrolled', current > 20);
  if (current > lastScroll && current > 140) header.classList.add('compact');
  else header.classList.remove('compact');
  lastScroll = current;
}, { passive: true });

const revealItems = document.querySelectorAll('.project, .service, .about-panel, .contact-inner');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.setAttribute('tabindex', '-1');
  });
});
