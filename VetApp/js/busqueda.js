var mostrarDATA = document.querySelector(".mostrarDatos");

function filtrar() {
  ocultar();
  console.log(
    "aca se haria la consulta de datos en la DB para llenar el listado"
  );
}

// aca estaria la funcion que salta a la web de los datos de la consulta seleccionada con los valores que traiga de la DB

// function seleccionar(){
//     let Home = this.location
//     Home.href = "../formularios/nvaCons.html";

// }

// URL del json armado con Fake API = https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7
// Dentro de este json, se consume para las fotos las APIs The Dog API y The Cat API

function ocultar() {
  mostrarDATA.classList.add("mostrarDatos");
}

function mostrarConsulta() {
  mostrarDATA.classList.remove("mostrarDatos");
  mostrarDATA.scrollIntoView({ behavior: "smooth" });

  var rabtn = document.getElementsByName("radiobutton");
  var idPaciente;
  for (let i in rabtn) {
    if (rabtn[i].checked == true) {
      idPaciente = rabtn[i].value;
    }
  }

  var imgPac = document.getElementById("imagenPaciente");
  let motivo = document.getElementById("motivo");
  let anamnesis = document.getElementById("anamnesis");
  let mucosas = document.getElementById("mucosas");
  let linfo = document.getElementById("linfo");
  let hidratacion = document.getElementById("hidratacion");
  let temperatura = document.getElementById("temperatura");
  let frecCard = document.getElementById("frecCard");
  let frecResp = document.getElementById("frecResp");
  let pulso = document.getElementById("pulso");
  let diagno = document.getElementById("diagno");
  let detalles = document.getElementById("detalles");
  let tratamiento = document.getElementById("tratamiento");
  let indicaciones = document.getElementById("indicaciones");
  let proxCont = document.getElementById("proxCont");
  let control = document.getElementsByName("control");

  fetch("https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7")
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      for (id_ in post) {
        if (post[id_].id == idPaciente) {
          motivo.value = post[id_].consulta[0].motivo;
          console.log(post[id_].consulta[0].motivo);
          anamnesis.value = post[id_].consulta[0].anamnesis;
          mucosas.value = post[id_].consulta[0].mucosas;
          linfo.value = post[id_].consulta[0].linfonodulos;
          hidratacion.value = post[id_].consulta[0].hidratacion;
          temperatura.value = post[id_].consulta[0].temperatura;
          frecCard.value = post[id_].consulta[0].frecuenciaCardiaca;
          frecResp.value = post[id_].consulta[0].frecuenciaRespiratoria;
          pulso.value = post[id_].consulta[0].pulso;
          diagno.value = post[id_].consulta[0].diagnostico;
          detalles.value = post[id_].consulta[0].detalles;
          tratamiento.value = post[id_].consulta[0].tratamiento;
          indicaciones.value = post[id_].consulta[0].indicaciones;
          proxCont.value = post[id_].consulta[0].proximoControl;

          if (control[0].value == post[id_].consulta[0].control) {
            control[0].checked = true;
          } else {
            control[1].checked = true;
          }
        }
      }
    });
}

function mostrarPaciente() {
  mostrarDATA.classList.remove("mostrarDatos");
  mostrarDATA.scrollIntoView({ behavior: "smooth" });

  var rabtn = document.getElementsByName("radiobutton");
  var idPaciente;
  for (let i in rabtn) {
    if (rabtn[i].checked == true) {
      idPaciente = rabtn[i].value;
    }
  }

  let nombreProp = document.getElementById("apellidoYNombre");
  let direccion = document.getElementById("direccion");
  let telefono = document.getElementById("telefono");

  var imgPac = document.getElementById("imagenPaciente");
  let especie = document.getElementsByName("especie");
  let nombrePaciente = document.getElementById("nombrePaciente");
  let raza = document.getElementById("raza");
  let fechaNac = document.getElementById("fechaNac");
  let edad = document.getElementById("edad");
  let peso = document.getElementById("peso");
  let sexo = document.getElementsByName("sexo");
  let adopcion = document.getElementsByName("adopcion");
  let castracion = document.getElementsByName("castracion");

  fetch("https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7")
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      for (id_ in post) {
        if (post[id_].id == idPaciente) {
          nombreProp.value = post[id_].propietario.nombrePropietario;
          direccion.value = post[id_].propietario.correoElectronico;
          telefono.value = post[id_].propietario.telefono;
          nombrePaciente.value = post[id_].paciente.nombrePaciente;
          raza.value = post[id_].paciente.raza;
          fechaNac.value = post[id_].paciente.fechaNacimiento;
          edad.value = post[id_].paciente.edad;
          peso.value = post[id_].paciente.peso;
          imgPac.src = post[id_].paciente.foto;

          if (especie[0].value == post[id_].paciente.especie) {
            especie[0].checked = true;
          } else {
            especie[1].checked = true;
          }
          if (sexo[0].value == post[id_].paciente.sexo) {
            sexo[0].checked = true;
          } else {
            sexo[1].checked = true;
          }
          if (adopcion[0].value == post[id_].paciente.adopcion) {
            adopcion[0].checked = true;
          } else {
            adopcion[1].checked = true;
          }
          if (castracion[0].value == post[id_].paciente.castrado) {
            castracion[0].checked = true;
          } else {
            castracion[1].checked = true;
          }
        }
      }
    });
}

