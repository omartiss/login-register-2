
document.getElementById("btn__iniciar-sesión").addEventListener("click", iniciarSesion);
document.getElementById("btn__register").addEventListener("click", register);
window.addEventListener("resize", anchoPage);



var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var box_login_register = document.querySelector(".box__login-register");
var box_background_login = document.querySelector(".box__background-login");
var box_background_register = document.querySelector(".box__background-register");



function anchoPage(){

    if (window.innerWidth > 850){
        box_background_register.style.display = "block";
        box_background_login.style.display = "block";
    }else{
        box_background_register.style.display = "block";
        box_background_register.style.opacity = "1";
        box_background_login.style.display = "none";
        formulario_login.style.display = "block";
        box_login_register.style.left = "0px";
        formulario_register.style.display = "none";   
    }
}

anchoPage();


    function iniciarSesion(){
        if (window.innerWidth > 850){
            formulario_login.style.display = "block";
            box_login_register.style.left = "10px";
            formulario_register.style.display = "none";
            box_background_register.style.opacity = "1";
            box_background_login.style.opacity = "0";
        }else{
            formulario_login.style.display = "block";
            box_login_register.style.left = "0px";
            formulario_register.style.display = "none";
            box_background_register.style.display = "block";
            box_background_login.style.display = "none";
        }
    }

    function register(){
        if (window.innerWidth > 850){
            formulario_register.style.display = "block";
            box_login_register.style.left = "410px";
            formulario_login.style.display = "none";
            box_background_register.style.opacity = "0";
            box_background_login.style.opacity = "1";
        }else{
            formulario_register.style.display = "block";
            box_login_register.style.left = "0px";
            formulario_login.style.display = "none";
            box_background_register.style.display = "none";
            box_background_login.style.display = "block";
            box_background_login.style.opacity = "1";
        }
}