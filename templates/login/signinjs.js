const registrarseBtn = document.getElementById("registrarseBtn");
const signinBtn = document.getElementById("signinBtn");
const nameField = document.getElementById("nameField");
const title2 = document.getElementById("title2");
const forgetPass = document.getElementById("forgetPass");
const sendBtn = document.getElementById("sendBtn");
const nombreLoginError = document.getElementById("nombreLoginError");
const emailLoginError = document.getElementById("emailLoginError");
const passLoginError = document.getElementById("passLoginError");


signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title2.innerHTML = "Iniciar Sesión";
    registrarseBtn.classList.add("disabled");
    signinBtn.classList.remove("disabled");
    forgetPass.innerHTML = "¿Olvidaste tu contraseña?";
    sendBtn.innerHTML = "Ingresar";
}

registrarseBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title2.innerHTML = "Registrarse";
    registrarseBtn.classList.remove("disabled");
    signinBtn.classList.add("disabled");
    forgetPass.innerHTML = "";
    sendBtn.innerHTML = "Crear Cuenta";
}

function validarNombre(){
    const nombre = document.getElementById("nombreLogin").value;

    
    if(nombre.length < 2){
        nombreLoginError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return false;
    }

    nombreLoginError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
 
 }