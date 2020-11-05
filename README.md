# WikiUmai
Wiki para el universo narrativo de la carrera de Multimedia de la Universidad Maimonides.
Para comprender como se utiliza cada parte del proyecto se creo un archivo readme dentro de cada carpeta contenedora donde se explcia sus caracteristicas.

## ESTRUCTURA DEL PROYECTO
Pages (README.md de Pages):
Cada archivo de pages es la referencia a una página específica. Estas están formadas en principio por el contenedor de toda la página, el cual es el componente <Layout>, dentro de este se coloca el container que se desea crear. Por ejemplo: <Login />.
Algunas páginas como personajes tienen la función de crear y editar, por eso se crean distintas carpetas, donde en  crear se utiliza la misma estructura ya explicada anteriormente, pero en la carpeta editar funciona de la siguiente manera:
en esta carpeta va un archivo [slug] para editar al artículo de nombre [slug]. Así, la ruta queda: .../colección/editar/[nombre artículo], donde slug es el elemento a editar dentro del mundo, ya sea un personaje, una tecnologia, etc. Los unicos elementos del universo que no se editan son los planetas.

Containers (README.md de Containers): 
En estos archivos se crean los containers que luego se utilizaran en pages. Estos son la estructura completa de cada página, sin la sección layout, ya que esta esta por fuera de la página. Para crear containers, dentro de la carpeta containers, se crea una carpeta con el nombre del nuevo container. Dentro de esta carpeta se crean dos archivos: index.js y styles.js, el primero lleva todo el contenido html y el segundo el contenido css. Dentro de esta se puede tanto crear styled components, dentro del archivo css; como importar componentes completos, por ejemplo el componente títulos, el cual crea un objeto h1 con los estilos determinados dentro del componente, así evitamos crear el mismo archivo y repetir el mismo código cada vez que utilizamos un título.

Componentes (README.md de Components):
 Acá se encuentran los distintos elementos que se utilizarán a lo largo del desarrollo, aquellos que sean constantes dentro de este. Para crear componentes, dentro de la carpeta componentes, se crea una carpeta con el nombre del nuevo componente. Dentro de esta carpeta se crean dos archivos: index.js y styles.js, el primero lleva todo el contenido html y el segundo el contenido css.
finalmente se deben exportar en el archivo index.js de la carpeta componentes, para luego poder importarlos desde la página que se desee, llamadas containers.

Utils
En esta carpeta se realiza la coneccion con la base de datos para obtener la informacionque compone a la pagina. Esta informacion sera levantada por las pages que la necesiten y se enviara a los componentes o containers necesarios.


### Datos a tener en cuenta

#### Breakpoints

**mobile:** '375px'
**mobileGrande:** '468px'
**tablet:** '768px' 
**laptop:** '1024px' 
**laptopL:** '1440px'
**notebook:** '1920px'



## Containers

**ContainerBody** = contenedor del body que se utilizara en todas las paginas, situado en el layout. 
**Wrapper** = contenedor de **1440px** dentro del main, el cual esta dentro del body. Es un component, ya establecido. Usado en todas las páginas. 



## Tipografías y Tamaños 

**Títulos** = 35px 
**Tipografía** = Raleway bold, color #381460 
**Textos** = 17px 
**Tipografía** = Proxima Nova, color #381460 



# Props

La informacion circula entre los distintos componentes de las paginas, en principio, la informacion obtenida de la base de datos se obtiene en la seccion pages. Esta informacino se envia como props al componente o container necesario. Por ejemplo, la page tecnologias, envia la prop data(es la coleccion de objetos de la base) al container TecnologiasUniversoContainer. En este container se mapea esta informacion segun la cantidad de objetos que haya en la base de datos. La informacion que se obtiene se utiliza para crear los componentes que se desean mostrar dinamicamente.
Por otro lado se utiliza para modificar los estilos de algunos componentes, por ejemplo el footer. ya que este en algunas paginas tiene un color y en otras paginas otro. Por lo tanto se le pasa una prop al componente, para luego usarla de referencia en los estilos del mismo.

**Detalles de props**




## containers
**HistoriasContainer**
recibe data, la informacion de cada historia para crear los articulos.

