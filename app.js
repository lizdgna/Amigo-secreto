// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputField = document.getElementById('amigo'); // Obtener el campo de entrada
    const nombre = inputField.value.trim(); // Capturar y limpiar el valor del campo

  
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

}