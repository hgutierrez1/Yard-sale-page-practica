const email=document.querySelector('.navabar-email')
const arrowdown=document.querySelector(".arrowdown");
const desktopMenu=document.querySelector(".desktop-menu");
const carritocompra=document.querySelector('.navbar-shopping-cart');
const listacarrito=document.querySelector('.product-detail');
const mobilemenuicon = document.querySelector('.menu-icon');
const mobilemenu = document.querySelector('.mobile-menu')

arrowdown.addEventListener("click",togledesktopMenu);
email.addEventListener('click',togledesktopMenu);
carritocompra.addEventListener('click',togglelistacarrito)
mobilemenuicon.addEventListener('click',togglemenumobile);

function togledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    listacarrito.classList.add('inactive');
}
function togglelistacarrito(){
    listacarrito.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobilemenu.classList.add('inactive');
}
function togglemenumobile(){
    mobilemenu.classList.toggle('inactive');
    listacarrito.classList.add('inactive');
}