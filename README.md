Status del ultimo deploy del **main** en **Netlify** -->> [![Netlify Status](https://api.netlify.com/api/v1/badges/f4e2fd1e-f7e5-495f-bf54-18ea47aeca0a/deploy-status)](https://app.netlify.com/sites/vetapp-tpfinal22501/deploys)
<br>

<h4>Indice:</h4>
<br>
<h2>VetApp</h2>
- ver la pagina web online en: [VetApp](https://vetapp-tpfinal22501.netlify.app)
<h3>Gestion de pacientes, estudios sus dueños para clinicas veterinarias.</h3>
<p>Esta aplicacion web cuenta con la carga de datos de pacientes y sus dueños, a su vez indica los datos clinicos, consultas, vacunaciones, y mucho mas.
<p>Especialmente diseñado para un facil uso en veterinarias, con acceso mediante roles para la gestion de los medicos veterinarios y para un acceso de los dueños los cuales pueden ver los datos y la infomacion de sus mascotas para un correcto seguimiento</p>

Tareas realizadas y pendientes

- [x] ✔️ Frontend del Landing (terminado 🎉)
- [x] ✔️ Frontend de la web app (terminado por el momento, luego se agregaran funciones 🎉)
- [x] ✔️ Consumir APIs
- [x] ✔️ Utilizar un JSON con JS para hacer funcional la visualizacion de datos.
- [ ] ✖️ Backend en DB (en curso ⏲️)
- [ ] Mas puntos por agregar...

<h3>Funciones Principales</h3>
<p>Esta aplicacion web cuenta con la carga de datos de pacientes y sus dueños, a su vez indica los datos clinicos, consultas, vacunaciones, y mucho mas.
<p>Especialmente diseñado para un facil uso en veterinarias, con acceso mediante roles para la gestion de los medicos veterinarios y para un acceso de los dueños los cuales pueden ver los datos y la infomacion de sus mascotas para un correcto seguimiento</p>

<h3>Sobre el landing/home de VetApp (index.html):</h3>

<h3>Estructura general:</h3>

<p>El home o landing de VetApp es consiste en un sitio de 4 secciones navegables siguiendo el estilo slide (una página con 4 secciones ancladas).
La navegación puede realizarse haciendo click en enlaces que se encuentran en la parte superior de la página, con las teclas derecha o izquierda del teclado,
o deslizando en los mismos sentidos con un dispositivo touch screen.

Las 4 secciones son: Home, About, Login y Contacto.</p>

<h4>Home:</h4> 

<p>Consiste de imágenes representativas y texto que describe brevemente la aplicación y a quién va orientada.</p>

<h4>About:</h4>

<p>Incluye imágenes, descripción publicitaria del sitio e información, y fotografías y descripción de quienes desarrollaron el sitio.</p>

<h4>Login:</h4>

<p>Esta sección se desarrolla incluyendo un iframe en la cual se encuentra el formulario propiamente dicho **(login.html)**. 
El usuario y contraseña que permiten el acceso
correcto son admin y admin1 respectivamente. Dejar los campos vacíos o incluir información erronea (usuarios o contraseñas diferentes a los dados) genera el
despliegue de mensajes de validación con animación incluida. Los mismos hacen referencia a la procedencia del error (campos vacíos o información incorrecta).
Además, al tercer intento se despliega una opción de recuperación de credenciales, hasta el momento simbólica. Por último, se incluye una animación en el fondo del
botón que comanda el ingreso al sitio.</p>

<h4>Contacto:</h4>

<p>Esta sección incluye un formulario de contacto que presenta 3 campos obligatorios. Los mismos se encuentran oportunamente validados ante un nombre, correo o descripción
vacía o erronea. La validación incluye una animación similar a la utilizada en la instancia de login.
En esta sección se utiliza una API externa (https://formsubmit.co) que resuelve el envío de mails con información requerida y opcional de contacto tanto a casillas
de correo predeterminadas, como a la casilla que se coloca en el campo "Email".
Por último, cuando se envía el pedido de contacto, el usuario es redirigido a una página de espera (gracias.html), también resuelto mediante la API
anteriormente mencionada. Esta página incluye un agradecimiento a quien envía el formulario, quien será redirigido al home luego de 5 segundos o haciendo
click en un hipervínculo y/o la foto de "Thanks".</p>
