

// Array agregar y mostrar un elemento
// var listaCompleta=[];
// var elementlist;

// do {
//     elementlist=prompt('ingresa elementos: ');
//     listaCompleta.push(elementlist);
    
// } while (confirm('Quiere agregar mas?'));

//for (let index = 0; index < listaCompleta.length; index++) {
    ////document.write(listaCompleta[index]);
  //  console.log(listaCompleta[index]);
//}

//console.log(elementlist);
// fin de array

// Funciones inicio

var p1;
var p2;



function operaciones() {
       
        
    var check=document.getElementById('selection').value;
    p1= document.getElementById('valor1').value;
    p2=document.getElementById('valor2').value;


    check=parseInt(check);
   // console.log(check);

switch (check) {
    case 1:
            console.log('estoy en caso1');
            
            suma(p1,p2);
        break;
    case 2:
            console.log('estoy en caso2');
            
            resta(p1,p2);   
        break;
    case 3:
            console.log('estoy en caso3');
            
            div(p1,p2);
        break;
    case 4:
            console.log('estoy en caso4');
        
            mult(p1,p2);
        break;
                        
    default:
        alert('NO EXISTEN OPERACIONES');
        break;
}
}


            function suma(p1,p2) {
                p1=parseInt(p1);
                p2=parseInt(p2);   
                var resultadoSum=parseInt(p1+p2);
                
                //console.log(resultadoSum); 
                alert(resultadoSum);
                                }

            function resta(p1,p2) {
                
            
            var resultadoRes=parseInt(p1-p2);
            //console.log(resultadoRes); 
            alert(resultadoRes);
            }
        
            function div(p1,p2) {
             
            
            var resultadoDiv=p1/p2;
            //console.log(resultadoDiv); 
            alert(resultadoDiv);
                                }
            function mult(p1,p2){

                
            var resultadoMult=p1*p2;
            //console.log(resultadoMult);
            alert(resultadoMult);
    
                                }
//fin funciones