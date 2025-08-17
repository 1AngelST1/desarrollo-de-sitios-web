// Registro de clientes
// Espera a que todo el contenido del DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
      // --- Registro de clientes ---
    // Selecciona el formulario de registro
    const formRegistro = document.getElementById("formRegistro");

    // Verifica si el formulario existe en la página
    if (formRegistro) {
        // Evento al enviar el formulario
        formRegistro.addEventListener("submit", e => {
            e.preventDefault();// Evita que la página se recargue al enviar

            // Obtiene los valores ingresados en los campos y elimina espacios innecesarios
            let nombre = document.getElementById("nombre").value.trim();
            let email = document.getElementById("email").value.trim();
            let destino = document.getElementById("destino").value;
            let personas = document.getElementById("personas").value;
            let fecha = document.getElementById("fecha").value;
            let comentarios = document.getElementById("comentarios").value.trim();

            // Validación fecha futura
            let hoy = new Date().toISOString().split("T")[0];// Obtiene la fecha actual en formato YYYY-MM-DD
             if (fecha <= hoy) {
                alert("La fecha debe ser futura."); // Mensaje de error si la fecha no es válida
                return; // Detiene la ejecución
            }

            // Crea un objeto cliente con los datos ingresados
            let cliente = { nombre, email, destino, personas, fecha, comentarios };

            // Recupera los clientes existentes desde localStorage o crea un arreglo vacío
            let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
            // Agrega el nuevo cliente al arreglo
            clientes.push(cliente);
            // Guarda el arreglo actualizado en localStorage
            localStorage.setItem("clientes", JSON.stringify(clientes));

            // Mensaje de éxito y reseteo del formulario
            alert("Cliente registrado correctamente.");
            formRegistro.reset();
        });
    }
        
    // para visualizar los datos en el navegador por medio de consola (localStorage)
    //JSON.parse(localStorage.getItem("mensajes")));
    //JSON.parse(localStorage.getItem("clientes"))
    
});
