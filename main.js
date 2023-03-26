/* let emailuser = undefined
const sign = document.querySelector('.sign')

if (window.location.pathname === '/clase3.html') {
    emailuser=document.querySelector('.input-email').value;
    alert(emailuser)
    
}

if (window.location.pathname === '/index.html') {
    if (emailuser!=undefined){
        alert(emailuser)
        email.innerHTML=emailuser
        email.classList.remove('inactive');
        arrowdown.classList.remove('inactive');
        sign.classList.add('inactive')
    }
}
 */


const email=document.querySelector('.navabar-email')
const arrowdown=document.querySelector(".arrowdown");
const desktopMenu=document.querySelector(".desktop-menu");
const carritocompra=document.querySelector('.navbar-shopping-cart');
const listacarrito=document.querySelector('.product-detail');
const mobilemenuicon = document.querySelector('.menu-icon');
const mobilemenu = document.querySelector('.mobile-menu');
const productData=document.querySelector('.product-data');

const productdetail=document.querySelector('.shopping-cart-container')
const totalcost=document.querySelector('#total')



/* var for listeners for categories */
const all=document.querySelector('#all');
const clothes=document.querySelector('#clothes');
const electronics=document.querySelector('#electronics');
const furniture=document.querySelector('#furniture');
const toys=document.querySelector('#toys');
const others=document.querySelector('#others');

const allmobile=document.querySelector('#allmobile');
const clothesmobile=document.querySelector('#clothesmobile');
const electronicsmobile=document.querySelector('#electronicsmobile');
const furnituremobile=document.querySelector('#furnituremobile');
const toysmobile=document.querySelector('#toysmobile');
const othersmobile=document.querySelector('#othersmobile');
/* end var for listeners for categories */

/*fetch for ALL category,starting one */

let arrcartobject=[];
let data2 = []

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
async function fetchall(){
    try {
        const products=await fetchproducts(API);
    
        let producto=`
        ${products.map(
            
            prodct=>`
            <div class="product-card" >
                <img src=${prodct.images[0]} alt="${prodct.title}" class="product" id="${prodct.id}">
                <div class="product-info">
                <div>
                    <p>$${prodct.price}</p>
                    <p>${prodct.title}</p>
                </div>
                <figure class="add-cart" id="${prodct.id}D">
                    <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
                </figure>
                </div>
            </div>
            `).join('')}
            `;
            /* adding event listener */
            product_object.innerHTML=producto;
            const product=document.querySelectorAll('.product');
            const addcart=document.querySelectorAll('.add-cart');
            product.forEach(prod=>prod.addEventListener('click',openproductData));
            addcart.forEach(addcrt=>addcrt.addEventListener('click',addtocart));
            product.forEach(prod=>prod.addEventListener('touch',openproductData));
            addcart.forEach(addcrt=>addcrt.addEventListener('touch',addtocart));
            /* fin add event listener */

        
    } catch(error){
        alert("something wrong")
    }
};

fetchall()



