let titulo = document.getElementById("shopis");
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