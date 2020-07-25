const menuBtn = document.querySelector('.menu-btn');
const contactBtn = document.querySelector('.contact');
let menuOpen = false;

menuBtn.addEventListener('click', ()=>{
  if(!menuOpen){
    menuBtn.classList.add('open');
    contactBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    contactBtn.classList.remove('open');
    contactBtn.classList.add('close');
    menuOpen = false;
  }
});