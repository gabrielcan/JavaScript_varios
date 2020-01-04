



// function muestralog(nota1,nota2)
// {

// parseInt(nota1);
// parseInt(nota2);
// var suma=nota1+nota2;

// console.log('mi nota es: '+suma);

// }

// muestralog(7,5); //se envia el valor de la función

// muestralog(10,5); //se envia el valor de la función 
// // no es necesario que la funcion este antes de ser llamada


// mandar 2 valores a una funcion y usamos return

// var valor1=parseInt(prompt('ingresa valor1: '));
// var valor2=parseInt(prompt('ingresa valor2: '));



// function sumar(valor1,valor2){
// var suma=valor1+valor2;

// return(suma)

// }

// var resultado=sumar(valor1,valor2);

// var valorhmtl=document.getElementById('resultado');
// valorhmtl.innerHTML=resultado;

var cadena=[];
i=0;
var valor=1;
var ac=0;

while (valor==1){
valor1=parseInt(prompt('ingresa valor'+valor+':'));
cadena[i]=valor1;
ac=ac+cadena[i];
i++;


valor=prompt('desea continuar, ingrese un valor mayor a 1');

}


var promedio=ac/i;
console.log(promedio.toFixed(2)); //toFixed redondea la variable


// for (let index = 0; index < cadena.length; index++) {
// a.push() agregar un número en el array
// console.log(promedio);
    
// }

