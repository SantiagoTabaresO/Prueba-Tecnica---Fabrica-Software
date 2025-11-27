// Arreglo original con estudiantes y sus notas
const estudiantes = [
    { nombre: "Ana", notas: [3.2, 4.1, 3.9] },
    { nombre: "Luis", notas: [2.8, 3.0, 3.5] },
    { nombre: "Marta", notas: [4.5, 4.6, 4.9] }
];

/* 
    Transformación principal:
    - Usamos .map() para recorrer el arreglo.
    - Calculamos el promedio usando .reduce().
    - Retornamos un nuevo arreglo con el nombre y el promedio.
*/
const resultado = estudiantes.map(est => {
    
    // Sumar todas las notas
    const suma = est.notas.reduce((acc, nota) => acc + nota, 0);

    // Calcular el promedio dividiendo por la cantidad de notas
    const promedio = suma / est.notas.length;

    // Retornar el nuevo objeto con promedio redondeado a 2 decimales
    return {
        nombre: est.nombre,
        promedio: promedio.toFixed(2)
    };
});

// Mostrar el resultado en consola
console.log(resultado);
