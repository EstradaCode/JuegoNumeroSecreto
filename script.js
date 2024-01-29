let numeroSecreto = Math.floor(Math.random()*10 + 1);
let intentos = 1,numero,maxIntentos=5; 
let numerosEncontrados = [];

function valoresDefault(){
   if(numerosEncontrados.length!= 10){ 
        numeroSecreto = Math.floor(Math.random()*10 + 1);
        while(numerosEncontrados.includes(numeroSecreto)){
        numeroSecreto = Math.floor(Math.random()*10 + 1);
        }
    }else{
        for(let i=0;i<10;i++){
          numerosEncontrados.pop();
        }
        numeroSecreto = Math.floor(Math.random()*10 + 1);
    }
        intentos = 1;
        document.querySelector('#show').textContent = 'Escribe un numero del 1 al 10!';
        document.getElementById('num').textContent = maxIntentos;
        document.querySelector('input').value = '';
        document.querySelector('h3').textContent ='';
        document.getElementById('reiniciar').setAttribute('disabled',true);
        document.getElementById('intentar').removeAttribute('disabled');
    }
function actualizarIntentos(){
    if(maxIntentos >0){
        document.querySelector('#num').textContent = --maxIntentos;
        intentos++;
    }
}
function recompensaIntentos(){
    maxIntentos++;
    document.querySelector('h3').textContent = 'Ganaste un intento más! para tu proxima ronda';
}
function verificarNumero(){
    numero = parseInt(document.querySelector('input').value);
    console.log(numero); 
    if(numero === numeroSecreto){
        document.getElementById('show').textContent = `GANASTE! ADIVINASTE EL NUMERO SECRETO despues de ${intentos} ${intentos==1? 'vez' : 'veces'}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('intentar').setAttribute('disabled',true);
        if(numerosEncontrados.length != 10){
            recompensaIntentos();
            numerosEncontrados.push(numero);
        }else{
            document.getElementById('intentar').setAttribute('disabled',true);
            document.querySelector('h3').textContent = 'ENCONTRASTE LOS 10 NUMEROS! FELICIDADES POR COMPLETAR EL JUEGO AL 100%. Vuelve a jugarlo cuando quieras!';
        }
    }else{
        if(numero > numeroSecreto){
            document.getElementById('show').textContent = 'Cerca! El Numero Secreto es Menor!';
            actualizarIntentos();
        } else{
            document.getElementById('show').textContent = 'Cerca! El Numero Secreto es mayor'
            actualizarIntentos();
        }
        if(maxIntentos == 0){
            document.getElementById('show').textContent = 'Perdiste! Te quedaste sin intentos';   
            document.getElementById('num').textContent = '0';
            document.getElementById('reiniciar').textContent = ' F5 para Volver a Jugar!';
            document.getElementById('intentar').setAttribute('disabled',true);
        }
    }
}
const btnIntentar = document.getElementById("intentar").addEventListener("click", () => {
    verificarNumero();
})
const btnReset = document.getElementById("reiniciar").addEventListener("click", () =>{
    valoresDefault();
})