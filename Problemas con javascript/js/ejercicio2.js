
// ejercicio2

var cantDados= prompt("ingrese cantidad de dados a calcular: ");
cantDados=parseInt(cantDados);

function dado(cantDados) {
var cont=0

for(var index = 0; index < cantDados; index++) {

    
        for( var index2=0;index2<6;index2++){


            for( var index3=0;index3<6;index3++){

               console.log(index2+1,index3+1)
                
               
                cont=cont+1;
            }



                                            }
}

}


dado(cantDados);


function redireccion() {
    
    window.location.href="index.html";
}
