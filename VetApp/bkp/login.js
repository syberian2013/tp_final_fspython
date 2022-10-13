var conteoE = 0
var userName = document.getElementById("user")
var password = document.getElementById("pass")
var avisoBadlogin = document.getElementById("aviso")
var recupera = document.getElementById("recupera")

// esta funcion borra los mensajes de aviso antes de escribir nuevamente valores
function limpiaAviso(){
    avisoBadlogin.style.opacity = 0
}


// esta funcion valida los datos de los campos del login y muestra un aviso si hay error
function valida_login() {
    valorUser = userName.value;
    // chequea si el user o pass esta en blanco y llama al contador de errores
if (userName.value == "" || password.value == "") {     
    avisoBadlogin.style.opacity = 1
    avisoBadlogin.textContent = "Las credenciales no pueden estar vacias"
    conteoError();
    
    //verifica si el login es correcto con un usuario fijo (a cambiar por validacion de datos en servidor) y redirecciona a la aplicacion VetApp
} else { 
    if (userName.value == "admin" && password.value == "admin1") {
        // console.log("login")
        let Home2 = parent.location
        Home2.href = "../barra-lateral/vetapp.html";
    
        // muestra el error por credenciales invalidas y llama al contador de errores
    } else {
        avisoBadlogin.style.opacity = 1
        avisoBadlogin.textContent = "Usuario o Contraseña Incorrectos"   
        conteoError();
    }
    

}  

// funcion que cuenta los 3 errores de ingreso y muestra el texto para recupero de credenciales
function conteoError(){
    conteoE++;
    if (conteoE == 3) {
        recupera.style.opacity = 1
    }
}

// setTimeout( limpiaAviso(), 5000 );
setTimeout(() => {
    console.log("Delayed for 1 second.");
  }, "1000")

}

