// ejercicio 1 //del aula virtual_

//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, 
// modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender
// y apagar el auto.



var auto={
    color:'rojo',
    marca:'fiat',
    modelo:2099,
    encendido:false
}

function ingresar_auto(){

    auto.color=prompt('ingrese color del auto: ');
    auto.marca=prompt('ingrese la marca del auto: ');
    auto.modelo=prompt('ingresar el modelo del auto: ');
    auto.encendido= encendido()
    
    }
ingresar_auto();
    

function encendido(){
    var enciende=prompt('para encender el auto ingrese un valor mayor a 0:');

    if(enciende>0){
        return true;
    }
    return false
}


console.log(auto);


