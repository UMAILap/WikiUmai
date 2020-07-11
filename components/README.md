# Hello developer!
Bienvenido al Universo Transmedia de la Universidad Maimónides.

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

