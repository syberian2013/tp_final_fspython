var conteoE = 0
var userName = document.getElementById("user")
var password = document.getElementById("pass")
var avisoBadlogin = document.getElementById("aviso")
var recupera = document.getElementById("recupera")

function limpiaAviso(){
    avisoBadlogin.style.opacity = 0
}

function valida_login() {
    valorUser = userName.value;
if (userName.value == "" || password.value == "") {     
    avisoBadlogin.style.opacity = 1
    avisoBadlogin.textContent = "Las credenciales no pueden estar vacias"
    conteoError();

} else { 
<<<<<<< HEAD
    if (userName.value == "admin" && password.value == "admin1") {
        console.log("login")
        let Home2 = parent.location
        Home2.href = "../barra-lateral/index.html";

=======
    if (userName.value == "admin" &&    password.value == "admin1") {
        console.log("login")
        let targetURL = '../barra-lateral/index.html';
        let newURL = document.createElement('a');
        newURL.href = targetURL;
        document.body.appendChild(newURL);
        newURL.click();
>>>>>>> origin/main
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

<<<<<<< HEAD
// etTimeout( function() { window.location.href = "web"; }, 5000 );

}


function testeo(){
    let Home2 = parent.location
    Home2.href = "../barra-lateral/index.html";
=======
// etTimeout( function() { window.location.href = "https://professor-falken.com"; }, 5000 );

>>>>>>> origin/main
}

