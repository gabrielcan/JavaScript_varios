function Rectangulo() {
this.alto=0;
this.ancho=0;
this.figurancho=function(){
    this.ancho=parseFloat(document.getElementById('ancho').value);
    document.getElementById('rectangulo').style.width=this.ancho+'px'; 
    console.log(this.ancho);  
    
}
this.figuralto=function(){
    this.alto=parseFloat(document.getElementById('altura').value);
    document.getElementById('rectangulo').style.height=this.alto+'px';
    
}

this.ingresar=function(){

this.alto=parseFloat(document.getElementById('altura').value);
this.ancho=parseFloat(document.getElementById('ancho').value);
let select=document.getElementById('select_Calcular').value;




console.log(select);
console.log(this.ctrl(this.alto,this.ancho));
console.log(this.alto);
console.log(this.ancho);

if(this.ctrl(this.alto,this.ancho)==false){
alert('El valor de la altura y el ancho deben ser diferentes para poder ser un rectangulo y no pueden ser null, favor de poder verificar');
this.limpiar();
} else if (select==0){
    document.getElementById('valor_calc').innerHTML='Calculo del Area: '+this.calc_area(this.alto,this.ancho);
    console.log('Calculo del Area: '+this.calc_area(this.alto,this.ancho));
} 
else{
    document.getElementById('valor_calc').innerHTML='Calculo del Perimetro: '+this.calc_perim(this.alto,this.ancho);
    console.log('Calculo del Perimetro: '+this.calc_perim(this.alto,this.ancho));
}
}

this.calc_area=function(alt,anch){
let area=anch*alt;
return area;
}
this.calc_perim=function(alt,anch){
    let perimet=(2*anch)+(2*alt);
    return perimet;  
}

this.ctrl=function(alt,anch){

    if(alt>0 && anch>0 && alt!=anch){
        return true;
    } 
        return false;
    
}

this.figmostrar=function(){
    document.getElementById('rectangulo').style.display='flex';
    document.getElementById('valor_calc').style.display='flex';
}
this.limpiar=function(){
    document.getElementById('rectangulo').style.display='none';
    document.getElementById('altura').value=0;
    document.getElementById('ancho').value=0;
    document.getElementById('valor_calc').style.display='none';
}
}

const rect1= new Rectangulo();

function calculo(){
    rect1.ingresar();
}
function base(){
    rect1.figurancho();
}
function altura(){
    rect1.figuralto();
}
function ver(){
    rect1.figmostrar();
}

function barrer(){
    rect1.limpiar();
}