// Funcion fs que me permite leer archivos de forma local (.JSON)
const fs = require("fs");

// Función que lee el JSON y retorna el precio del producto solicitado
function obtenerPrecio(idBuscado) {
  try {
    // Se crea una variable que contiene los datos leidos en el JSON
    const data = fs.readFileSync("./productos.json", "utf8");
    // Se convierte los datos del JSON en un arreglo
    const productos = JSON.parse(data);
    // se busca dentro del arreglo el id que coincida
    const producto = productos.find(p => p.id === idBuscado);
    // se verifica que el id exista
    if (!producto) {
      // Si no existe devuelve el mensaje de no existe
      return `No existe un producto con ID ${idBuscado}`;
    }
    // si existe devuelve el mensaje con el nombre y precio del producto
    return `El ${producto.nombre} cuesta ${producto.precio}`;
  } catch (error) {
    return "Error al leer el archivo JSON";
  }
}

// Para probar en consola
module.exports = { obtenerPrecio };
