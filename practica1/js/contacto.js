// --- Formulario de contacto ---
    // Selecciona el formulario de contacto
    const formContacto = document.getElementById("formContacto");
      // Verifica si el formulario existe en la página
    if (formContacto) {
        // Evento al enviar el formulario
        formContacto.addEventListener("submit", e => {
            e.preventDefault(); // Evita recarga de la página

            // Obtener valores del formulario
            let nombre = document.getElementById("nombre").value.trim();
            let email = document.getElementById("email").value.trim();
            let mensaje = document.getElementById("mensaje").value.trim();
            
            const alertaDiv = document.getElementById("alertaContacto");

            // --- VALIDACIONES ---
            // Nombre: mínimo 3 letras y solo caracteres válidos
            const regexNombre = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{3,}$/;
            if (!regexNombre.test(nombre)) {
                alertaDiv.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <i class="bi bi-exclamation-triangle-fill"></i> El nombre debe tener al menos 3 letras y solo contener caracteres válidos.
                    </div>`;
                return;
            }

            // Email: formato válido
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                alertaDiv.innerHTML = `
                    <div class="alert alert-danger" role="alert">
                        <i class="bi bi-envelope-exclamation-fill"></i> Ingresa un correo electrónico válido.
                    </div>`;
                return;
            }

            // Mensaje: opcional, pero si existe debe tener al menos 5 caracteres
            if (mensaje && mensaje.length < 5) {
                alertaDiv.innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        <i class="bi bi-chat-dots-fill"></i> El mensaje debe tener al menos 5 caracteres si decides escribir algo.
                    </div>`;
                return;
            }
            // mensaje no mayor a 200 caracteres
            if (mensaje.length > 200) {
                alertaDiv.innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        <i class="bi bi-chat-dots-fill"></i> El mensaje no puede exceder los 200 caracteres.
                    </div>`;
                return;
            }
            // Si no se escribió mensaje, asigna "Sin mensaje"
            if (!mensaje) mensaje = "Sin mensaje";


            // --- Guardar mensaje en localStorage ---
            let mensajes = JSON.parse(localStorage.getItem("mensajes")) || [];
            mensajes.push({ nombre, email, mensaje });
            localStorage.setItem("mensajes", JSON.stringify(mensajes));

            
             // Inserta un mensaje de éxito dentro del div "alertaContacto"
            document.getElementById("alertaContacto").innerHTML = `
               <div class="alert alert-success" role="alert">
                        <i class="bi bi-check-circle-fill"></i> ¡Mensaje enviado exitosamente!
                </div>`;

            // Limpia los campos del formulario
            formContacto.reset();
        });

        // para visualizar los datos en el navegador por medio de consola (localStorage)
        //JSON.parse(localStorage.getItem("mensajes")));
        //JSON.parse(localStorage.getItem("clientes"))
        // para eliminar los datos
       //localStorage.removeItem("mensajes"); 
       // localStorage.clear();
    }