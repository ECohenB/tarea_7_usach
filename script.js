
// array de productos
let products = [
    { name: "Laptop", category: "electronica", price: 1200, stock: 5, discount: 0 },
    { name: "Televisor", category: "electronica", price: 800, stock: 3, discount: 10
   },
    { name: "Sofá", category: "hogar", price: 500, stock: 8, discount: 15 },
    { name: "Mesa de comedor", category: "hogar", price: 700, stock: 2, discount: 0 },
    { name: "Pan", category: "alimentos", price: 1.5, stock: 50, discount: 0 },
    { name: "Leche", category: "alimentos", price: 1.2, stock: 20, discount: 5 },
   ];

// ejercicio 1:
let productsDiscount = products.filter(producto => producto.discount > 0);

// Nuevo array de los productos con descuento
console.log('el nuevo array de productos con descuento es:');
productsDiscount.forEach(producto => console.log(producto));


// ejercico 2:
let productsConDiscount = products
    .filter(producto => producto.discount > 0) // Filtrar productos con descuento con funcion flecha
    .map(producto => {
        // Cálculo del nuevo precio aplicando el descuento
        let priceAfterDiscount = producto.price - (producto.price * (producto.discount / 100));
        // Nuevo array con los productos con descuento y su nuevo precio
        return { ...producto, priceAfterDiscount };
    });

// ejercico 3:
function arrayStockBajo(productos) {
    let productosConStockBajo = [];

    for (let producto of productos) {
        if (producto.stock < 5) {
            productosConStockBajo.push(producto);
        }
    }

    return productosConStockBajo;
}
let stockBajo = arrayStockBajo(products);
console.log('Los productos con stock bajo son:');
console.log(stockBajo);

// Ejercicio 4:

let pan = [
    { nombre: 'Pan', unidades: 10 },
    { nombre: 'Leche', unidades: 10 },
    { nombre: 'Laptop', unidades: 20 }
];

// Llamamos a la función Disponible para agregar la cantidad de unidades del producto
function Disponible(nombreProducto, unidades) {
    try {
        // Se busca el producto en el array usando la función flecha 
        let producto = pan.find(p => p.nombre === nombreProducto);

        if (!producto) {
            // Si no existe se lanza un error
            throw new Error(`El producto "${nombreProducto}" no existe en el inventario.`);
        }

        // Y si existe, aumenta su cantidad
        producto.unidades += unidades;
        console.log(`Se agregó ${unidades} unidades al producto "${nombreProducto}". Cantidad actual: ${producto.unidades}`);
    } catch (error) {
        // Error por consola
        console.error(error.message);
    }
}
Disponible('Pan', 10);  // El producto existe
Disponible('queque', 5); // El producto no existe

// ejercicio 5:


   function arrayProductos(productos) {
    let resumen = {};

    for (let producto of productos) {
        let categoria = producto.category;

        if (resumen[categoria]) {
            resumen[categoria]++;
        } else {
            resumen[categoria] = 1;
        }
    }

    return resumen;
}

let categorias = arrayProductos(products);
console.log('El siguiente resumen de los productos por categoría es:');
console.log(categorias);