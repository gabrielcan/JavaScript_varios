let usuarios=[];
console.log(usuarios);
// cambios
// function getUsuario(){
//     return new Promise((resolve,reject)=>{ //'=>'es una manera de escribir function esta sintaxis es valida solo cuando sea una funcion anonimo
// const usuarios=[{
//     "userId":1,
//     "Id":3
// },
// {
//     "userId":2,
//     "Id":5
// }
// ]
// return resolve(usuarios),reject ('error en la respuesta'); //'resolve' es una 'function' 


//     })

  
// }

//getUsuario()//

//////////////////////////////////////////////////////////////////////////////////////////////////////
//ejecucion de una promesa primer metodo

// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(function(respuesta){ //se ejecuta cuando se obtenga una respuesta en la respuesta
//     console.log('Dentro del THEN, la promesa entonces fue RESOLVE()');
//     respuesta.json()
//     .then(function(respuestaReal){
//         console.log('respuesta real: ',respuestaReal);
//     })
//     .catch(function(error){
//         console.log('error en la respuesta al servidor',error);
//     })
// })
// .catch(function(error){ //cuando exista un error en la promesa
//     console.log('Dentro del CATCH, la promesa entonces fue REJECT()');
//     console.log('error: ',error);
// })

// console.log('Ultima linea de la PROMESA');
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// segundo metodo para usar promesas

async function peticionUrl(){
    try{ //cual es la tarea que quiero que realice
        let respuesta= await fetch('https://jsonplaceholder.typicode.com/todos');
        let respuestaReal=await respuesta.json(); // 'await' es para que espere hasta obtener una respuesta
        console.log(respuestaReal);
    } catch (error){ //si existe algun error a las peticiones
console.log('Algo fallo',error);

}
}
peticionUrl();