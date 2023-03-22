const email=document.querySelector('.navabar-email')
const arrowdown=document.querySelector(".arrowdown");
const desktopMenu=document.querySelector(".desktop-menu");

arrowdown.addEventListener("click",togledesktopMenu);
email.addEventListener('click',togledesktopMenu)

function togledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}