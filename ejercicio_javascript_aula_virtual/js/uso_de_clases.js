
//ES5
// function Auto(model,brand){
//     this.modelo=model;
//     this.marca=brand
//     this.encendido=false;
//     this.encender=function(){
//         this.encendido=true;
//     }
// }

// const auto1=new Auto('focus','ford');
// console.log(auto1);

// auto1.encender();

// ES6
class Persona{ //se crea una clase

constructor(name,lastname,age){ // dentro del constructor solo llevan propiedades y no funciones
    this.nombre=name;
    this.apellido=lastname;
    this.edad=age;
}
// Las funciones se ecriben fuera del constructor pero dentro de la clase

setNombre(nombreNuevo){ // cuando se crean funciones no es necesario utilizar la palabra reservada 'function'
    this.nombre=nombreNuevo;
}
getNombre(){
    return this.nombre;
}

}

const persona1=new Persona('gabriel','tano',20)
console.log(persona1);

persona1.cambiarNombre('Juan');
//leer nombre sin encapsulamiento
console.log(persona1);
//leer nombre con encapsulamiento
console.log(persona1.getNombre());

//encapsulamiento
//es poder restringir el acceso a las propiedades de manera directa