# WikiUmai
Wiki para el universo narrativo de la carrera de Multimedia de la Universidad Maimonides.



## CONSTANTS
Global.styles exporta todas las tipografías utilizadas dentro del proyecto. Estas luego son utilizadas en el archivo styles de la siguiente manera:
Ej:
```
font-family: ‘Raleway’;
```

Breakpoints: estas son las medidas que se utilizaran para crear el contenido responsive, ya han sido marcadas cada punto de cambio, desde pc hasta mobile. Se utilizan de la siguiente froma:
Ej: 
```
@media (min-width: ${breakpoints.mobile}) {
  }
```
dentro de las llaves se escribe el css que se desea cambiar.

Colores: se declaran los colores que se utilizan para los distintos objetos, estos se declaran mediante rgb, d ela siguiente manera:
  blanco: 
  ```
  Color.rgb(255, 255, 255),
  ```
Luego se importa dentro del archivo styles en el que se usará y se implementa de la siguiente forma:
    ```
    color: ${leerColor(colores.blanco)};
    ```
