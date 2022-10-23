const mostrarDATA = document.querySelector(".mostrarDatos");
const mostrarbtnSeleccion = document.querySelector(".btnSeleccion");

// conexion al json de datos asincronico con esperas
const getBusqueda = async (strBuscar) => {
  try {
    // console.log("EJEMPLO ASYNC-AWAIT");
    const resPost = await fetch(
      "https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7"
    );
    const post = await resPost.json();

    // console.log(post[0]);

    // vacio la tabla antes de escribir nuevos valores de la respuesta de busqueda
    limpiarTabla();

    let ID = 0;
    for (ID; ID < 10; ID++) {
      // crear objetos con valores del json
      const idPac = post[ID].id;
      const DataPaciente = post[ID].paciente;
      const DataPropietario = post[ID].propietario;
      // const DataConsulta = post[ID].consulta;

      // console.log("ID: ", ID);
      // console.log("idPac: ", idPac);

      // console.log("DataPaciente: ", DataPaciente);
      // console.log("DataPropietario: ", DataPropietario);
      // console.log("DataConsulta: ", DataConsulta);

      // console.log(DataPaciente.nombrePaciente);
      //lenar tabla con datos del json

      // defino que tabla usar
      tabla = document.getElementById("tablaBusquedaResp");

      // creo una nueva fila para agregar valores en cada columna
      var tr = document.createElement("tr");

      // la primer columna es un boton, asi que creo el codigo HTML del boton y luego le reemplazo el value por el ID del paciente para luego poder seleccionarlo
      var columna1 = document.createElement("td");
      let dataBoton =
        '<input class="input-radio" name="radiobutton" type="radio" value="valorID">';
      let dataBotonMod = dataBoton.replace("valorID", idPac);
      columna1.innerHTML = dataBotonMod;

      // completo el resto de los valores de las columnas
      var columna2 = document.createElement("td");
      columna2.innerHTML = DataPaciente.nombrePaciente;
      var columna3 = document.createElement("td");
      columna3.innerHTML = DataPaciente.raza;
      var columna4 = document.createElement("td");
      columna4.innerHTML = DataPropietario.nombrePropietario;
      var columna5 = document.createElement("td");
      columna5.innerHTML = DataPaciente.edad;
      var columna6 = document.createElement("td");
      columna6.innerHTML = DataPaciente.fechaIngreso;

      // agrego al objeto la fila completa para que se escriba en el tbody
      tabla.appendChild(tr);
      tr.appendChild(columna1);
      tr.appendChild(columna2);
      tr.appendChild(columna3);
      tr.appendChild(columna4);
      tr.appendChild(columna5);
      tr.appendChild(columna6);
    }

    // muestro boton de seleccionar

    mostrarbtnSeleccion.classList.remove("btnSeleccion");
    mostrarbtnSeleccion.scrollIntoView({ behavior: "smooth" });

    // for (let dPac in DataPaciente) {
    //   console.log(dPac, DataPaciente[dPac]);

    //   if (dPac == "nombrePaciente") {
    //     var tr = document.createElement("td");
    //     var columna = document.createElement("td");
    //     columna.innerHTML = DataPaciente[dPac];
    //     tabla.appendChild(tr);
    //     tr.appendChild(columna);
    //   }

    // }
  } catch (error) {
    console.warn(error);
  }
};


function limpiarTabla() {
  tabla = document.getElementById("tablaBusquedaResp");
  tabla.innerHTML = "";
  ocultar();
}

function ocultar() {
  mostrarDATA.classList.add("mostrarDatos");
  mostrarbtnSeleccion.classList.add("btnSeleccion");
}

function mostrarInfo() {
  var rabtn = document.getElementsByName("radiobutton");
  var idPaciente;

  // recorro los botones para saber cual esta seleccionado y asi obtener los datos de esa consulta especifica
  for (let i in rabtn) {
    if (rabtn[i].checked == true) {
      idPaciente = rabtn[i].value;
    }
  }

  console.log("idPaciente::before ", idPaciente);
  
  if (idPaciente === undefined) {
    alert("debe seleccionar uno")
  } else {

  console.log("idPaciente::after ", idPaciente);

  mostrarDATA.classList.remove("mostrarDatos");
  mostrarDATA.scrollIntoView({ behavior: "smooth" });

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

  const getDatos = async (idPaciente) => {
    try {
      const resPost = await fetch(
        "https://mocki.io/v1/439bc4f0-84ce-4d5a-927a-9d2674575bc7"
      );
      const post = await resPost.json();
    
      var ID = 0;

      for (ID; ID < post.length; ID++) {
        const idPac = Number(post[ID].id);
        const DataPaciente = post[ID].paciente;
        const DataPropietario = post[ID].propietario;
        // const DataConsulta = post[ID].consulta;

        console.log("idPac", idPac);

        if (idPac == idPaciente) {
          console.log("NOMBRE", DataPaciente.nombrePaciente);
          nombreProp.value = DataPropietario.nombrePropietario;
          direccion.value = DataPropietario.correoElectronico;
          telefono.value = DataPropietario.telefono;
          nombrePaciente.value = DataPaciente.nombrePaciente;
          raza.value = DataPaciente.raza;
          fechaNac.value = DataPaciente.fechaNacimiento;
          edad.value = DataPaciente.edad;
          peso.value = DataPaciente.peso;
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
          break;
        }

      }
    } catch (error) {
      console.warn(error);
    }
  };
  getDatos(idPaciente);


  }
  
}





//////////////////////////////////////////////

