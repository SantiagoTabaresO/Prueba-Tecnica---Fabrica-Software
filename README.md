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

**1. Uso de HTML semántico (`header`, `section`)**
Se eligió HTML semántico para:
- Facilitar la lectura del código.
- Mejorar accesibilidad y SEO.
- Seguir buenas prácticas desde etapas tempranas de aprendizaje.

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

