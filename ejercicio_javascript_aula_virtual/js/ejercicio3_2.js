/* ejercicio 2 del aula virtual
Cuenta bancaria
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.

(investigar)
funciones anonimas 
variables complejas
variables no primitivas no pueden ser comparas de manera directa, debido que ocupan el mismo lugar de memoria
lo que puede generar que te muestra que son iguales porque ocupan el mismo lugar de memoria

*/

var cuenta={
    titular:'Alex',
    saldo:0,
    ingresos:[],
    extraer:[]
}

function ingresar(){

var ingreso=document.getElementById('valor_cuenta').value;
cuenta.ingresos[cuenta.ingresos.length]=parseFloat(ingreso);


//console.log(cuenta.ingresos)

limpiar();

}



function extraer(){

var control_saldo;   
    var negativo=document.getElementById('valor_cuenta').value;
    negativo=parseFloat(negativo);
   
    control_saldo=control(negativo);

if(control_saldo==false){
    alert('No es posible realizar la extraccion debido a que no tiene saldo suficiente');
    limpiar();
} else {
    cuenta.extraer[cuenta.extraer.length]=negativo;
    limpiar();
}


     }

function control(val1){

var control_extra=0;
var control_ing=0;
var res_control;
    for(i=0;i<cuenta.extraer.length;i++){
    
        control_extra=control_extra+cuenta.extraer[i];
    }
  
    for(j=0;j<cuenta.ingresos.length;j++){
    
        control_ing=control_ing+cuenta.ingresos[j];
    }
    res_control=control_ing-val1-control_extra;

     if(res_control<0){
return false;
     } else { return true;}

}
     
   function mostrar(){

    var total_ingresos=0;
    var total_extra=0;
    var result_sald;
    
    for(i=0;i<cuenta.extraer.length;i++){
    
        total_extra=total_extra+cuenta.extraer[i];
    }
    

    for(j=0;j<cuenta.ingresos.length;j++){
    
        total_ingresos=total_ingresos+cuenta.ingresos[j];
    }
   

    result_sald=total_ingresos-total_extra;
    cuenta.saldo=result_sald;

    console.log('DETALLES DE LA CUENTA DE  '+cuenta.titular);

    console.log('Moviemientos en la cuenta: ');
    for(i=0;i<cuenta.extraer.length;i++){
    
        console.log((i+1)+'° '+'EXTRACCION:'+cuenta.extraer[i]);
    }
    for(i=0;i<cuenta.ingresos.length;i++){
    
        console.log((i+1)+'° '+'INGRESO:'+cuenta.ingresos[i]);
    }

    console.log('Totales de la cuenta: ')
    console.log('total extraido:  '+total_extra);
    console.log('total ingresado:  '+total_ingresos);
    console.log('Saldo: '+cuenta.saldo);

    limpiar();

   }

   function limpiar(){
    document.getElementById('valor_cuenta').value=0;
    document.getElementById('valor_cuenta').focus();
   }

