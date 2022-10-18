var mostrarDATA = document.querySelector(".mostrarDatos");


function filtrar(){
    ocultar();
    console.log("aca se haria la consulta de datos en la DB para llenar el listado");
}


// aca estaria la funcion que salta a la web de los datos de la consulta seleccionada con los valores que traiga de la DB 

// function seleccionar(){
//     let Home = this.location
//     Home.href = "../formularios/nvaCons.html";
    
// }


function mostrar() {
    mostrarDATA.classList.remove("mostrarDatos");
    mostrarDATA.scrollIntoView({behavior: "smooth"}); 

}

function ocultar() {
    mostrarDATA.classList.add("mostrarDatos");
    
}