**HistoriasUniversoContainer**
recibe data. Son las distintas historias con toda su informacion.

**Home**
recibe data, que son las ultimas historias actualizadas, para crear la grilla de este sector.
recibe la informacion de planetas para crear el slider de estos mismos.

**Layout**
recibe children, el cual seran las distintas paginas, por ejemplo home, personaje,etc.

**LayoutLogin**
recibe children, el cual sera la pagina de login.

**Perfil**
recibe el nombre del usuario para colocar el titulo

**Personajes, index**
recibe la informacion de los personajes, a traves d ela variable data. Con esa informacion se crean las distintas cards.

**PersonajesUniversoContainer**
recibe las cards para crear la grilla de personajes.

**Planetas**
recibe la informacion de cada planeta para crear las cards. Dentro de esta estan los personajes, historias, tecnologias.

**Tecnologias, index**
recibe la informacion de las tecnologias para crear las cards.

**TecnologiasUniverso**
recibe las cards de tecnologia para crear la grilla.

**Footer**
el footer tiene como prop "isHome", el cual se usa para cambiar el color del footer.

## componentes

**Banner tecnologias**
recibe dos props:
type: segun el type sea personaje o historoas cambia la imagen de fondo.
children: recibe el contenido segun que sea children.

**Boton violeta**
este componente recibe:
onClick: la funcion que realiza al ser apretado
isColorPink: cambia el color del boton a rosa.
isBotonRosa: activa la clase isBotonRosa, para usar el mismo boton con el estilo rosa.
children: el contenido.
href: el link de donde re dirige

**CardUniverso**
onClick: la funcion que realiza al ser apretado
children: el contenido.
href: el link de donde re dirige

**ContainerBlanco**
recibe children, el contenido de los formularios del login y registro

**Footer**
recibe href, el link de donde re dirige.


**IconosPersonajes**
recibe el nombre, avatar y slug del personaje para cargar esa informacion dinamicamente.

**ListaPerfil**
recibe de contribuciones la historia, con el nombre la foto para mostrar las historias de cada usuario en la pagina perfil

**MapaArticulos**
recibe los articulos y se crea una lista de estas. por ejemplo las tecnologias

**Markdown**
recibe la informacion del personaje para crear la descripcion del mismo.

**MiPerfil**
recibe la informacion del usuario desde pages. recibe nombre, email y username.

**PasosHistoria, PasoDos**
recibe colorfondo pero no se utiliza.

**PasosHistoria, PasoTres**
recibe colorfondo pero no se utiliza.

**PasosHistoria, PasoFinal**
recibe colorfondo pero no se utiliza.

**PlanetasPills**
este componente recibe:
isFlex: en la pagina ** funciona en dos lineas de 3 objetos, mientras que en los contenedores historiasuniverso y tecnologias funciona en una sola linea con los 6 planetas.

**SubtitulosVioleta**
recibe el contenido del componente en children.

**Titulos**
style: 
level:*
className:*
id:*
isColorPink: estilos color rosa.
children: contendio del elemento.

**Wrapper**
recibe el contenido de la pagina en children.
direction: recibe el valor de flex-direction. por ejemplo en home se le pasa el valor row.

**WrapperPersonajesPlanetas**
recibe el contenido de la pagina en children.

## Context

**Auth**
maneja la informacion del login y logout.

## Pages
**api, planetas**
guarda en data la informacion de la base de datos referida a los planetas.

**Historias, editar**
recibe slug, el identificador de la historia a editar.

**Historias, [slug]**
toma la informacion de la base de datos y guarda la  de las historias y se la envia a historias container.

**Personajes, editar**
recibe slug, el identificador del personaje a editar.

**Personajes, [slug]**
toma la informacion de la base de datos y guarda la  de los personajes y se la envia a historias container.


**Tecnologias, editar**
recibe slug, el identificador de la tecnolgia a editar.

**Tecnologias, [slug]**
toma la informacion de la base de datos y guarda la  de las tecnolgias y se la envia a TecnologiasContainer.

**_app**

**index**
toma la informacion de la base de datos y envia la informacion de los planetas para el slider y la de las ultimass entradas.
