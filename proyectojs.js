/*
//Función para calcular el índice de masa corporal (IMC)
function CalcularIMC(sexo, altura, peso) 
{
  //La función Math.roud sirve para redondear valores
  altura = Math.round(altura) / 100;
  peso = Math.round(peso);
  
  let indice = (peso / Math.pow(altura, 2));
  let resultado = "";
  //Sexo, si es "m" mujer y si es "h" hombre
  switch (sexo)
  {
    case "m":
      if (indice < 20)
      {
        resultado = "Peso inferior al normal.";
      }
      else if (indice >= 20 && indice < 24)
      {
        resultado = "Peso Normal.";
      }
      else if (indice >= 24 && indice < 29)
      {
        resultado = "Peso superior al normal.";
      }
      else
      {
        resultado = "Obesidad.";
      }  
      break
    case "h":
      if (indice < 21)
      {
        resultado = "Peso inferior al normal.";
      }
      else if (indice >= 21 && indice < 25)
      {
        resultado = "Peso Normal.";
      }
      else if (indice >= 25 && indice < 30)
      {
        resultado = "Peso superior al normal.";
      }
      else
      {
        resultado = "Obesidad";
      }		   
      break
    default:
      resultado = "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
  }
  
  return "Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado;
}

//Función para mostrar el resultado por pantalla
function MostrarResultadoIMC (sexo, altura, peso, indice)
{
  let mensaje = "Usted mide " + altura / 100 + " metros y pesa " + peso + " Kg. \n \n " + indice;
  alert (mensaje);
}	

//Petición de datos al usuario (sexo, altura, peso)

const datos = [
  { dato: 'sexo' },
  { dato: 'altura' },
  { dato: 'peso' }
  
]
datos.sort((a, b) => {
  if (a.dato > b.dato) {
      return 1;
  }
  if (a.dato < b.dato) {
      return -1;
  }
  return 0;
});
console.log(datos);

const imc = [];
let sexo = prompt("Indique su sexo, una 'h' para hombre o una 'm' para mujer:", "");
  imc.push(sexo);
let altura = parseInt(prompt("Indique su altura en centímetros:", ""));
  imc.push(altura);
let peso = parseInt(prompt("Indique su peso en kilógramos:", ""));
  imc.push(peso);
  console.log(imc);
let resultado = CalcularIMC(sexo, altura, peso);
MostrarResultadoIMC(sexo, altura, peso, resultado);  
console.log(imc.length);
*/
let titulo = document.getElementById("shopi");
titulo.innerText = "GALERIA SHOP";

$(function() {
  $('body').vegas({
      slides: [
          { src: 'fotos/js1.jpg' },
          { src: 'fotos/js6.jpg' },
          { src: 'fotos/js7.jpg' },
          { src: 'fotos/js4.jpg' }
      ]
  });
});