// Navbar Fixed
// Start Navbar Fixed
window.onscroll = function(){
     const header = document.querySelector('header');
     const FixedNav = header.offsetTop;
     const toTop = document.querySelector('#to-top');

     if(window.pageYOffset > FixedNav){
          header.classList.add('navbar-fixed');
          toTop.classList.remove('hidden');
          toTop.classList.add('flex');
     }
     else{
          header.classList.remove('navbar-fixed');
          toTop.classList.remove('flex');
          toTop.classList.add('hidden');
     }
};
// End Section Navbar Fixed

// Hamburger
// Start Section Hamburger 
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function(){
     hamburger.classList.toggle('hamburger-active');
     navMenu.classList.toggle('hidden');
});
// End Section Hamburger

// Klik di luar hamburger
// Start Klik Luar Hambuerger Start
window.addEventListener('click', function(e){
     if(e.target != hamburger && e.target != navMenu){
          hamburger.classList.toggle('hamburger-active');
          navMenu.classList.add('hidden');
     }
});
// End Klik Luar Hamburger

// Darkmode Toggle
// Start darkmode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function (){
     if(darkToggle.checked){
          html.classList.add('dark');
          localStorage.theme = 'dark';
     }
     else{
          html.classList.remove('dark');
          localStorage.theme = 'light';
     }
});
// End darkmode toggle


// Pidahkan posisi togle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     darkToggle.checked = true;
} else {
     darkToggle.checked = false;
}
// End Section posisi togle darnkmode dan light mode


// Start Section library auto-type Javascript
var typed = new Typed("#auto-type", {
     strings: ["UI/UX Designer"],
     typeSpeed: 50,
     backSpeed: 50,
     loop:true,
});
// End Section Library auto-type Javascript