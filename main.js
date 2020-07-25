const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact');
const techStackBtn = document.querySelector('techStack');
const projectsBtn = document.querySelector('projects');
const aboutBtn = document.querySelector('aboutMe');

let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
  if(!menuOpen){
    menuBtn.classList.add('open');

    contactBtn.classList.remove('close');
    contactBtn.classList.add('open');

    // techStackBtn.classList.remove('close');
    // techStackBtn.classList.add('open');

    // projectsBtn.classList.remove('close');
    // projectsBtn.classList.add('open');

    // aboutBtn.classList.remove('close');
    // aboutBtn.classList.add('open');

    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');

    contactBtn.classList.remove('open');
    contactBtn.classList.add('close');

    // techStackBtn.classList.remove('open');
    // techStackBtn.classList.add('close');

    // projectsBtn.classList.remove('open');
    // projectsBtn.classList.add('close');

    // aboutBtn.classList.remove('open');
    // aboutBtn.classList.add('close');

    menuOpen = false;
  }
});