//variables creadas para checkear el correcto llenado del formulario
var formBtn = document.getElementById("submit2")
var formName = document.getElementById("name")
var formEmail = document.getElementById("email")
var formRole = document.getElementById("dropdown")
var avisoBadForm = document.getElementById("avisoForm")
var anchor = document.getElementById("avisoForm") 

//vuelve invisible el aviso 
function limpiaAvisoForm(){ 
    avisoBadForm.style.opacity = 0
}

//checkea que los campos estén completos y scrolea para arriba
function validaContacto(){
    console.log("validacion de datos !!!!")
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
    } else {
        console.log("correcto, se envian datos de form")
        formBtn.click();
    }
}

