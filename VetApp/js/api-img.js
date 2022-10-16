var especie = document.getElementsByName("especie");


const imgPac = document.getElementById("imagenPaciente");
const URLDog = "https://api.thedogapi.com/v1/images/search";
const URLCat = "https://api.thecatapi.com/v1/images/search";

function cargarFoto() {
  // console.log(especie)

  if (especie[1].checked) {
    URL = URLCat;
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((strRespuesta) => {
        imgPac.src = strRespuesta[0].url;
      });
  } else if (especie[0].checked) {
    URL = URLDog;
    fetch(URL)
      .then((respuesta) => respuesta.json())
      .then((strRespuesta) => {
        imgPac.src = strRespuesta[0].url;
      });
  } else {
    imgPac.alt =
      "Elija canino o felino para cargar foto";
  }
}
