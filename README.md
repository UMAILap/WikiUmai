# WikiUmai
Wiki para el universo narrativo de la carrera de Multimedia de la Universidad Maimonides.
Para comprender como se utiliza cada parte del proyecto se creo un archivo readme dentro de cada carpeta contenedora donde se explcia sus caracteristicas.

## ESTRUCTURA DEL PROYECTO
Pages (README.md de Pages):
Cada archivo de pages es la referencia a una página específica. Estas están formadas en principio por el contenedor de toda la página, el cual es el componente <Layout>, dentro de este se coloca el container que se desea crear. Por ejemplo: <Login />.
Algunas páginas como personajes tienen la función de crear y editar, por eso se crean distintas carpetas, donde en  crear se utiliza la misma estructura ya explicada anteriormente, pero en la carpeta editar funciona de la siguiente manera:
**

Containers (README.md de Containers): 
En estos archivos se crean los containers que luego se utilizaran en pages. Estos son la estructura completa de cada página, sin la sección layout, ya que esta esta por fuera de la página. Para crear containers, dentro de la carpeta containers, se crea una carpeta con el nombre del nuevo container. Dentro de esta carpeta se crean dos archivos: index.js y styles.js, el primero lleva todo el contenido html y el segundo el contenido css. Dentro de esta se puede tanto crear styled components, dentro del archivo css; como importar componentes completos, por ejemplo el componente títulos, el cual crea un objeto h1 con los estilos determinados dentro del componente, así evitamos crear el mismo archivo y repetir el mismo código cada vez que utilizamos un título.

Componentes (README.md de Components):
 Acá se encuentran los distintos elementos que se utilizarán a lo largo del desarrollo, aquellos que sean constantes dentro de este. Para crear componentes, dentro de la carpeta componentes, se crea una carpeta con el nombre del nuevo componente. Dentro de esta carpeta se crean dos archivos: index.js y styles.js, el primero lleva todo el contenido html y el segundo el contenido css.
finalmente se deben exportar en el archivo index.js de la carpeta componentes, para luego poder importarlos desde la página que se desee, llamadas containers.


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

