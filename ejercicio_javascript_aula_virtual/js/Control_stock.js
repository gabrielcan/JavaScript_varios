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
    constructor(){
        this.nombre;
        this.precio;
        this.cantidad; // el stock se calcula
        this.categoria;
    }
    
agregarProductos(){

   let nombreP= prompt('Ingrese Nombre de producto: ');
   let valorP= prompt('Ingrese Precio del producto: ');
   let cantP= prompt('Ingrese cantidad del producto: ');
   let categP= prompt('Ingrese grupo nuemero del grupo del producto (0: Comestibles y 1: Bebidas): ');

    this.nombre=nombreP;
    this.precio=valorP;
    this.cantidad=cantP; // el stock se calcula
    this.categoria=categP;

}


cambiarCantidadstock(){

}

cambiarPrecio(){

}

listarProductos(){

}

consultarStockProducto(nombre){

}

consultarPrecioProducto(nombre){

}

}

const product1= new Producto();
let arrayProducto=[].push(new Producto('cerveza','20','bebible'));
product1.agregarProductos();
console.log(product1);
product1.agregarProductos();
console.log(product1);
arrayProducto=[].push(product1);
console.log(arrayProducto);



