const links=[...document.querySelectorAll('.nav-link')];
const sections=[...document.querySelectorAll('section[id]')];
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+entry.target.id || (entry.target.id==='about-story' && l.getAttribute('href')==='#about')))}})},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s=>observer.observe(s));
