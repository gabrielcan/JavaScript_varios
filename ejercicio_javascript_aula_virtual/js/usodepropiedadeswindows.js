let i=1;
 
//  window.setInterval(function(){ //una funcion que pertenece al prototipo Windows/// arrow function
//     console.log(i+'segundos');
//     i++;
// },1000);

const contador=()=>{
    console.log(i+'segundos');
    i++;
    if(i==5){
        pararIntervalos();
    }
}

const intervalo=window.setInterval(contador,1000);

function pararIntervalos(){ //funcion de windows para detener el setInteval()
    clearInterval(intervalo);
}