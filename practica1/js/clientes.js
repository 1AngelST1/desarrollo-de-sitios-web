// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el cuerpo de la tabla de clientes donde se insertarán las filas dinámicamente
    const tablaClientes = document.getElementById("tablaClientes");

    // Selecciona el botón que exportará los datos a un archivo TXT
    const exportarTxt = document.getElementById("exportarTxt");

    // Obtiene la lista de clientes desde el localStorage, o crea un arreglo vacío si no hay datos
    let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    // Recorre el arreglo de clientes y genera una fila de tabla para cada uno
    clientes.forEach(c => {
        // Template string que representa una fila de la tabla con los datos del cliente
        let fila = `
        <tr>
            <td>${c.nombre}</td>
            <td>${c.email}</td>
            <td>${c.destino}</td>
            <td>${c.personas}</td>
            <td>${c.fecha}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="alert('Acción para editar no programada')">✏️</button>
                <button class="btn btn-danger btn-sm" onclick="alert('Acción para eliminar no programada')">🗑️</button>
            </td>
        </tr>`;
         // Agrega la fila generada al contenido HTML de la tabla
        tablaClientes.innerHTML += fila;
    });

    // Evento click para exportar los clientes a un archivo TXT
    exportarTxt.addEventListener("click", () => {
        // Selecciona todas las filas dentro del tbody
        let filas = document.querySelectorAll("#tablaClientes tr");
        let contenido = "";

        filas.forEach(fila => {
            let columnas = fila.querySelectorAll("td");
            // Armamos la línea con los valores de cada columna
            contenido += `Nombre: ${columnas[0].textContent}, Email: ${columnas[1].textContent}, Destino: ${columnas[2].textContent}, Personas: ${columnas[3].textContent}, Fecha: ${columnas[4].textContent}\n`;
        });
        // Crea un objeto Blob con el contenido y tipo "text/plain" para crear un archivo de texto
        let blob = new Blob([contenido], { type: "text/plain" });

        // Crea un enlace temporal para descargar el archivo
        let enlace = document.createElement("a");
        enlace.href = URL.createObjectURL(blob);
        enlace.download = "clientes.txt";

        // Simula un clic en el enlace para iniciar la descarga
        enlace.click();
    });
});