function filtrarConsultas() {
  console.log("comienzo");

  var imgPac = document.getElementById("imagenPaciente");
  let motivo = document.getElementById("motivo");

//   let anamnesis = document.getElementById("anamnesis");
//   let mucosas = document.getElementById("mucosas");
//   let linfo = document.getElementById("linfo");
//   let hidratacion = document.getElementById("hidratacion");
//   let temperatura = document.getElementById("temperatura");
//   let frecCard = document.getElementById("frecCard");
//   let frecResp = document.getElementById("frecResp");
//   let pulso = document.getElementById("pulso");
//   let diagno = document.getElementById("diagno");
//   let detalles = document.getElementById("detalles");
//   let tratamiento = document.getElementById("tratamiento");
//   let indicaciones = document.getElementById("indicaciones");
//   let proxCont = document.getElementById("proxCont");
//   let control = document.getElementsByName("control");

  fetch("https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7")
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      for (id_ in post) {
        if (post[id_].id == idPaciente) {
          motivo.value = post[id_].consulta[0].motivo;
    console.log(post[id_].consulta[0].motivo);

        //   anamnesis.value = post[id_].consulta[0].anamnesis;
        //   mucosas.value = post[id_].consulta[0].mucosas;
        //   linfo.value = post[id_].consulta[0].linfonodulos;
        //   hidratacion.value = post[id_].consulta[0].hidratacion;
        //   temperatura.value = post[id_].consulta[0].temperatura;
        //   frecCard.value = post[id_].consulta[0].frecuenciaCardiaca;
        //   frecResp.value = post[id_].consulta[0].frecuenciaRespiratoria;
        //   pulso.value = post[id_].consulta[0].pulso;
        //   diagno.value = post[id_].consulta[0].diagnostico;
        //   detalles.value = post[id_].consulta[0].detalles;
        //   tratamiento.value = post[id_].consulta[0].tratamiento;
        //   indicaciones.value = post[id_].consulta[0].indicaciones;
        //   proxCont.value = post[id_].consulta[0].proximoControl;

          if (control[0].value == post[id_].consulta[0].control) {
            control[0].checked = true;
          } else {
            control[1].checked = true;
          }
        }
      }
    });
  
//   var saveme = $.ajax({
//     type: "GET",
//     url: "https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7", //nombre del archivo php que consultaremos.
//     dataType: "json",
//     data: dataString, //Los datos enviados para la consulta
//     success: 
//     function (data) {
//       $.each(data, function (i, item) {
//         lista = document.getElementById("tablaBusquedaResp");
//         var tr = document.createElement("tr");
//         var columna1 = document.createElement("th");
//         columna1.innerHTML = item.dato1;
//         var columna2 = document.createElement("th");
//         columna2.innerHTML = item.dato1;
//         var columna3 = document.createElement("th");
//         columna3.innerHTML = item.dato3;
//         var columna4 = document.createElement("th");
//         columna4.innerHTML = item.dato4;
//         lista.appendChild(tr);
//         tr.appendChild(columna1);
//         tr.appendChild(columna2);
//         tr.appendChild(columna3);
//         tr.appendChild(columna4);
//       });
//     },
//   });
}

//   var saveme =  $.ajax({
//     type: "POST",
//     url: "hola.php", //nombre del archivo php que consultaremos.
//     dataType: "json",
//     data: dataString, //Los datos enviados para la consulta
//     success: function(data) {
//       $.each(data, function(i, item) {
//       lista = document.getElementById("myTable");
//       var tr = document.createElement("tr");
//       var columna1 = document.createElement("th")
//       columna1.innerHTML = item.dato1;
//       var columna2 = document.createElement("th")
//       columna2.innerHTML = item.dato1;
//       var columna3 = document.createElement("th")
//       columna3.innerHTML = item.dato3;
//       var columna4 = document.createElement("th")
//       columna4.innerHTML = item.dato4;
//       lista.appendChild(tr);
//       tr.appendChild(columna1);
//       tr.appendChild(columna2);
//       tr.appendChild(columna3);
//       tr.appendChild(columna4);
//      });
//     }
//   });
