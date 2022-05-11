/*let titulo = document.getElementById("shopis");
titulo.innerText = "GALERIA SHOP";

let compras = document.getElementById("produc");
console.log(compras);

let fotis = document.getElementsByClassName("foti");
console.log(fotis);

let buton = document.getElementById("btnPrincipal");
buton.onclick = () => {
    console.log("click 2");
}
buton.onmousemove = () => {
    console.log("mouse Move");
}
buton.onmouseover = () => {
    console.log("mouse Over");
}
*/
const Clickbutton = document.querySelectorAll('.button');
const tbody = document.querySelector('.tbody');

let carrito = []

Clickbutton.forEach(btn => {
  btn.addEventListener('click', addToCarritoItem);
})
function addToCarritoItem(e){
    const button = e.target
    const item = button.closest('.card');
    const itemTitle = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;
    
    const newItem = {
        title: itemTitle,
        precio: itemPrice,
        img: itemImg,
        cantidad: 1
      }
    
      addItemCarrito(newItem);
    }

    function addItemCarrito(newItem){

        carrito.push(newItem);
       // console.log(carrito);
       
    }

