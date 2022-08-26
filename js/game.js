//inicio de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let tiempo = 60;
let tiempoRegresivo = null

let mostrarMovimientos = document.getElementById('movimientos');
let mostrarAciertos = document.getElementById("aciertos")
let mostrarTiempo = document.getElementById ("tiempo")
//Generacion de numeros aleatorios
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random() - 0.5 })
console.log(numeros)

//funciones
function calcularTiempo(){
   tiempoRegresivo = setInterval(() => {
    tiempo --;
    mostrarTiempo.innerHTML = `Tiempo: ${tiempo} segundos`;
    if(tiempo == 0){
        clearInterval(tiempoRegresivo);
        bloqueartarjetas();
    }
    },1000);
}
function bloqueartarjetas(){
    for (let i = 0; i<= 15; i++){
    let tarjetaBloqueada = document.getElementById(i);
   tarjetaBloqueada.innerHTML = numeros [i]
    tarjetaBloqueada.disabled = true;    
    }
}

//Funcion Principal
function destapar(id){
    if(temporizador == false){
        calcularTiempo();
        temporizador = true;
    }
    tarjetasDestapadas++
    console.log(tarjetasDestapadas);
    
    if(tarjetasDestapadas == 1){
        //Mostrar primer numero
        tarjeta1 = document.getElementById(id);
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado;

        tarjeta1.disabled = true;
}else if(tarjetasDestapadas == 2){
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros [id]
    tarjeta2.innerHTML = segundoResultado;

    tarjeta2.disabled =true;

    movimientos++;
    mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

    if(primerResultado == segundoResultado){
        tarjetasDestapadas = 0;

        //aumentar aciertos
        aciertos++;
        mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
        }else{
            setTimeout(()=>{
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },2000);
        }
    }
}




