let registrarseBtn = document.getElementById("registrarseBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title2 = document.getElementById("title2");
let forgetPass = document.getElementById("forgetPass");
let sendBtn = document.getElementById("sendBtn");


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
