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
            if(!mensaje) mensaje = "Sin mensaje";


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