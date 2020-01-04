// var persona={
//     nombre:'gabriel',
//     edad:22,
//     direccion:['calle123','otra calle123'],
//     telefono:1234567,
//     celular:{
//         casa:{
//             numero:12345667,
//             atiende:['no',{ella:['si']}]
//         },
//         trabajo:1234566789,
//     },
// }

// console.log(persona.celular.casa.atiende[1].ella[0]);

const cosasQueVi=['Html','Css','JavaScript','Git','Scrum','Trello','Trabajar en grupo'];// para mostrar todo el array solo debemos poner el nombre del arrar sin especificar la posicion

// var miObjeto={
// nombre:'Gabriel',
// Apellido:'Cano',
// Edad:33,

// cosasQueAprendi:[cosasQueVi[0],cosasQueVi[1],cosasQueVi[6]],
// cosasQueNoAprendi:[cosasQueVi[2],cosasQueVi[3],cosasQueVi[5]],
// mostrartodoelarray:cosasQueVi

// }

// console.log(miObjeto.cosasQueAprendi[0]);
// console.log(miObjeto.mostrartodoelarray);

// persona.cosasQueaprendi=[];
// persona['cosasqueaprendi']=[];


var persona= {
nombre:'Gabriel',
apellido:'Cano'
}

persona.cosasqueaprendi=cosasQueVi[0]; // primera forma de agrega un elemento al objeto 
persona['cosasquenoaprendi']=cosasQueVi[1]; //segundo metodo para agregar un elemento al objeto

//delete persona.cosasquenoaprendi; //se borra la propiedad con el 'delete'

// console.log(persona);

for (const propiedadObjeto in persona) { // For para recorrer un Objeto
    
    //    console.log(persona[propiedadObjeto]); // va mostrar el contenido de cada propiedad de objeto
    //    console.log(propiedadObjeto); // se muestra los nombres de las propiedades del objeto
    
       if(persona[propiedadObjeto]==='Gabriel'){ ///ESTOY MODIFICANDO SI SE ENCUETRA EN EL OBJETO EL VALOR 'Gabriel'

        persona.propiedadObjeto='Eduardo'; // se modifica por 'Eduardo'
      
       }

      

    
}

console.log(persona);