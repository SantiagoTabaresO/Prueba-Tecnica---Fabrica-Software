// Arreglo inicial de productos
const productos = [
  { nombre: "Café", precio: 1500, categoria: "bebida" },
  { nombre: "Arepa", precio: 2000, categoria: "comida" },
  { nombre: "Té", precio: 1000, categoria: "bebida" },
  { nombre: "Sandwich", precio: 5500, categoria: "comida" }
];

/*
  Función que filtra productos según:
  - un rango de precios
  - un tipo específico (bebida o comida)
*/
function filtrarProductos(productos, filtro) {
  return productos.filter(producto => {

    // Validar precio dentro del rango
    const coincidePrecio =
      producto.precio >= filtro.precioMin &&
      producto.precio <= filtro.precioMax;

    // Validar si la categoría coincide con el tipo indicado
    const coincideTipo = producto.categoria === filtro.tipo;

    // Deben cumplirse ambas condiciones
    return coincidePrecio && coincideTipo;
  });
}

// ---------------- PRUEBAS ----------------

// 1. Bebidas entre 900 y 2000
console.log("Bebidas entre 900 y 2000:");
console.log(
  filtrarProductos(productos, {
    precioMin: 900,
    precioMax: 2000,
    tipo: "bebida"
  })
);

// 2. Comidas entre 1000 y 3000
console.log("Comidas entre 1000 y 3000:");
console.log(
  filtrarProductos(productos, {
    precioMin: 1000,
    precioMax: 3000,
    tipo: "comida"
  })
);

// 3. Comidas entre 0 y 6000
console.log("Comidas entre 0 y 6000:");
console.log(
  filtrarProductos(productos, {
    precioMin: 0,
    precioMax: 6000,
    tipo: "comida"
  })
);
