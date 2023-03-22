const email=document.querySelector('.navabar-email')
const arrowdown=document.querySelector(".arrowdown");
const desktopMenu=document.querySelector(".desktop-menu");
const carritocompra=document.querySelector('.navbar-shopping-cart');
const listacarrito=document.querySelector('.product-detail');
const mobilemenuicon = document.querySelector('.menu-icon');
const mobilemenu = document.querySelector('.mobile-menu');
const productData=document.querySelector('.product-data');
const closeButton=document.querySelector('.close-button')
const product=document.querySelectorAll('.product-card');

arrowdown.addEventListener("click",togledesktopMenu);
email.addEventListener('click',togledesktopMenu);
carritocompra.addEventListener('click',togglelistacarrito)
mobilemenuicon.addEventListener('click',togglemenumobile);
closeButton.addEventListener('click',closeproductData);
product.forEach(prod=>prod.addEventListener('click',openproductData));

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
    productData.classList.add('inactive')
}
function closeproductData(){
    productData.classList.add('inactive')
}
function openproductData(){
    productData.classList.remove('inactive');
    mobilemenu.classList.add('inactive')
}