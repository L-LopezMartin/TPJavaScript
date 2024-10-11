//Ejercicio 1.2 - Sumar dos variables y guardarla en una tercera que luego es mostrada por consola
function ej1_2(){
  let a,b,c;
  a=22;
  b=92;
  c=a+b;
  console.log("La suma de a y b es: ", c);
}

//Ejercicio 1.3 - Ingresar un texto con un prompt y mostrarlo por consola
function ej1_3(){
  let nombre = prompt("¿Cómo te llamas?");
  console.log("Hola", nombre);
}

//Ejercicio 2.1 - De tres números, se indica cuál de ellos es mayor a los demás
let ej2_1 = () => {
  let a,b,c;
  a=5;
  b=5;
  c=50;
  let result = () => {
    if (a>b){
      if(a>c){
        return a;
      }
      else if (c>a){
        return c;
        
      }
    }
    else if (b>a){
      if(b>c){
        return b;
        
      }
      else if (c>b){
        return c;
        
      }
    }
    else if (a<c){
      return c;
    }
    else return "Son iguales"
  }
  console.log("El mayor de los tres números es:", result());
}

//Ejercicio 2.2 - Ingresar un número con un prompt y verificar si es par o impar
function ej2_2(){
  let numeroIngresado = (Number)(prompt("Ingresate un número amigo"));
  if (numeroIngresado%2 === 0){
    console.log("El número", numeroIngresado, "es par");
  }
  else{
    console.log("El número", numeroIngresado, "es impar");
  }
}

//Ejercicio 3.1 - Bucle que disminuye un valor de 10 a 0
function ej3_1(){
  let i = 10;
  while(i > 0){
    console.log(i);
    i--;    
  }
}

//Ejercicio 3.2 - Ingresar un número con un prompt, hasta que el número ingresado sea mayor a 100
function ej3_2(){
  let ingresado;
  do{
    ingresado = prompt("Dame un numerito mayor a 100");
  } while (ingresado < 100)
  console.log("Ingresaste un número mayor a 100:", ingresado, ", felicitaciones!!!");
}

//Ejercicio 4.1 - Función que toma un número y devuelve verdadero si es par, falso si es impar
let esPar = (numeroMagico) => {
  if (numeroMagico%2 === 0){
    return true;
  }
  else{
    return false;
  }
}
function ej4_1(){
  let numerito = 54;
  console.log("El número ingresado", numerito, "es par:", esPar(numerito));
}

//Ejercicio 4.2 - Función que convierte de grados Celcius a Farenheit
function convertirCelciusAFarenheit(celso){
  return ((celso * 1.8) + 32);
}

function ej4_2(){
  let tempC = 30;
  let tempF = convertirCelciusAFarenheit(tempC);
  console.log(tempC, "°C equivalentes a", tempF, "°F");
}

//Ejercicio 5.1 - Crear un objeto persona y una función que cambie el atributo "ciudad" de la persona
let persona = {
  nombre: "Roberto Gómez Bolaños",
  edad: 85,
  ciudad: "CDMX",
  setCiudad: function(newCity){
    this.ciudad = newCity;
  }
}
function ej5_1(){
  console.log("Persona antes de cambiar:", persona);
  persona.setCiudad("Albuquerque");
  console.log("Persona luego de cambiar:", persona);
}

//Ejercicio 5.2 - Crear un objeto libro, una función que retorne verdadero si el libro es más viejo que 10 años(falso en caso contrario) y llamar la función con el libro creado
let libro = {
  titulo: "2001: Una odisea en el espacio",
  autor: "Arthur C. Clarke",
  ano: 1968
}
function esViejo(lib){
  const date = new Date();
  if ((date.getFullYear() - lib.ano) > 10){
    return true;
  } else return false;
}
function ej5_2(){
  console.log('El libro "'+ libro.titulo+ '" es antiguo:', esViejo(libro));
}

//Ejercicio 6.1 - Tomar un array, multiplicar todos sus elementos por 2 y guardar el resultado en otro array
function ej6_1(){
  let arr1 = [1,2,3,4,5,6,7,8,9,10];
  let arr2 = [];
  let length = arr1.length;
  for (let i = 0; i < length; i++) {
    arr2[i] = arr1[i] * 2;
  }
  console.log("Números originales:", arr1.toString());
  console.log("Números multiplicados por 2:", arr2.toString());
}

//Ejercicio 6.2 - Formar un array con los primeros 10 números pares
function ej6_2(){
  let pares = [];
  for (let i = 0; i < 20; i++) {
    if ((i+1)%2 === 0) {
      pares.push(i+1);
    }
  }
  console.log("Primeros 10 números pares:",pares.toString());
}

//Ejercicio 7.1 - Obtener todos los elementos con etiqueta "p" del documento y cambiarles el color cuando se toca un botón
let botonColor = document.getElementById("cambiaColor");
botonColor.onclick = () => {
  let arrP = document.getElementsByTagName("p");
  let lengthP = arrP.length;
  for (let i = 0; i < lengthP; i++) {
    arrP[i].style = `color: blue`;
  }
}

//Ejercicio 7.2 - Obtener un mensaje desde un input y mostrarlo en un alert
let input72 = document.getElementById("input72");
let submit72 = document.getElementById("submit72");
submit72.onclick = (e) => {
  e.preventDefault();
  alert("Has ingresado: "+ input72.value.toString());
}

//Ejercicio 8.1 - Lista desdordenada, que cuando se clickea un elemento de la lista, se muestra el texto por pantalla
let li0, li1, li2, li3;

li0 = document.getElementById("li0");
li0.onclick = () => {
  console.log(li0.innerText);
}

li1 = document.getElementById("li1");
li1.onclick = () => {
  console.log(li1.innerText);
}

li2 = document.getElementById("li2");
li2.onclick = () => {
  console.log(li2.innerText);
}

li3 = document.getElementById("li3");
li3.onclick = () => {
  console.log(li3.innerText);
}

//Ejercicio 8.2 - Campo de texto que es deshabilitado y habilitado con botones
let toggField = document.getElementById("toggleableField");
let disableBut = document.getElementById("disableField");
disableBut.onclick = () => {
  toggField.disabled = true;
}
let enableBut = document.getElementById("enableField");
enableBut.onclick = () => {
  toggField.disabled = false;
}

//Ejercicio 9.1 - Formulario que guarda un correo electrónico en local storage. Si ya existe un correo, se muestra el correo
let displayEmail = document.getElementById("displayEmail");
  // Muestra el correo si está guardado
if (window.localStorage.getItem("correo") != null) {
  displayEmail.innerText = window.localStorage.getItem("correo");
}

let email91 = document.getElementById("email91");
let boton91 = document.getElementById("boton91");
boton91.addEventListener("click", (e) => {
  e.preventDefault();
  //Guardar el correo
  window.localStorage.setItem("correo", email91.value.toString());
  //Mostrar el correo recién guardado
  if (window.localStorage.getItem("correo") != null) {
    displayEmail.innerText = window.localStorage.getItem("correo");
  }
})

  //Botón eliminar correo
let eliminarEmail = document.getElementById("eliminarEmail");
eliminarEmail.onclick = () => {
  window.localStorage.removeItem("correo");
}