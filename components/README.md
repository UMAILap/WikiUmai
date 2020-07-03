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
**ListaPerfil:** INCOMPLETO **COMPLETAR**
**MapaArticulos:** Nav de 'Tecnologías', 'Historias'. 
**MiPerfil:** INCOMPLETO **COMPLETAR**
**PasosPersonaje**: Carpeta con subcarpetas de los distintos pasos de creación de personaje. 
**PlanetasPills:** Listado de planetas con PROPS. Está en la página 'CrearPersonaje', 'Personajes del Universo', 'Historias del Universo', 'Tecnologías del 
Universo'. Puede ser grid o flex. **PONER PROPS**


**BotonVioleta:** Botón que se usa en el 90% de la plataforma. PONER PROPS 
**SubtitulosVioleta:** 
**Titulos:** Titulos violetas genéricos que se repiten en todas las páginas. PONER PROPS 

**index.js: En este archivo, siempre se deben exportar los componentes creados.** 

