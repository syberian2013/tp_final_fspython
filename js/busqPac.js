const mostrarDATA = document.querySelector(".mostrarDatos");
const btnBusq = document.getElementById("buscador");
const mostrarbtnSeleccion = document.querySelector(".btnSeleccion");

var anchor1 = document.getElementById("msgBQ");
var anchor2 = document.getElementById("msgBQ2");

//asignacion de variables de campos de datos
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

// funcion para vaciar la tabla
function limpiarTabla() {
  tabla = document.getElementById("tablaBusquedaResp");
  tabla.innerHTML = "";
  ocultar();
}

//funcion para ocultar el div de los datos y el boton
function ocultar() {
  mostrarDATA.classList.add("mostrarDatos");
  mostrarbtnSeleccion.classList.add("btnSeleccion");
}

// funcion de busqueda de pacientes para mostrar lista
function Buscar() {
  const msgBQ = document.getElementById("msgBQ");
  msgBQ.innerHTML = "";
  ocultar();
  txtBusq = btnBusq.value.toUpperCase();
  console.log("btnBusq.value", btnBusq.value);
  console.log("txtBusq", txtBusq);

  let txtBQisEmpty = btnBusq.value;

  if (
    (txtBQisEmpty === undefined) |
    (txtBQisEmpty == "") |
    (txtBQisEmpty == 0)
  ) {
    err = "El campo no puede ser '0' o estar vacio para buscar datos";
    msgBQ.innerHTML = "<p>" + err + "</p>";
    anchor1.scrollIntoView({ behavior: "smooth" });
  } else {
    var rabtnBQ = document.getElementsByName("radiobuttonBQ");
    var idBusq;

    // recorro los botones para saber cual esta seleccionado y asi obtener los datos de esa consulta especifica y si ninguno es seleccionado avisar con un msg
    for (let i in rabtnBQ) {
      if (rabtnBQ[i].checked == true) {
        idBusq = rabtnBQ[i].value;
        console.log("idBusq22", idBusq);
        // break;
      }
    }

    const busqPacientes = async (idBusq, txtBusq) => {
      try {
        const resPost = await fetch(
          "https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7"
        );
        const post = await resPost.json();

        // vacio la tabla antes de escribir nuevos valores de la respuesta de busqueda
        limpiarTabla();
        console.log("idBusq antes del switch", idBusq);
        console.log("txtBusq antes del switch", txtBusq);

        if (idBusq == "bqId") {
          if (Number(txtBusq) <= post.length) {
            let txtBusq2 = txtBusq;
            console.log("typo de datos",typeof(post))
            console.log("typo de datos1",typeof(txtBusq2))
            console.log("escribe tabla",post, txtBusq2);
            escribirTabla(post, txtBusq2);
          } else {
            throw "El numero ingresado no es un ID valido";
          }
        }

        if (idBusq == "bqNombre") {
          post.forEach((element) => {
            let nombreUpper = element.paciente.nombrePaciente.toUpperCase();
            if (txtBusq == nombreUpper) {
              escribirTabla(post, element.id);
            }
          });
        }

        if (idBusq == "bqRaza") {
          post.forEach((element) => {
            let nombreUpper = element.paciente.raza.toUpperCase();
            if (txtBusq == nombreUpper) {
              escribirTabla(post, element.id);
            }
          });
        }

        if (idBusq == "bqPropietario") {
          post.forEach((element) => {
            let nombreUpper =
              element.propietario.nombrePropietario.toUpperCase();
            if (txtBusq == nombreUpper) {
              escribirTabla(post, element.id);
            }
          });
        }

        if (idBusq == "bqEdad") {
          post.forEach((element) => {
            let nombreUpper = element.paciente.edad;
            if (Number(txtBusq) == nombreUpper) {
              escribirTabla(post, element.id);
            }
          });
        }

        if (idBusq == "bqFechaIng") {
          post.forEach((element) => {
            let nombreUpper = element.paciente.fechaIngreso;
            if (txtBusq == nombreUpper) {
              escribirTabla(post, element.id);
            }
          });
        }
        console.log("idBusq despues del switch", idBusq);

        // muestro boton de seleccionar
        mostrarbtnSeleccion.classList.remove("btnSeleccion");
        mostrarbtnSeleccion.scrollIntoView({ behavior: "smooth" });
      } catch (err) {
        console.log(err);
        msgBQ.innerHTML = "<p>" + err + "</p>";
        anchor1.scrollIntoView({ behavior: "smooth" });
      }
    };
    busqPacientes(idBusq, txtBusq);
  }
}

// funcion que trae 10 registros y los carga en la tabla
function getBusqueda() {
  // vacio la tabla antes de escribir nuevos valores de la respuesta de busqueda
  limpiarTabla();

  const getJson = async () => {
    try {
      const resPost = await fetch(
        "https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7"
      );
      const post10 = await resPost.json();
      // muestro boton de seleccionar
      mostrarbtnSeleccion.classList.remove("btnSeleccion");
      mostrarbtnSeleccion.scrollIntoView({ behavior: "smooth" });

      let ID = 1;
      endID = 10;

      for (ID; ID <= endID; ID++) {
        escribirTabla(post10, ID);
      };

    } catch (error) {
      console.warn(error);
    }
  };

  getJson();
}

