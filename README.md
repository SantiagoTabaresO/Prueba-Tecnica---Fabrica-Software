# Prueba-Tecnica---Fabrica-Software
Este repositorio reúne las pruebas técnicas desarrolladas para el proceso de selección de prácticas académicas solicitado por QSistems. Incluye soluciones implementadas, documentación y recursos necesarios para su revisión y evaluación.

## ejercicio-01 - Mini Landing Page
Incluye:
 Header
- Espacio para Logo simple.
- Menú sin funcionalidad.
- Alineado con flexbox.

Sección Hero
- Título principal.
- Descripción breve.
- Botón principal con estilo morado oscuro.
- Diseño centrado verticalmente.

Sección de Servicios
- Tres tarjetas.
- Cada tarjeta tiene un título y descripción.
- Efecto hover: la tarjeta se “levanta” ligeramente.
- Dispuestas en una cuadrícula responsive.

**1. Uso de HTML (`header`, `section`)**
Se eligió HTML para:
- Facilitar la lectura del código.
- Mejorar accesibilidad.
- Era uno de los requisitos del ejercicio.

 **2. Uso de Flexbox en el Header**
El header requiere:
- Alinear elementos horizontalmente (logo + menú).
- Espaciarlos a los lados con `justify-content: space-between`.

**3. Sección Hero centrada**
Se utilizó flex column y texto centrado para:
- Crear un mensaje principal claro.
- Simular el estilo de landing pages actuales limpio y minimalista.

El botón morado oscuro se escogió porque:
- Genera contraste fuerte.
- Llama la atención.
- El tono de color puede parecerse al tono de color de la plataforma de QSistems.

**4. Uso de CSS Grid en las tarjetas**
Grid es una buena opción para:
- Distribuir items en filas y columnas.
- Adaptarse fácilmente a diferentes anchos de pantalla.
- Mantener proporciones visuales uniformes.

**5. Efecto hover “levantar tarjeta”**
Se agregó este efecto por tres razones:
1. Mejora la experiencia visual sin JS.
2. Agrega dinamismo moderno al diseño generando un tipo de "animación".

**6. Adaptabilidad en dispositivos moviles**
Todos los breakpoints se definieron manualmente con `@media`, para:
- Entender cómo funcionan realmente las media queries.
- Evitar dependencias de Bootstrap u otros frameworks.

**Breakpoints utilizados**
- **Pantallas grandes:** 3 tarjetas  
- **Tablets (ancho < 900px):** 2 tarjetas  
- **Móviles (ancho < 600px):** 1 tarjeta  

**Tecnologías usadas**
- HTML5
- CSS (Flexbox + Grid)

**Cómo visualizar el proyecto**
Solo abre el archivo.




## Ejercicio-02 - Lista de Tareas
Este ejercicio consiste en crear una lista interactiva de tareas donde el usuario puede agregar, completar y eliminar tareas en tiempo real. El objetivo principal es evaluar el dominio del DOM, manejo de eventos y control básico de estado sin usar frameworks.

Funcionalidades desarrolladas:

Agregar tareas  
El usuario escribe una tarea en el input y la agrega a la lista con el botón **Agregar**.

Validación básica  
Si el input está vacío, se evita su creación y se muestra una alerta simple.

Marcar como completada  
Cada tarea tiene un botón verde que cambia su estado visual aplicando:
- Tachado al texto  
- Reducción de opacidad  
- Cambio de clase por CSS (`.completed`)

Eliminar tarea  
Cada tarea tiene un botón rojo para eliminarla completamente del DOM.

Delegación de eventos  
En lugar de agregar eventos individuales a cada tarea, se usa un solo listener en la lista (`ul`), haciendo el código más eficiente.

**1. HTML**
Contiene:
- Un input para escribir tareas  
- Un botón para agregarlas  
- Un contenedor donde se insertan dinámicamente  

**2. CSS**
Define:
- Estilos simples para la lista  
- Botones diferenciados para eliminar/completar  
- Estilo visual de "tarea completada"  

**3. JavaScript**
Administra:
- Eventos de clic  
- Creación de nodos (`li`, `button`, `span`)  
- Delegación de eventos  
- Eliminación de tareas  
- Cambio de estado visual  

