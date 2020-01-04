// ejercici1



function calcPeso() {
    
    var alt=document.getElementById('altura').value;
    var peso=document.getElementById('peso').value;
    var edad=document.getElementById('edad').value;

    if(control(alt)==true&&control(peso)==true&&control(edad)==true){

var indice=peso/alt;

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
} else{
    alert('Deben completarse todos los campos con valores');
}

}  // fin de la funcion


function control(variable){

    if(variable==0|| variable==""){
        return false;
    }

    else 
    {
        return true;
    }
}


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


