/*Se debe crear un sistema para control de stock y precios en un kiosco. 

Cada producto estará definido por un nombre, precio y cantidad/stock.

Se clasificarán en 2 grandes categorías, comestibles y bebidas.

Se considerará un producto igual a otro si sus nombres son iguales.
Los métodos para estas categorías de producto serán
·       Agregar productos: Si el producto ya existe, se sumará a la cantidad existente de dicho producto, la cantidad del producto ingresado
·       Cambiar cantidad en stock
·       Cambiar precio
·       Listar todos los productos en stock con sus cantidades
·       Valuación del stock (precio x cantidad) tanto de un solo producto como de todos los productos en su conjunto
·       Venta de producto. Se reducirá de la cantidad en stock la cantidad vendida. Si la cantidad vendida es mayor a la cantidad en stock, me indicará por pantalla la cantidad a vender y se eliminará el producto.
·       Consultar stock de un producto determinado
·       Consultar precio de un producto determinado*/

class Producto{
    constructor(nombre,precio,cat){
        this.nombre=nombre;
        this.precio=precio;
        //this.cantidad=1; // el stock se calcula
        this.categoria=cat;
    }
    
}

class Gestion{

    constructor(){
        this.listarProductos=[];
    }

    agregarProductos(productNuevo){

    const productoEnLista = this.listarProductos.find(function(producto) {
            return productNuevo.nombre == producto.nombre;
          })
           
          if (productoEnLista) {
              productoEnLista.cantidad++;
          } else {
            this.listarProductos.push(productNuevo);
          }
        }

    
    
    
    
    cambiarCantidadstock(){
    
    }
    
    cambiarPrecio(){
    
    }
    
    mostrarProductos(){

        for(let i=0;i<this.listarProductos.length;i++){

        console.log(this.listarProductos[i])
        }
 
    }
    
    consultarStockProducto(nombre){
    
    }
    
    consultarPrecioProducto(prodBuscado){
    
        const precioProduct = this.listarProductos.find(function(producto) {
            return prodBuscado==producto.nombre;
          })    

          if(precioProduct){
              console.log('el precio del producto ',precioProduct.nombre,'es: ',precioProduct.precio)
          } else {
            console.log('No hay coincidencias del producto buscado');
          }
    }
}

 let cant= prompt('ingrese cantidad de productos a crear')

 const agregar=new Gestion();

 for (let i = 0; i < cant; i++) {
         
let nombreP= prompt('Ingrese Nombre de producto: ');
let valorP= prompt('Ingrese Precio del producto: ');
let categP= prompt('Ingrese numero del grupo del producto (0: Comestibles y 1: Bebidas): ');
if(categP==0){
    categP='bebida';
} else {
    categP='comestible';
}
const producto1=new Producto(nombreP,valorP,categP);


agregar.agregarProductos(producto1);

//  console.log(producto1);

}

const categoria = ['bebida','comestible'];
const coca = new Producto('coca',10,categoria[0]);    
const birra = new Producto('andes',11,categoria[0]);    
const pan = new Producto('bimbo',10,categoria[1]);    
const galleta = new Producto('pepa',10,categoria[1]);

agregar.agregarProductos(birra);
agregar.agregarProductos(coca);
agregar.agregarProductos(pan);
// agregar.agregarProductos(birra);


agregar.mostrarProductos();

let buscarPrecio=prompt('ingrese el nombre del producto que quiere saber el precio');

agregar.consultarPrecioProducto(buscarPrecio);

// const mostrar= new Gestion();

// mostrar.mostrarProductos();




