const email=document.querySelector('.navabar-email')
const arrowdown=document.querySelector(".arrowdown");
const desktopMenu=document.querySelector(".desktop-menu");
const carritocompra=document.querySelector('.navbar-shopping-cart');
const listacarrito=document.querySelector('.product-detail');

arrowdown.addEventListener("click",togledesktopMenu);
email.addEventListener('click',togledesktopMenu);
carritocompra.addEventListener('click',togglelistacarrito)

function togledesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    listacarrito.classList.add('inactive');
}
function togglelistacarrito(){
    listacarrito.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
}