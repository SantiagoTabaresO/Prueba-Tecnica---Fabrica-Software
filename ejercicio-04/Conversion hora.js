/*
  Función que convierte una hora en formato 24h ("14:35")
  a formato 12h ("2:35 PM")
*/
function convertirHora(hora24) {
  // 1. Separar la hora y los minutos
  const [hora, minutos] = hora24.split(":").map(Number);

  // 2. Determinar si es AM o PM
  const periodo = hora >= 12 ? "PM" : "AM";

  // 3. Convertir la hora al formato 12h
  let hora12 = hora % 12;   // El 13 → 1, el 14 → 2...
  
  // Si es 0 (medianoche) debe ser 12
  if (hora12 === 0) hora12 = 12;

  // 4. Retornar el formato final
  return `${hora12}:${minutos.toString().padStart(2, "0")} ${periodo}`;
}

// ------------------ PRUEBAS ------------------ //
console.log(convertirHora("14:35")); // 2:35 PM
console.log(convertirHora("00:10")); // 12:10 AM
console.log(convertirHora("12:00")); // 12:00 PM
console.log(convertirHora("09:50")); // 9:50 AM