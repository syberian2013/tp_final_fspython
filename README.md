Status del ultimo deploy del **main** en **Netlify** -->> [![Netlify Status](https://api.netlify.com/api/v1/badges/f4e2fd1e-f7e5-495f-bf54-18ea47aeca0a/deploy-status)](https://app.netlify.com/sites/vetapp-tpfinal22501/deploys)
### Ver la pagina web online en (https://vetapp-tpfinal22501.netlify.app)
<br>

<h2>VetApp</h2>

Esta aplicacion web cuenta con la carga de datos ABM de pacientes y sus dueños, a su vez indica los datos clinicos, consultas, vacunaciones, y mucho mas.
Especialmente diseñado para un facil uso en veterinarias, con acceso mediante roles para la gestion de los medicos veterinarios y para un acceso de los dueños los cuales pueden ver los datos y la infomacion de sus mascotas para un correcto seguimiento.

### Se divide en 2 partes importantes:

Al llegar a la URL del sitio primero se accede al Home con las secciones de About, Login, Contacto, y es dentro de **LOGIN** donde luego se accede a la web app que contiene la aplicacion principal para el uso del veterinario.
***Mas abajo se detallan las credenciales para su acceso.***

## Landing y Home

<h3>Sobre el landing/home de VetApp (index.html):</h3>

<h4>Estructura general:</h4>

El home o landing de VetApp es consiste en un sitio de 4 secciones navegables siguiendo el estilo slide (una página con 4 secciones ancladas).
La navegación puede realizarse haciendo click en enlaces que se encuentran en la parte superior de la página, con las teclas derecha o izquierda del teclado,
o deslizando en los mismos sentidos con un dispositivo touch screen.

Las 4 secciones son: Home, About, Login y Contacto.

<h4>🏠 Home:</h4> 

Consiste de imágenes representativas y texto que describe brevemente la aplicación y a quién va orientada.

<h4> 🧔 About:</h4>

Incluye imágenes, descripción publicitaria del sitio e información, y fotografías y descripción de quienes desarrollaron el sitio.

<h4> 🧑‍💻 Login:</h4>

Esta sección se desarrolla incluyendo un iframe en la cual se encuentra el formulario propiamente dicho **login.html**. 
El **usuario y contraseña** que permiten el acceso correcto son ```admin``` y ```admin1``` respectivamente. 
Dejar los campos vacíos o incluir información erronea (usuarios o contraseñas diferentes a los dados) genera el despliegue de mensajes de validación con animación incluida. Los mismos hacen referencia a la procedencia del error (campos vacíos o información incorrecta).
Además, al tercer intento se despliega una opción de recuperación de credenciales, hasta el momento simbólica. Por último, se incluye una animación en el fondo del
botón que comanda el ingreso al sitio.

<h4> ℹ️ Contacto:</h4>

Esta sección incluye un formulario de contacto que presenta 3 campos obligatorios. Los mismos se encuentran oportunamente validados ante un nombre, correo o descripción
vacía o erronea. La validación incluye una animación similar a la utilizada en la instancia de login.
En esta sección se utiliza una API externa **https://formsubmit.co** que resuelve el envío de mails con información requerida y opcional de contacto tanto a casillas
de correo predeterminadas, como a la casilla que se coloca en el campo "Email".
Por último, cuando se envía el pedido de contacto, el usuario es redirigido a una página de capcha (para incrementar seguridad) y luego a una pagina de espera **gracias.html**, también resuelto mediante la API anteriormente mencionada. 
Esta página de agreadecimiento incluye un saludo a quien envía el formulario, que luego será redirigido al home tras de 5 segundos (por medio de un contador JS con redireccion) o haciendo un click en un hipervínculo o la foto de "Thanks".

## Aplicacion Web VetApp

<h3>Funciones Principales</h3>

Esta aplicacion web cuenta con la carga de datos de pacientes y sus dueños, a su vez indica los datos clinicos, consultas, vacunaciones, y mucho mas.
Especialmente diseñado para un facil uso en veterinarias, con acceso mediante roles para la gestion de los medicos veterinarios y para un acceso de los dueños los cuales pueden ver los datos y la infomacion de sus mascotas para un correcto seguimiento

<h4>Cuenta con varias secciones principales:</h4>

En la parte superior podemos apreciar los datos del usuario con el que ingresamos (Medico veterinario) junto con la fecha y hora actual que se actualiza constantemente por medio de un reloj realizado en JS.
Tambien vemos la barra lateral izquierda que encontramos un menu con varios accesos a las secciones disponibles el cual es desplegable y con una pantalla de menos de 550px se mueve a la parte superior.
El contenido se muestra dentro de un iframe que contiene los html con datos y formularios seleccionados.

<h4> 🔍 Busqueda:</h4>

Aqui se pueden realizar busquedas en la base de datos de los pacientes (actualmente se consume un JSON con una API), por varios tipos de parametros pre definidos. Se ingresa texto y selecion con el radiobutton correspondiente a la categoria, luego se da click en el boton de **BUSCAR**.
Si no se sabe que tipos de datos buscar, se creo un boton llamado **Carga max 10 consultas como referencia** que popula la tabla de datos con los primeros 10 datos de la DB. Seguido a esto, se puede elegir el paciente con el cual trabajar y al hacer click en el boton que aparece debajo **Seleccionar Paciente**
Aparecera una segunda tabla de datos con las consultas realizadas para ese paciente que se puede seleccionar tambien con un radiobutton, un click sobre **Ver Consulta** y finalmente se veran debajo una serie de campos con los valores obtenidos para esa consulta especifica.
La logica para consultas, visualizacion de datos, etc. se encuentra realizado enteramente con JS y el sonsumo de API de forma fetch asincrona con un JSON como DB.  

<h4> 🐶🐱 Pacientes:</h4>

Se encuentra diseñada similar a la busqueda de Consultas anterior, pero en este caso se pueden ver tablas con valores que contienen datos de la mascota como edad, fecha de nacimiento o de sus dueños como el contacto para su ubicacion. Ademas de una foto de la raza como referencia y fechas de ingreso al sistema o si se encuentra en adopcion.

<h4> 💉 Vacunas:</h4>

Aqui se podran ver los detalles de los tipos de vacunas diponibles y cruzar los datos con los pacientes. 

<h4> 🐛 Desparacitacion:</h4>

Similar al menu de vacunas, aqui se podran ver los detalles de desparacitacioes e incluso castraciones realizadas, tb cruzar los datos con los pacientes.

<h4> ↩️ Salir</h4>

Al hacer click aqui se podran ver dos botones **SALIR** y **VOLVER** donde el primero nos lleva fuera del sistema de la app y nos retorna a la HOME y el otro vuelve a cargar el primer menu. 


## Informacion importante:
Animaciones:
  - [x] Se utilizan tranciciones ```śmooth``` para los movimientos entre los slide del carousel (Landing, home, etc.) 
  - [x] Para el boton de login, se creo una animacion para dar un efecto de giro 180° al pasar por encima.
  - [x] En los mensajes de aviso como los del form contacto donde hay comprobaciones de datos, hay efectos de fade-in/fade-out en textos.
  - [x] Hay efectos de movimientos de los botones de seccion dentro de la app principal (despues del login) para indicar seleccion, desplazamientos de apertura y cierre del menu, e incluso cambio de menu a forma horizontal al achicar el alto de la pantalla del navegador.

Cortes Screen:
  - [x] Tanto para la Home como para la webApp hay cortes realizados con @media para distintos tamaños de ancho y alto de screen que modifican el contenido.

Se utilizan apis de:
  - [x] **https://fonts.google.com/icons?icon.style=Sharp** Para iconos en los botones y barra suṕerior, ademas de estilos de fuentes.
  - [x] **https://formsubmit.co** - Para crear el envio y respuesta del form de contacto sin tener un backend
  - [X] **https://mocki.io/** - Para almacenar una DB en formato JSON y consumirla con fetch async para pupular datos 

