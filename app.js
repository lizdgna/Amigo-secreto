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

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Actualizar la lista visual de amigos
    mostrarListaAmigos();

    // Limpiar el campo de entrada
    inputField.value = "";
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        li.setAttribute('role', 'listitem'); // Mejorar accesibilidad
        listaAmigos.appendChild(li);
    });
}

