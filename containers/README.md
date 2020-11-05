# Hello again!

## ¿QUÉ ES CONTAINER?
Los containers son layouts compuestos por uno o más componente tanto internos como externos (Components --> leer README.md de Components). Sus nombres corresponden a los que se verá en la page correspondiente. Ejemplo: LayoutLogin se importa en login.js. 
Los cambios que se realicen solo afectará a la página donde se hicieron los cambios. 

## CONTAINERS DE LA WIKI

**Layout:** se llama en **todas** las páginas menos en 'login.js' y 'registrarse.js'. 
**LayoutLogin:** se usa **sólo** en 'login.js' y 'registrarse.js'. 
**Login:** Desarrollo y estilos de la page Login.
**Registrarse:** Desarrollo y estilos de la page Registrarse.
**Home:** Desarrollo y estilos de la Home.
**Personajes:** Recibe la informacion desde personajes del universo y crea la estructura de la pagina con la informacion correspondiente.
**PersonajesUniverso:** se crea una grilla con todos los personajes del universo, los cuales se obtienen de la base de datos y mediante map se crea una lista de personajes. Cada articulo de la lista envia la informacion de este a personajes para crear la pagina.
**Planetas:** Desarrollo y estilos de la page Planetas.
**TecnologiasUniverso:** se crea una grilla con todos las tecnologias del universo, los cuales se obtienen de la base de datos y mediante map se crea una lista de tecnologias. Cada articulo de la lista envia la informacion de este a tecnologias para crear la pagina.
**Tecnologias:**  Recibe la informacion desde tecnologias del universo y crea la estructura de la pagina con la informacion correspondiente.
**Historias:**  Recibe la informacion desde historias del universo y crea la estructura de la pagina con la informacion correspondiente.
**HistoriasUniverso:** se crea una grilla con todos las historias del universo, los cuales se obtienen de la base de datos y mediante map se crea una lista de historias. Cada articulo de la lista envia la informacion de este a historias para crear la pagina.
**CrearPersonaje:** Desarrollo y estilos de la page 'crearPersonaje.js'.
**Perfil:** Desarrollo y estilos de la page 'perfil.js'. 
**Reglas:** En desarrollo, aca estaran las reglas del universo.

  
**index.js: En este archivo, siempre se deben exportar los containers creados.** 
