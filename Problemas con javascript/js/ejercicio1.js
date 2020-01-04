// ejercici1

var alt=document.getElementById('altura').value;
var peso=document.getElementById('peso').value;
var edad=document.getElementById('edad').value;

function calcPeso(alt,peso,edad) {
var indice=peso/alt;
//  console.log(indice)

if (edad>=45 && indice<22) {
    
    alert("Medio");}
else if(edad>=45 && indice>=22) {
    alert("alto"); 
}
else if(edad<45 && indice<22){
alert("Bajo");
}
else {
    alert("Medio");

}


}  // fin de la funcion




// ejercicio 3


function menu() {

var check=document.getElementById('menu').value;
check=parseInt(check);

console.log(check);

switch (check) {
        case 1:
                window.location.href="ejercicio1.html";
        break;

        case 2:
            window.location.href="ejercicio2.html";
        break;

        case 3:
            window.location.href="ejercicio3.html";
        break;

    default:
            console.log('ninguna opcion');
        break;
}

}


