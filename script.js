let numeroSecreto = Math.floor(Math.random()*10 + 1);
let intentos = 1,numero,maxIntentos=5; 
console.log(numeroSecreto);

function valoresDefault(){
    numeroSecreto = Math.floor(Math.random()*10 + 1);
    intentos = 1;
    document.querySelector('#show').innerHTML = 'Escribe un numero del 1 al 10!';
    document.getElementById('num').innerHTML = maxIntentos;
    document.querySelector('input').value = '';
    document.querySelector('h3').innerHTML ='';
    document.getElementById('reiniciar').setAttribute('disabled',true);
}
function actualizarIntentos(){
    if(maxIntentos >= intentos){
        document.querySelector('#num').innerHTML = maxIntentos - intentos;
        intentos++;
    }
}
function recompensaIntentos(){
    maxIntentos++;
    document.querySelector('h3').innerHTML = 'Ganaste un intento más! para tu proxima ronda';
}
function verificarNumero(){
    numero = parseInt(document.querySelector('input').value);
    console.log(numero); 
    if(numero === numeroSecreto){
        document.getElementById('show').innerHTML = `GANASTE! ADIVINASTE EL NUMERO SECRETO despues de ${intentos} ${intentos==1? 'vez' : 'veces'}`;
        document.getElementById('reiniciar').removeAttribute('disabled');
        recompensaIntentos();
    }else{
        if(numero > numeroSecreto){
            document.getElementById('show').innerHTML = 'Cerca! El Numero Secreto es Menor!';
            actualizarIntentos();
        } else{
            document.getElementById('show').innerHTML = 'Cerca! El Numero Secreto es mayor'
            actualizarIntentos();
        }
        if(maxIntentos < intentos){
            document.getElementById('show').innerHTML = 'Perdiste! Te quedaste sin intentos';   
            document.getElementById('num').innerHTML = '0';
            document.getElementById('intentar').setAttribute('disabled',true);
        }
    }
}
