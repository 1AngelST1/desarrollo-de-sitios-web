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

            // --- VALIDACIONES ---
            // Nombre: mínimo 3 caracteres, solo letras y espacios
            const regexNombre = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{3,}$/;
            if (!regexNombre.test(nombre)) {
                alert("El nombre debe tener al menos 3 letras y solo contener caracteres válidos.");
                return;
            }

            // Email: formato válido
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                alert("Por favor, ingresa un correo electrónico válido.");
                return;
            }

            // Destino: obligatorio
            if (destino === "") {
                alert("Debes seleccionar un destino de interés.");
                return;
            }
            // Personas: número entero entre 1 y 20
            if (!/^\d+$/.test(personas) || parseInt(personas) <= 0 || parseInt(personas) > 20) {
                alert("El número de personas debe ser un número entre 1 y 20.");
                return;
            }

            // Fecha futura
            let hoy = new Date().toISOString().split("T")[0];
            if (fecha <= hoy) {
                alert("La fecha debe ser futura.");
                return;
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
