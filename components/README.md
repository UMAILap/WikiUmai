# Hello developer!
Bienvenido al Universo Transmedia de la Universidad Maimónides.

## ESTRUCTURA DEL PROYECTO
Pages:
Cada archivo de pages es la referencia a una página específica. Estas están formadas en principio por el contenedor de toda la página, el cual es el componente <Layout>, dentro de este se coloca el container que se desea crear. Por ejemplo: <Login />.
Algunas páginas como personajes tienen la función de crear y editar, por eso se crean distintas carpetas, donde en  crear se utiliza la misma estructura ya explicada anteriormente, pero en la carpeta editar funciona de la siguiente manera:
**

Containers: En estos archivos se crean los containers que luego se utilizaran en pages. Estos son la estructura completa de cada página, sin la sección layout, ya que esta esta por fuera de la página. Para crear containers, dentro de la carpeta containers, se crea una carpeta con el nombre del nuevo container. Dentro de esta carpeta se crean dos archivos: index.js y styles.js, el primero lleva todo el contenido html y el segundo el contenido css. Dentro de esta se puede tanto crear styled components, dentro del archivo css; como importar componentes completos, por ejemplo el componente títulos, el cual crea un objeto h1 con los estilos determinados dentro del componente, así evitamos crear el mismo archivo y repetir el mismo código cada vez que utilizamos un título.

Componentes: acá se encuentran los distintos elementos que se utilizarán a lo largo del desarrollo, aquellos que sean constantes dentro de este. Para crear componentes, dentro de la carpeta componentes, se crea una carpeta con el nombre del nuevo componente. Dentro de esta carpeta se crean dos archivos: index.js y styles.js, el primero lleva todo el contenido html y el segundo el contenido css.
finalmente se deben exportar en el archivo index.js de la carpeta componentes, para luego poder importarlos desde la página que se desee, llamadas containers.


## ¿QUÉ ES COMPONENTS?
Los componentes son secciones reutilizables del sitio, es decir que pueden utilizarse en más de una página.
Simplemente llamandolo de esta forma: <Componente>'{children}'</Componente> 0 </Componente> en caso de ser único y sin tener {children} adentro.
Cualquier cambio que realices, va a afectar a todas las paginas que usen ese componente.
Recordá importarlo en la página que lo utilices.

## COMPONENTS DE LA WIKI

**Wrapper:** Se utiliza en *todas* las páginas. Tiene *breakpoints*.
**WrapperPersonajesPlanetas:** Se utiliza en *algunas* páginas. Tiene *breakpoints* más chicos que <Wrapper>.

**Footer:** Se utiliza en todas las páginas, ya que es un componente genérico.
**FooterLogin:** Se utiliza únicamente en las páginas de inicio de sesión y registro.
**Header:** Se utiliza en todas las páginas, ya que es un componente genérico.
**HeaderLogin:** Se utiliza únicamente en las páginas de inicio de sesión y registro.


**BannerTecnologiasHistorias:** Se utiliza para paginas de Tecnologías e Historias del universo. Contiene '{children}'
**ContainerBlanco:** Container fondo blanco que está en el LogIn y Registrarse.
**CardUniveso:** Se utiliza en las páginas que deseen tener una sección de "Relacionados". Es una vista previa de planetas, personajes, etc.
**HitosTimeLine:** Slider (Slick) de hitos. Está en 'Planetas', 'CrearPersonaje', 'CrearHistoria'.
**ListaPerfil:** Es la lista de contribuciones que hizo el usuario en la wiki. Recibe de Perfil un array con objetos que adentro guardan el tipo y título de cada contribución.
**MapaArticulos:** Nav de 'Tecnologías', 'Historias'.
**MiPerfil:** Son los datos de la cuenta, foto, nombre, usuario, mail y botones de acción para cambiarlos.
**PasosPersonaje**: Carpeta con subcarpetas de los distintos pasos de creación de personaje.
**PlanetasPills:** Listado de planetas con PROPS. Está en la página 'CrearPersonaje', 'Personajes del Universo', 'Historias del Universo', 'Tecnologías del
Universo'. Puede ser grid o flex. 
**PONER PROPS** los componentes que pasan el valor isFlex luego por estilos se les asigna ese valor, si no le llega el valor isFlex entonces por defecto quedara grid. esto se aplican en el componente especifico, por ejemplo en el container PersonajesUniverso se declara al principio   const isFlex = true;
y luego se le pasa isFlex={isFlex} al componente PlanetasPills.


**BotonVioleta:** Botón que se usa en el 90% de la plataforma. **PONER PROPS** el boton funciona exatamente como las pils y  recibe dos props dinstintas:
isColorPink es para los botones que llevan el relleno rosa.
isBotonRosa: es para los que llevar borde rosa pero no relleno.
se encuentra en el container personaje.
**SubtitulosVioleta:**
**Titulos:** Titulos violetas genéricos que se repiten en todas las páginas. funciona exatamente como las pils y  recibe las props isColorPink, la cual cambia el color del texto, se ve aplicado en el container personajes.
**paso 3 inputs** en este paso se utilizan las props, donde las guardamos en un array llamado valuas array, para los numeros e inputErrors para poder aplicar los estilos de los errores. luego usamos la extension lodash para manejar el borrado y la busqueda de elementos.

**index.js: En este archivo, siempre se deben exportar los componentes creados.**



## CONSTANTS
Global.styles exporta todas las tipografías utilizadas dentro del proyecto. Estas luego son utilizadas en el archivo styles de la siguiente manera:
Ej: font-family: ‘Raleway’;

Breakpoints: estas son las medidas que se utilizaran para crear el contenido responsive, ya han sido marcadas cada punto de cambio, desde pc hasta mobile. Se utilizan de la siguiente froma:
Ej: @media (min-width: ${breakpoints.mobile}) {
  }
dentro de las llaves se escribe el css que se desea cambiar.

Colores: se declaran los colores que se utilizan para los distintos objetos, estos se declaran mediante rgb, d ela siguiente manera:
  blanco: Color.rgb(255, 255, 255),
Luego se importa dentro del archivo styles en el que se usará y se implementa de la siguiente forma:
    color: ${leerColor(colores.blanco)};


