var conteoE = 0
var userName = document.getElementById("user")
var password = document.getElementById("pass")
var avisoBadlogin = document.getElementById("aviso")
var recupera = document.getElementById("recupera")

//variables creadas para checkear el correcto llenado del formulario
var formName = document.getElementById("name")
var formEmail = document.getElementById("email")
var formRole = document.getElementById("dropdown")
var avisoBadForm = document.getElementById("avisoForm")
var anchor = document.getElementById("name-label") 

function limpiaAviso(){
    avisoBadlogin.style.opacity = 0
}

//vuelve invisible el aviso 
function limpiaAvisoForm(){ 
    avisoBadForm.style.opacity = 0
}

//checkea que los campos estén completos y scrolea para arriba
function validaContacto(){
    if (formName.value == "") { 
        avisoBadForm.style.opacity = 1
        avisoBadForm.textContent = "Por favor, indique su nombre completo"
        anchor.scrollIntoView({behavior: "smooth"});      
    } else if (formEmail.value == ""){
        avisoBadForm.style.opacity = 1 
        avisoBadForm.textContent = "Por favor, complete la dirección de correo"
        anchor.scrollIntoView({behavior: "smooth"});
    } else if (String(formEmail.value).includes("@") == false){     
        avisoBadForm.style.opacity = 1
        avisoBadForm.textContent = "El correo debe incluir @"
        anchor.scrollIntoView({behavior: "smooth"});
    } else if (formRole.value == ""){    
        avisoBadForm.style.opacity = 1
        avisoBadForm.textContent = "Por favor, indique qué opción lo describe mejor"
        anchor.scrollIntoView({behavior: "smooth"});   
    }
}

//funciones que ya estaban
function valida_login() {
    valorUser = userName.value;
if (userName.value == "" || password.value == "") {     
    avisoBadlogin.style.opacity = 1
    avisoBadlogin.textContent = "Las credenciales no pueden estar vacias"
    conteoError();

} else { 
    if (userName.value == "admin" && password.value == "admin1") {
        console.log("login")
        let Home2 = parent.location
        Home2.href = "../barra-lateral/index.html";

    } else {
        avisoBadlogin.style.opacity = 1
        avisoBadlogin.textContent = "Usuario o Contraseña Incorrectos"   
        conteoError();
    }
}  

function conteoError(){
    conteoE++;
    if (conteoE == 3) {
        recupera.style.opacity = 1
    }
}

// etTimeout( function() { window.location.href = "web"; }, 5000 );

}


function testeo(){
    let Home2 = parent.location
    Home2.href = "../barra-lateral/index.html";
}