const email=document.querySelector('.navabar-email')
const arrowdown=document.querySelector(".arrowdown");
const desktopMenu=document.querySelector(".desktop-menu");
const carritocompra=document.querySelector('.navbar-shopping-cart');
const listacarrito=document.querySelector('.product-detail');
const mobilemenuicon = document.querySelector('.menu-icon');
const mobilemenu = document.querySelector('.mobile-menu');
const productData=document.querySelector('.product-data');


/* experimental */ 




/* fin experimental */
/*VARIABLE API PART */
const API = 'https://api.escuelajs.co/api/v1/products';
const product_object = null || document.querySelector('.cards-container');
const options = {
    method:'GET',
    headers:{
        'Content-type':'application/json'
    }
}

async function fetchproducts(url){
    const answer = await fetch(url,options);
    const data= await answer.json();
    return data;
}

(async()=>{
    try {
        const products=await fetchproducts(API);

        let producto=`
        ${products.map(
            
        prodct=>`
        <div class="product-card" id="${prodct.id}">
            <img src=${prodct.category.image} alt="${prodct.title}" class="product">
            <div class="product-info">
            <div>
                <p>$${prodct.price}</p>
                <p>${prodct.title}</p>
            </div>
            <figure>
                <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
            </figure>
            </div>
        </div>
        `).join('')}
        `;
        /* adding event listener */
        product_object.innerHTML=producto;
        const product=document.querySelectorAll('.product-card');
        product.forEach(prod=>prod.addEventListener('click',openproductData));
        /* fin add event listener */
        
    } catch(error){
        alert("something wrong")
    }
})();
/* fin variable API */

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
    productData.classList.add('inactive')
}
function closeproductData(){
    productData.classList.add('inactive')
}
async function openproductData(){
    let id= this.id
    let info = await fetchproducts(`${API}/${id}`)

    const data = `
    <img src="./assets/icons/icon_close.png" alt="close" class="close-button">
    <img src="${info.category.image}" alt="${info.title}" class="product2">
    <div class="product-info2">
        <p>$${info.price}</p>
        <p>${info.title}</p>
        <p>${info.description}</p>
        <button class="primary-button add-to-cart-button">
            <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
            Add to cart
        </button>
    </div>
    `
    productData.innerHTML=data;
    const closeButton=document.querySelector('.close-button')
    closeButton.addEventListener('click',closeproductData);
   /*  añadiendo escuchas(necesita ser despues de generarlo con el valor data o sino no crossOriginIsolated,ambos inicializacion,declaracion de variable closebutton y despues adicion de escucha */
    productData.classList.remove('inactive');
    mobilemenu.classList.add('inactive')
}