async function fetchclothes(){
    try {
        const products=await fetchproducts('https://api.escuelajs.co/api/v1/categories/1/products');

        let producto=`
        ${products.map(
            
            prodct=>`
            <div class="product-card" >
                <img src=${prodct.images[0]} alt="${prodct.title}" class="product" id="${prodct.id}">
                <div class="product-info">
                <div>
                    <p>$${prodct.price}</p>
                    <p>${prodct.title}</p>
                </div>
                <figure class="add-cart" id="${prodct.id}D">
                    <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
                </figure>
                </div>
            </div>
            `).join('')}
            `;
            /* adding event listener */
            product_object.innerHTML=producto;
            const product=document.querySelectorAll('.product');
            const addcart=document.querySelectorAll('.add-cart');
            product.forEach(prod=>prod.addEventListener('click',openproductData));
            addcart.forEach(addcrt=>addcrt.addEventListener('click',addtocart));
            /* fin add event listener */
        
    } catch(error){
        alert("something wrong")
    }
};
async function fetchelectronics(){
    try {
        const products=await fetchproducts('https://api.escuelajs.co/api/v1/categories/2/products');

        let producto=`
        ${products.map(
            
            prodct=>`
            <div class="product-card" >
                <img src=${prodct.images[0]} alt="${prodct.title}" class="product" id="${prodct.id}">
                <div class="product-info">
                <div>
                    <p>$${prodct.price}</p>
                    <p>${prodct.title}</p>
                </div>
                <figure class="add-cart" id="${prodct.id}D">
                    <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
                </figure>
                </div>
            </div>
            `).join('')}
            `;
            /* adding event listener */
            product_object.innerHTML=producto;
            const product=document.querySelectorAll('.product');
            const addcart=document.querySelectorAll('.add-cart');
            product.forEach(prod=>prod.addEventListener('click',openproductData));
            addcart.forEach(addcrt=>addcrt.addEventListener('click',addtocart));
            /* fin add event listener */
        
    } catch(error){
        alert("something wrong")
    }
};
async function fetchfurniture(){
    try {
        const products=await fetchproducts('https://api.escuelajs.co/api/v1/categories/3/products');

        let producto=`
        ${products.map(
            
            prodct=>`
            <div class="product-card" >
                <img src=${prodct.images[0]} alt="${prodct.title}" class="product" id="${prodct.id}">
                <div class="product-info">
                <div>
                    <p>$${prodct.price}</p>
                    <p>${prodct.title}</p>
                </div>
                <figure class="add-cart" id="${prodct.id}D">
                    <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
                </figure>
                </div>
            </div>
            `).join('')}
            `;
            /* adding event listener */
            product_object.innerHTML=producto;
            const product=document.querySelectorAll('.product');
            const addcart=document.querySelectorAll('.add-cart');
            product.forEach(prod=>prod.addEventListener('click',openproductData));
            addcart.forEach(addcrt=>addcrt.addEventListener('click',addtocart));
            /* fin add event listener */
        
    } catch(error){
        alert("something wrong")
    }
};
async function fetchtoys(){
    try {
        const products=await fetchproducts('https://api.escuelajs.co/api/v1/categories/4/products');

        let producto=`
        ${products.map(
            
            prodct=>`
            <div class="product-card" >
                <img src=${prodct.images[0]} alt="${prodct.title}" class="product" id="${prodct.id}">
                <div class="product-info">
                <div>
                    <p>$${prodct.price}</p>
                    <p>${prodct.title}</p>
                </div>
                <figure class="add-cart" id="${prodct.id}D">
                    <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
                </figure>
                </div>
            </div>
            `).join('')}
            `;
            /* adding event listener */
            product_object.innerHTML=producto;
            const product=document.querySelectorAll('.product');
            const addcart=document.querySelectorAll('.add-cart');
            product.forEach(prod=>prod.addEventListener('click',openproductData));
            addcart.forEach(addcrt=>addcrt.addEventListener('click',addtocart));
            /* fin add event listener */
        
    } catch(error){
        alert("something wrong")
    }
};
async function fetchothers(){
    try {
        const products=await fetchproducts('https://api.escuelajs.co/api/v1/categories/5/products');

        let producto=`
        ${products.map(
            
        prodct=>`
        <div class="product-card" >
            <img src=${prodct.images[0]} alt="${prodct.title}" class="product" id="${prodct.id}">
            <div class="product-info">
            <div>
                <p>$${prodct.price}</p>
                <p>${prodct.title}</p>
            </div>
            <figure class="add-cart" id="${prodct.id}D">
                    <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
                </figure>
                </div>
            </div>
            `).join('')}
            `;
            /* adding event listener */
            product_object.innerHTML=producto;
            const product=document.querySelectorAll('.product');
            const addcart=document.querySelectorAll('.add-cart');
            product.forEach(prod=>prod.addEventListener('click',openproductData));
            addcart.forEach(addcrt=>addcrt.addEventListener('click',addtocart));
            /* fin add event listener */
        
    } catch(error){
        alert("something wrong")
    }
};

/* fin variable API */

arrowdown.addEventListener("click",togledesktopMenu);
email.addEventListener('click',togledesktopMenu);
carritocompra.addEventListener('click',togglelistacarrito)
mobilemenuicon.addEventListener('click',togglemenumobile);



