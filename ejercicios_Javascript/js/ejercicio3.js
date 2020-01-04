


//  console.log(numeroingresado); 
 
 var contpos=0;
 var contneg=0;
 var continuar=0;
 var valorinput1;
 var valorinput2;
 var createlabel1=document.createElement('li');
 var createlabel2=document.createElement('li');
 


function contarposneg(numeroingresado) {

var numeroingresado=document.getElementById('ingreso').value;
numeroingresado=parseInt(numeroingresado);

    console.log(numeroingresado); 
    if (numeroingresado>0) {
        contpos=contpos+1;
    } else if(numeroingresado<0) {
        contneg=contneg+1;
    }

continuar=prompt('Si desea continuar ingrese un valor diferente de 0');
continuar=parseInt(continuar);

if(continuar==0){

    valorinput1= document.createTextNode('Cantidad de valores Positivos: '+contpos)
    createlabel1.appendChild(valorinput1);
    document.getElementById('resultado').appendChild(createlabel1);


    valorinput2= document.createTextNode('Cantidad de valores Negativos: '+contneg)
    createlabel2.appendChild(valorinput2);
    document.getElementById('resultado').appendChild(createlabel2);

console.log('Positivos: ',contpos);
console.log('Negativos: ',contneg);

document.getElementById("ingreso").disabled = true;
document.getElementById("btn__calculo").disabled = true;
document.getElementById('nuevo_calculo').style.display = 'flex';
contpos=0;
contneg=0;

}

borrar(); // limpia el input
document.getElementById('ingreso').focus();//hace foco en el intput 
}


function borrar(){
document.getElementById('ingreso').value="";
}

function redireccion() {
    
    window.location.href="index.html";
}
function redireccion2(){
    window.location.href="ejercicio3.html";
}