**1. JavaScript**
Se eligió no usar frameworks para evaluar el dominio real del DOM, como pedía el ejercicio.

**2. Delegación de eventos**
En lugar de asignar listeners a cada botón creado dinámicamente, se colocó uno solo en el contenedor padre (`taskList`), porque:
- reduce líneas de código  
- mejora el rendimiento  
- evita errores al agregar o eliminar tareas  

**3. Uso de `createElement`**
Se construyen las tareas mediante elementos nativos del DOM para:  
- reducir riesgos de errores  
- practicar el enfoque recomendado en proyectos reales

**4. Estado visual manejado con clases**
Se usa `.classList.toggle("completed")` porque es simple, legible y evita reescribir estilos desde JS.

**Tecnologías usadas**
- HTML 
- CSS 
- JavaScript




## Ejercicio-03 - Promedio de notas con transformaciones de datos
Este ejercicio consiste en transformar un arreglo de estudiantes para calcular el promedio de sus notas. El resultado debe ser un nuevo arreglo que contenga solo el nombre y el promedio de notas de cada estudiante, y debe imprimirse en consola.

Funcionalidades desarrolladas:

**Transformación del arreglo original**  
Se recibe un arreglo con objetos que contienen:
- nombre del estudiante  
- notas en formato de arreglo numérico  

Se genera un nuevo arreglo donde cada elemento contiene:  
- `nombre` y `promedio` redondeado a 2 decimales  

**Cálculo del promedio**  
El promedio se obtiene mediante:
- `reduce()` → para sumar todas las notas  
- dividir la suma entre la longitud del arreglo  
- redondear con `toFixed(2)`  

Impresión del resultado  
El arreglo final se imprime en consola para verificar el funcionamiento solicitado.




## Ejercicio-04 -  Conversión de hora a formato 12h y filtrado múltiple

Este ejercicio consiste en crear una función capaz de transformar una hora dada en formato **24 horas** (por ejemplo `"14:35"`) a su equivalente en formato **12 horas** (por ejemplo `"2:35 PM"`). La función recibe una cadena `"HH:MM"` y realiza:
- Separación de hora y minutos  
- Conversión numérica de la hora  
- Determinación del periodo **AM/PM**  
- Ajustes especiales para horas como:
  - `00:xx` → `12:xx AM`
  - `12:xx` → `12:xx PM`
  - `13–23` → (hora - 12) PM
  - `01–11` → AM

**Validación implícita del formato**
Aunque el ejercicio no exige validaciones explícitas, el uso controlado de `split()` y `parseInt()` garantiza que la hora pueda manipularse de manera correcta.

**1. Lógica en JavaScript**

Separación de componentes  
Se utiliza `split(":")` porque es la forma más sencilla y clara de dividir la hora en sus dos partes (horas y minutos).

Conversión numérica  
`parseInt()` se utiliza para transformar la hora a número y permitir comparaciones lógicas.

Condicionales claras  
El flujo de decisión está optimizado en 4 casos clave del formato de 12 horas:
- Medianoche  
- Horas de la mañana  
- Mediodía  
- Horas de la tarde  

Retorno final
La hora resultante se retorna como string siguiendo exactamente el formato solicitado: `"H:MM AM/PM"`



## Ejercicio-05 - Filtrado de lista de comida
Este ejercicio consiste en crear una función capaz de filtrar una lista de productos utilizando dos criterios: Un rango de precios y na categoría opcional ("bebida" o "comida").

Funcionalidad desarrollada

**Filtrado por rango de precios**  
El usuario define un rango `{ min, max }` y el sistema retorna únicamente los productos cuyo precio esté dentro de esos límites.

**Filtrado opcional por categoría**
Además del rango de precios, puede especificarse si se desean únicamente:
- bebidas  
- comidas

**Soporte para múltiples condiciones**
La función combina ambas validaciones garantizando que:
- si hay categoría, se usan ambas condiciones  
- si no hay categoría, solo se filtra por precio  

**1. JavaScript**
Uso de `.filter()`:Se eligió `.filter()` porque es el método ideal para transformar un array basado en condiciones lógicas.

**Parámetro como objeto**  
La función recibe los filtros como un objeto estructurado:{ min: 1000, max: 3000, categoria: "bebida" }



