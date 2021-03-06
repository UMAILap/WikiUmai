const Color = require('color');

export const breakpoints = {
  mobile: '375px',
  mobileGrande: '468px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  notebook: '1920px',
};

// Funcion para leer el color, devuelve el valor del color en hsl para que sea constante en distintas pantallas.

export const leerColor = color => color.hsl().string();

/**
 *
 * Para definir un color utilizamos la librería colors. (Importada arriba). Esto nos permite tener colores exactos a traves de las distintas pantallas.
 * Además podemos hacer ajustes sobre la opacidad, brillo y otras variables del color.
 *
 *
 *
 * Documentación: https://github.com/Qix-/color#readme [IMPORTANTE LEER]
 *
 * Un color se crea de esta manera:
 *
 *  blanco: Color.rgb(255,255,255),
 *
 */
export const colores = {
  blanco: Color.rgb(255, 255, 255),
  naranja: Color.rgb(255, 189, 105),
  violeta: Color.rgb(77, 27, 132),
  violetaOscuro: Color.rgb(56, 20, 96),
  rosa: Color.rgb(254, 52, 110),
  gris: Color.rgb(236, 236, 236),
  negro: Color.rgb(0, 0, 0),
};

export const pxToRem = value => `${value / 16}rem`;
