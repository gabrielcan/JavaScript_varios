// fetch('https://jsonplaceholder.typicode.com/todos')
// function getUsuarios() {
//    console.log('entrando a getUsuarios');
//    return new Promise((resolve, reject) => {
//       const usuarios = [
//          {
//             "userId": 1,
//             "id": 1,
//             "title": "delectus aut autem",
//             "completed": false
//          },
//          {
//             "userId": 1,
//             "id": 2,
//             "title": "quis ut nam facilis et officia qui",
//             "completed": false
//          },
//          {
//             "userId": 1,
//             "id": 3,
//             "title": "fugiat veniam minus",
//             "completed": false
//          }]
//       return resolve(usuarios);
//    })
// }
// fetch('https://jsonplaceholder.typicode.com/todoadasdasdasdasdasdasds/1')
//    .then(function(respuesta) {
//       console.log('dentro del THEN, la promesa entonces fue RESOLVE()')
//       respuesta.json()
//       .then(respuestaREAL => {
//          console.log('POR FIN LA RESPUESTA',respuestaREAL)
//          armarPaginaWEB(respuestaREAL);
//       })
//       .catch((error) => {
//          console.log('HUBO UN ERRRO EN LA RESPUESTA REAL', error);
//       })
//    })
//    .catch(function (error) {
//       console.log('dentro del CATCH, la promesa fallo, y utilizo REJECT()');
//       console.log('error: ', error);
//    });
const peticionURL =  async url => {
    try {
       let respuesta = await fetch(url);
       let respuestaREAL = await respuesta.json();
       console.log(respuestaREAL)
    } catch (error) {
       console.log('ALGO FALLO ', error);
    }
    console.log('fuera del try')
 }
 peticionURL('https://jsonplaceholder.typicode.com/todos');
 peticionURL('https://jsonplaceholder.typicode.com/todos/1');
 /// ejemplo de clase 