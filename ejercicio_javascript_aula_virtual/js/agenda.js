function Contacto(name,telephone){
    this.nombre=name;
    this.telefono=telephone;
}

function Agenda(maxConactos){
this.maximoContactos=maxConactos;
this.contactos=[];
this.agregarContacto=function(agregarContacto){
let elContactoExiste=false; // bandera de control para evitar la duplicidad de datos

//forma 1 para recorrger array

// for (let i=0;i<this.contactos.lenght;i++){
// let nombre=this.contactos[i].nombre;

// if(nombre==this.contactos[i].nombre){
//     elContactoExiste=true;
// }
//     }

//forma 2 para recorrger array donde contacto<->this.contactos[]

// for (const contacto of this.contactos) { 
// if(agregarContacto.nombre==contacto.nombre){
// console.log('Contacto: ',contacto);
// }
// }

//forma 3 
// let arrayFiltrado= this.contactos.filter(function(elemento){
//   return elemento.nombre==agregarContacto.nombre // si esto se cumple se toma y se va formando el arrayfiltrado
// })

// forma 4
let existe= this.contactos.some(function(elemento){ // devuelve false o true dependiendo si se cumple con la condicion
    return elemento.nombre==agregarContacto.nombre // si esto se cumple se toma y se va formando el arrayfiltrado
})


// if(arrayFiltrado.length <0){
//     elContactoExiste=true;
// }

if(existe){
    elContactoExiste=true;
}

if(elContactoExiste){ //control de existencia de contacto
    console.log('El contacto '+agregarContacto.nombre+' ya existe')
} else {
    
    this.contactos.push(agregarContacto);// se agrega un valor al array
}

};

}


const contacto1= new Contacto('gabriel','123444444');
console.log('Contacto1: ',contacto1);
const contacto2= new Contacto('Ramon','12365432'); 
console.log('Contacto2: ',contacto2);
const contacto3= new Contacto('Pedro','9999999999');
console.log('Contacto3: ',contacto3);


const agenda1= new Agenda(10);
const agenda2= new Agenda(5);
const agenda3= new Agenda(20);

agenda1.agregarContacto(contacto1)
console.log('AGENDA1: ',agenda1);
agenda1.agregarContacto(contacto1)
console.log('AGENDA1: ',agenda1); //como ya existe muestra msj de que ya existe

// console.log('AGENDA2: ',agenda2);
// console.log('AGENDA3: ',agenda3);
