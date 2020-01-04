class Producto{
    constructor(nombre,precio, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 1;
        this.categoria = categoria;
    }
  }
  class GestorProductos{
    constructor(){
      this.lista = [];
    }
    agregarProductos(productoNuevo){
      const productoEnLista = this.lista.find(function(producto) {
        return productoNuevo.nombre == producto.nombre;
      })
       
      if (productoEnLista) {
          productoEnLista.cantidad++;
      } else {
        this.lista.push(productoNuevo);
      }
    }
  }
  const categoria = ['bebida','comestible'];
  const coca = new Producto('coca',10,categoria[0]);    
  const birra = new Producto('andes',11,categoria[0]);    
  const pan = new Producto('bimbo',10,categoria[1]);    
  const galleta = new Producto('pepa',10,categoria[1]);
  const gestor = new GestorProductos();
  gestor.agregarProductos(birra);
  gestor.agregarProductos(coca);
  gestor.agregarProductos(pan);
  gestor.agregarProductos(birra);
  console.log(gestor.lista.filter(function(producto) {
    return producto.categoria == categoria[0]
  }));