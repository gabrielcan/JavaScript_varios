

function Cuenta (nombre){
    this.titular=nombre;
    this.saldo=0;
    this.ingresos=[];
    this.extraer=[];
    this.limpiar=function(){

        document.getElementById('valor_cuenta').value=0;
        document.getElementById('valor_cuenta').focus();
    };
    this.ingreso=function(){

let ingreso=document.getElementById('valor_cuenta').value;
this.ingresos[this.ingresos.length]=parseFloat(ingreso);
this.limpiar();
confirm('Fue ingresado '+'$'+ingreso);
    };

this.extraemos=function(){
    
        let control_saldo;   
        let negativo=document.getElementById('valor_cuenta').value;
        negativo=parseFloat(negativo);
     
        control_saldo=this.ctrl(negativo);
    // console.log(control_saldo);
    
    if(control_saldo==false){
        alert('No es posible realizar la extraccion debido a que no tiene saldo suficiente');
        this.limpiar();
    } else {
        this.extraer[this.extraer.length]=negativo;
        this.limpiar();
        confirm('Fueron extraido de la cuenta '+'$'+negativo);
    }


    };



this.ctrl=function(val1){

        let control_extra=0;
        let control_ing=0;
        let res_control;
            for(i=0;i<this.extraer.length;i++){
            
                control_extra=control_extra+this.extraer[i];
            }
          
            for(j=0;j<this.ingresos.length;j++){
            
                control_ing=control_ing+this.ingresos[j];
            }
            res_control=control_ing-val1-control_extra;
        
             if(res_control<0){
        return false;
             } else { return true;}
        
        
};

this.imprimir=function(){


    let total_ingresos=0;
    let total_extra=0;
    let result_sald;
    
    for(i=0;i<this.extraer.length;i++){
    
        total_extra=total_extra+this.extraer[i];
    }
    

    for(j=0;j<this.ingresos.length;j++){
    
        total_ingresos=total_ingresos+this.ingresos[j];
    }
   

    result_sald=total_ingresos-total_extra;
    this.saldo=result_sald;


    console.log('Totales de la cuenta de '+this.titular)
    console.log('total extraido:  '+total_extra);
    console.log('total ingresado:  '+total_ingresos);
    console.log('Saldo: '+this.saldo);

    this.limpiar();



}
this.mostrar_detalles=function(){

    console.log('Movimientos de la cuenta de '+this.titular);

    for(i=0;i<this.extraer.length;i++){
    
        console.log((i+1)+'° '+'EXTRACCION:'+this.extraer[i]);
    }
    for(i=0;i<this.ingresos.length;i++){
    
        console.log((i+1)+'° '+'INGRESO:'+this.ingresos[i]);
    }
    this.limpiar();
}
this.ingresar_titular=function(){

let nombre=document.getElementById('nombre_cuenta').value;

    if(nombre==null||nombre==''||nombre.length<=2){
        alert('Debe ingresar un valor valido');
        document.getElementById('nombre_cuenta').value='';
        document.getElementById('nombre_cuenta').focus();
    } else{
        this.titular=document.getElementById('nombre_cuenta').value;
        document.getElementById('nombre_cuenta').disabled=true;
        document.getElementById('btn_nombre').style.display="none";
        document.getElementById('cuenta').style.display="block";
    }

}

} 



const cuenta2=new Cuenta('Gabriel');

function handleIngresar(){
cuenta2.ingreso();
// console.log(cuenta2.ingresos);
};

function handleExtraer(){
    cuenta2.extraemos();
    // console.log(cuenta2.extraer);
    };
    
    function handleMostrar(){
        cuenta2.imprimir();
    };
function handleResumen(){
    cuenta2.mostrar_detalles();
};
function Ingresar_Nombre(){
   cuenta2.ingresar_titular();
};