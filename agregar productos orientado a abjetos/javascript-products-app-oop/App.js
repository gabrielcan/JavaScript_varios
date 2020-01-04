// Product Constructor
class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        //aqui se genera el contenido que tendra el 'div' ya generado con todas la etiquetas y class html 
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove(); //parentElement muesta el elemento padre del elemento contenido en la variable 'element'
            this.showMessage('Product Deleted Succsssfully', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`; // es la class que tendra el mensaje de alerta
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container'); // seleccionamos la parte que queremos marcar del html en este caso la class .container
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app); // con la funcion 'insertBefore', va insertar el elemento creado despues del elemento contenido en la variable 'div' y antes de elemento contenido en la variable app
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form')
.addEventListener('submit', function (e) { 
    //la letra 'e' que enviamos es una abreviacion para 'event'
    //addEventListener funcion que sirva para capturar el evento del elemento
    //una vez que captura el evento se ejecuta una 'function'

        const name = document.getElementById('name').value,
            price = document.getElementById('price').value,
            year = document.getElementById('year').value;

        // Create a new Oject Product
        const product = new Product(name, price, year);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (name === '' || price === '' || year === '') {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Product Added Successfully', 'success');
        ui.resetForm();

        e.preventDefault(); // usamos la siguiente function para cancelar el refresco por defecto del navegador
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });