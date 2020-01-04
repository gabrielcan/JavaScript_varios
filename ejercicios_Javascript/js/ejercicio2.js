
// ejercicio2

var cantDados;
// cantDados=parseInt(cantDados);

function dado() {
    cantDados=2

var node1 = document.createElement("li");      
var node2 = document.createElement("li");              // Create a <li> node
var textnode1;       // Create a text node
var textnode2;       // Create a text node



for(var index = 0; index < cantDados; index++) {
    
    
        for( var index2=0;index2<6;index2++){

           

            for( var index3=0;index3<6;index3++){
                console.log(index2+1,index3+1);
                node1 = document.createElement("li");   
                node2 = document.createElement("li");   

                
                textnode1=document.createTextNode(index2+1);  
                node1.appendChild(textnode1);  
                document.getElementById("myList1").appendChild(node1)

                textnode2=document.createTextNode(index3+1);  
                node2.appendChild(textnode2);  
                document.getElementById("myList2").appendChild(node2)
                 }

}

}
document.getElementById('dados').style.display='none'; //ocultar botom
}

// dado(2);


function redireccion() {
    
    window.location.href="index.html";
}
