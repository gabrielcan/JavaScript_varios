

function contarposneg() {

    var contpos=0;
    var contneg=0;
    var continuar=0;
    
do{

    valor=prompt('ingrese un valor');

    if (valor>0) {
        contpos=contpos+1;
    } else if(valor<0) {
        contneg=contneg+1;
    }
continuar=prompt('Si desea continuar ingrese un valor diferente de 0');

} while (continuar!=0);

console.log('Negativos: ',contpos);
console.log('Negativos: ',contneg);
}

contarposneg();

function redireccion() {
    
    window.location.href="index.html";
}