// funcion de carga de datos desde un json de consulta
function mostrarInfo() {
  var rabtn = document.getElementsByName("radiobutton");
  var idPaciente;

  const msgBQ2 = document.getElementById("msgBQ2");
  msgBQ2.innerHTML = "";

  // recorro los botones para saber cual esta seleccionado y asi obtener los datos de esa consulta especifica y si ninguno es seleccionado avisar con un msg
  for (let i in rabtn) {
    if (rabtn[i].checked == true) {
      idPaciente = rabtn[i].value;
      // break;
    }
  }

  try {
    if (idPaciente === undefined) {
      throw "Debe seleccionar un paciente para ver los datos";
    } else {
      mostrarDATA.classList.remove("mostrarDatos");
      mostrarDATA.scrollIntoView({ behavior: "smooth" });

      console.log("mostrar datos idPaciente:", idPaciente);

      const getDatos = async (idPaciente) => {
        try {
          const resPost = await fetch(
            "https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7"
          );
          const post = await resPost.json();

          var ID = idPaciente - 1;

          // for (ID; ID <= post.length; ID++) {
          const idPac = Number(post[ID].id);
          const DataPaciente = post[ID].paciente;
          const DataPropietario = post[ID].propietario;

          if (idPac == idPaciente) {
            nombreProp.value = DataPropietario.nombrePropietario.toUpperCase();
            direccion.value = DataPropietario.correoElectronico.toUpperCase();
            telefono.value = DataPropietario.telefono.toUpperCase();
            nombrePaciente.value = DataPaciente.nombrePaciente.toUpperCase();
            raza.value = DataPaciente.raza.toUpperCase();
            fechaNac.value = DataPaciente.fechaNacimiento.toUpperCase();
            edad.value = DataPaciente.edad.toUpperCase();
            peso.value = DataPaciente.peso.toUpperCase();
            imgPac.src = DataPaciente.foto;

            if (especie[0].value == DataPaciente.especie) {
              especie[0].checked = true;
            } else {
              especie[1].checked = true;
            }
            if (sexo[0].value == DataPaciente.sexo) {
              sexo[0].checked = true;
            } else {
              sexo[1].checked = true;
            }
            if (adopcion[0].value == DataPaciente.adopcion) {
              adopcion[0].checked = true;
            } else {
              adopcion[1].checked = true;
            }
            if (castracion[0].value == DataPaciente.castrado) {
              castracion[0].checked = true;
            } else {
              castracion[1].checked = true;
            }
            // break;
          }
          // }
        } catch (error) {
          console.warn(error);
        }
      };
      getDatos(idPaciente);
    }
  } catch (err) {
    msgBQ2.innerHTML = "<p>" + err + "</p>";
    anchor2.scrollIntoView({ behavior: "smooth" });

    // console.log(err);
  }
}

//funcion para escribir los resultados de la busqueda en la tabla
function escribirTabla(post, ID) {
  ID = ID - 1;
  const idPac = Number(post[ID].id);
  const DataPaciente = post[ID].paciente;
  const DataPropietario = post[ID].propietario;
  //lenar tabla con datos del json
  // defino que tabla usar
  tabla = document.getElementById("tablaBusquedaResp");
  // creo una nueva fila para agregar valores en cada columna
  var tr = document.createElement("tr");
  // la primer columna es un boton, asi que creo el codigo HTML del boton y luego le reemplazo el value por el ID del paciente para luego poder seleccionarlo
  var columna0 = document.createElement("td");
  let dataBoton =
    '<input class="input-radio" name="radiobutton" type="radio" value="valorID">';
  let dataBotonMod = dataBoton.replace("valorID", idPac);
  columna0.innerHTML = dataBotonMod;
  // completo el resto de los valores de las columnas
  var columna1 = document.createElement("td");
  columna1.innerHTML = idPac;
  var columna2 = document.createElement("td");
  columna2.innerHTML = DataPaciente.nombrePaciente.toUpperCase();
  var columna3 = document.createElement("td");
  columna3.innerHTML = DataPaciente.raza.toUpperCase();
  var columna4 = document.createElement("td");
  columna4.innerHTML = DataPropietario.nombrePropietario.toUpperCase();
  var columna5 = document.createElement("td");
  columna5.innerHTML = DataPaciente.edad.toUpperCase();
  var columna6 = document.createElement("td");
  columna6.innerHTML = DataPaciente.fechaIngreso.toUpperCase();
  // agrego al objeto la fila completa para que se escriba en el tbody
  tabla.appendChild(tr);
  tr.appendChild(columna0);
  tr.appendChild(columna1);
  tr.appendChild(columna2);
  tr.appendChild(columna3);
  tr.appendChild(columna4);
  tr.appendChild(columna5);
  tr.appendChild(columna6);
}
