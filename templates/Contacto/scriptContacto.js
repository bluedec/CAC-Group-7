 const nombreError = document.getElementById("nombre-error");
 const apellidoError = document.getElementById("apellido-error");
 const emailError = document.getElementById("email-error");
 const paisError = document.getElementById("pais-error");
 const mensajeError = document.getElementById("mensaje-error");
 const sendBtn = document.getElementById("sendBtn");

 function validarNombre(){
    const nombre = document.getElementById("nombre-contacto").value;

    
    if(nombre.length < 2){
        nombreError.innerHTML = "Se requiere el nombre";
        return false;
    }

    nombreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

    
 }

 function validarApellido(){
    const apellido = document.getElementById("apellido-contacto").value;

    if (apellido.length < 2){
        apellidoError.innerHTML = "Se requiere el apellido";
        return false;
    }
    apellidoError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
 }

 function validarEmail(){
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const email = document.getElementById("email-contacto").value;

    if(email.length == 0){
        emailError.innerHTML = "Se requiere el email"
    }

    if (!email.match(validRegex)){
        emailError.innerHTML = "Email invalido";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
 }

 function validarPais(){
    const pais = document.getElementById("pais");

    if (pais.value == '') {
        // value is set to a valid option, so submit form
        return false;
    }
    paisError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validarMensaje(){
    var mensaje = document.getElementById("mensaje-contacto").value;
    var requiere = 30;
    var faltan = requiere - mensaje.length;


    if (faltan>0) {
        mensajeError.innerHTML = 'Faltan ' +faltan + ' más caracteres';
        return false;
    }
    mensajeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validarForm(){
    if (!validarNombre() || !validarApellido() || !validarEmail() || !validarPais() || !validarMensaje()){
        sendBtn.addEventListener("click", function(event){
            event.preventDefault()
          });
        alert('Porfavor, complete el formulario para enviar')
        return false;
    }
}