## Ejercicio-06 - Buscar productos de la lista JSON
Este ejercicio consiste en crear una función que lee un archivo JSON local (`productos.json`) y devuelve el precio del producto solicitado según su ID. El objetivo principal es evaluar el manejo de archivos, parseo de JSON y control de errores en Node.js.

Funcionalidades desarrolladas:

Obtener precio  
La función `obtenerPrecio(id)` recibe un ID y devuelve:
- El nombre del producto  
- Su precio  

Validación básica  
Si el ID no existe en el JSON, se devuelve un mensaje indicando que no existe el producto.

Manejo de errores  
Si ocurre algún error al leer el archivo JSON (archivo inexistente, error de sintaxis, etc.), la función devuelve un mensaje de error genérico.

**1. Node.js**
Contiene:
- Uso del módulo `fs` para leer archivos de manera local  
- Lectura de `productos.json`  
- Parseo de JSON a un arreglo de objetos  

**2. Validación de datos**
La función:
- Verifica que el producto con el ID solicitado exista  
- Maneja errores de lectura o parseo con `try/catch`  

**3. Retorno de información**
Dependiendo del caso:
- Producto encontrado: `"El [nombre] cuesta [precio]"`  
- Producto no encontrado: `"No existe un producto con ID [id]"`  
- Error de lectura: `"Error al leer el archivo JSON"`  

**4. Modularidad**
Se exporta la función con `module.exports = { obtenerPrecio }` para poder usarla en otros archivos o pruebas unitarias.

**Tecnologías usadas**
- Node.js
- Módulo nativo `fs`
- JSON



## ejercicio-07 - Sistema de gestion de tareas
Este ejercicio consiste en crear un sistema interactivo de gestión de tareas donde el usuario puede agregar, filtrar, actualizar y eliminar tareas en tiempo real. El objetivo principal es evaluar el dominio del DOM, manejo de eventos, manipulación de arrays como estructura de datos y control básico de estado sin usar frameworks.

Funcionalidades desarrolladas:

Agregar tareas  
El usuario ingresa un título, descripción y estado inicial, y agrega la tarea con el botón "Agregar Tarea".

Validación básica  
Si el título o la descripción están vacíos, se evita la creación de la tarea y se muestra una alerta simple.

Filtrar tareas  
El usuario puede filtrar la lista de tareas según su estado:
- Todas  
- Pendiente  
- En progreso  
- Completada  

Actualizar estado  
Cada tarea tiene un botón "Cambiar Estado" que cicla entre los estados:
- Pendiente, En progreso, Completada, Pendiente,.....  
El cambio se refleja visualmente mediante clases y estilos CSS.

Eliminar tarea  
Cada tarea tiene un botón "Eliminar" que remueve completamente la tarjeta del DOM y del array de tareas.

Visualización mediante tarjetas  
Las tareas se muestran en un grid de tarjetas (`.card`) con:
- Bordes y sombras para estilo visual  
- Colores diferenciales según el estado (Pendiente, En progreso, Completada)  
- Responsive para tablet y móvil  

**1. HTML**  
Contiene:
- Inputs para título y descripción  
- Selector para estado inicial  
- Botón para agregar la tarea  
- Selector para filtrar tareas  
- Contenedor donde se insertan dinámicamente las tarjetas de tareas  

**2. CSS**  
Define:
- Estilo visual de la página inspirado en el diseño QS  
- Tarjetas (`.card`) con sombra, borde redondeado y hover  
- Colores para diferenciar estados  
- Responsive grid de tarjetas para distintos tamaños de pantalla  

**3. JavaScript**  
Administra:
- Array de tareas como estructura de datos  
- Funciones para crear, eliminar y actualizar tareas  
- Filtrado por estado  
- Creación dinámica de tarjetas mediante `createElement`  
- Aplicación de clases CSS para manejar el estado visual de cada tarea  

**1. JavaScript nativo**  
Se eligió no usar frameworks para evaluar el manejo de arrays, como pedía el ejercicio.

**2. Modularidad y claridad**  
Todas las funciones están separadas:
- `crearTarea()`  
- `mostrarTareas()`  
- `cambiarEstado()`  
- `eliminarTarea()`  
- `limpiarFormulario()`  

**Tecnologías usadas**
- HTML
- CSS
- JavaScript nativo
