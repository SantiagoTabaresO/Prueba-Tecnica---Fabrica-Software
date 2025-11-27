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

**1. JavaScript nativo**
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

**5. CSS simple y organizado**
Se utilizó un diseño minimalista para que el enfoque esté en la lógica.

**Tecnologías usadas**
- HTML 
- CSS 
- JavaScript vanilla




## Ejercicio-03 - 
