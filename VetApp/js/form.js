// form contacto

//variables creadas para checkear el correcto llenado del formulario
var formName = document.getElementById("name")
var formEmail = document.getElementById("email")
var formRole = document.getElementById("dropdown")
var avisoBadForm = document.getElementById("avisoForm")
var anchor = document.getElementById("name-label") 

//vuelve invisible el aviso 
function limpiaAvisoForm(){ 
    console.log("limpiaAviso");
    avisoBadForm.style.opacity = 0
}

//checkea que los campos estén completos y scrolea para arriba
function validaContacto(){
    console.log("validaContacto");
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

