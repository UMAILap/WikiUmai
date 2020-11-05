# WikiUmai
Wiki para el universo narrativo de la carrera de Multimedia de la Universidad Maimonides.

## ¿QUÉ ES PAGES?
En pages se genera el archivo final, el cual contiene el contenedor  <Layout> y dentro de este se inserta el componente que se ha creado para esta pagina: un ejemplo puede ser:
<Layout>
      <HomeContainer />
</Layout>
donde se exporta el archivo que llamamos Home, este sera la direccion index del proyecto.
Las paginas de colecciones que se crean dinamicamente (tecnologías, personajes, historias), funcionan de la siguiente manera:
Se crea una carpeta contenedora, que contiene tanto el index (en estos casos serían tecnologías/personajes/historias del universo), como el [slug], que sería el single de cada colección, para que la url quede .../colección/[nombre artículo]. Además dentro de esta se crean dos carpetas:
Crear: en esta carpeta va un archivo index para crear un nuevo artículo para esta colección, así la ruta queda: .../colección/crear

editar: en esta carpeta va un archivo [slug] para editar al artículo de nombre [slug]. Así, la ruta queda: .../colección/editar/[nombre artículo]

En el caso de colecciones como planetas, que son fijas (no se crearan más planetas dentro del universo), dentro de la carpeta planeta solo hay un archivo [slug], para que la ruta del single de planeta quede: .../planeta/[nombre planeta]

Ademas todas estas paginas obtienen de utils la informacion de la base de datos para luego pasarsela al componente o container que le corresponda mediante props.