/* listeners for categories */
    all.addEventListener('click',fetchall);
    clothes.addEventListener('click',fetchclothes);
    electronics.addEventListener('click',fetchelectronics);
    furniture.addEventListener('click',fetchfurniture);
    toys.addEventListener('click',fetchtoys);
    others.addEventListener('click',fetchothers);
    
    allmobile.addEventListener('click',fetchall);
    clothesmobile.addEventListener('click',fetchclothes);
    electronicsmobile.addEventListener('click',fetchelectronics);
    furnituremobile.addEventListener('click',fetchfurniture);
    toysmobile.addEventListener('click',fetchtoys);
    othersmobile.addEventListener('click',fetchothers);

    all.addEventListener('touch',fetchall);
    clothes.addEventListener('touch',fetchclothes);
    electronics.addEventListener('touch',fetchelectronics);
    furniture.addEventListener('touch',fetchfurniture);
    toys.addEventListener('touch',fetchtoys);
    others.addEventListener('touch',fetchothers);
    
    allmobile.addEventListener('touch',fetchall);
    clothesmobile.addEventListener('touch',fetchclothes);
    electronicsmobile.addEventListener('touch',fetchelectronics);
    furnituremobile.addEventListener('touch',fetchfurniture);
    toysmobile.addEventListener('touch',fetchtoys);
    othersmobile.addEventListener('touch',fetchothers);
/* end listeners for categories */

async function addtocart(){

    let id=this.id;
    let trueid=id.replace(id[id.length-1],'');
    

    let info2 = await fetchproducts(`${API}/${trueid}`)

    class cartobject{
        constructor(img,name,price,idclsb){
            this.img=img,
            this.name=name,
            this.price=price
            this.idclsb=idclsb
        }
    }
    info2= new cartobject(info2.images[0],info2.title,info2.price,info2.id);

    
    arrcartobject.push(info2)




    
    data2=`
    ${arrcartobject.map(
        
        object=>
        `
        <div class="shopping-cart" id="${object.idclsb}X2">
        <figure>
            <img src="${object.img}" alt="${object.name}">
        </figure>
        <p>${object.name}</p>
        <p class="cart-price">$${object.price}</p>
        <img src="./assets/icons/icon_close.png" id="${object.idclsb}X" class="delete-cart" alt="close">
        </div>
        `
        
    ).join('')}
    `
    
    productdetail.innerHTML=data2;

    const deletecart=document.querySelectorAll('.delete-cart')
    deletecart.forEach(dlt=>dlt.addEventListener('click',deletecartproduct))
    
        cartnumber()
        totalprice()

}

function deletecartproduct(){
    id = this.id
    let trueid=id.replace('X','');


    document.getElementById(trueid+'X2').remove(); 
    let eliminatedobject=arrcartobject.find(item=>item.idclsb==trueid);

    let eliminatedindex=arrcartobject.indexOf(eliminatedobject);

    
    arrcartobject.splice(eliminatedindex,1);
    
    cartnumber()
    totalprice()

}


function totalprice(){
 

 let prices=document.querySelectorAll('.cart-price');
 let costs=[]
 prices.forEach(price=>
    costs.push(price.innerHTML))

    numbercost=[]
    costs.forEach(cost=>
        numbercost.push(Number(cost.replace('$',''))))
    
        console.log(numbercost)

    var total=numbercost.reduce((a,b)=>a+b,0)

    totalcost.innerHTML='$'+total

} 


function cartnumber(){
    const cartamount=document.getElementById('cart-amount')
    cartamount.innerHTML=arrcartobject.length
}

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
    <img src="${info.images[0]}" alt="${info.title}" class="product2">
    <div class="product-info2">
        <p>$${info.price}</p>
        <p>${info.title}</p>
        <p>${info.description}</p>
        <button class="primary-button add-to-cart-button" id="${info.id}B">
            <img src="./assets/icons/bt_add_to_cart.svg" alt="addtocart">
            Add to cart
        </button>
    </div>
    `
    productData.innerHTML=data;
    const closeButton=document.querySelector('.close-button')
    closeButton.addEventListener('click',closeproductData);
   /*  añadiendo escuchas(necesita ser despues de generarlo con el valor data o sino no capta,ambos inicializacion,declaracion de variable closebutton y despues adicion de escucha */
    productData.classList.remove('inactive');
    mobilemenu.classList.add('inactive')

    const addtocart2=document.querySelectorAll('.add-to-cart-button');
    addtocart2.forEach(addtcrt2=>addtcrt2.addEventListener('click',addtocart))
}

