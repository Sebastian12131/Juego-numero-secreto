let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo= Math.floor(Math.random()*100)+1; ;

function asignarTextoElemento (elemento,texto){

   let elementoHTML = document.querySelector (elemento);
   elementoHTML.innerHTML = texto;
   return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //nueva manera de llamar un elemento de html esta vez por el id que previamente se le asigno en el codigo HTML ID = "nombre del elemento"

  if (numeroDeUsuario === numeroSecreto ){
    asignarTextoElemento ("p", `Encontraste el número en ${intentos} ${(intentos ===1) ? "Intento" : "Intentos"}`);
    document.getElementById ('reiniciar').removeAttribute ('disabled');
  }else {
    // usuario no acertó
    if ( numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ("p", "El número secreto es menor"); 
  }else {
    asignarTextoElemento ("p", "El número secreto es mayor");
  }
  intentos++;
  limpiarCaja();
    return;
}
}
function condicionesIniciales (){
  asignarTextoElemento("h1",'Juego del número Secreto!');
  asignarTextoElemento("p",`Escribe un número entre el 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}
function limpiarCaja(){
 document.querySelector('#valorUsuario').value = "";

}

function generarNumeroSecreto() {  //Aqui se va a realizar el arreglo que se necesita para que el numero generado no se repita
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
      asignarTextoElemento ("p","Ya se sortearon todos los números posibles");
    }else{
    //Si el número generado esta incluido en la lista se realiza una operacion para evitar esto sino se continua igual
    if(listaNumerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();
    }else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  } 
}

function reiniciarJuego (){
  //limpiarla caja
  limpiarCaja ();
  // indicar mensaje de intervalo de numeros
  //generar un nuevo numero aleatorio
  //iniciar el numero de intentos
  condicionesIniciales ();
  // deshabilitar el boton de nuevo juego
  document.querySelector ('#reiniciar').setAttribute('disabled','true') //se activa el valor del boton original en html con dos parametros
 
}
condicionesIniciales ();