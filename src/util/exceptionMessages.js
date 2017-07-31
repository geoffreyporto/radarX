const ExceptionMessages = {
  TOO_MANY_QUADRANTS: 'Hay más de 4 nombres de cuadrantes en la lista de sus datos. Compruebe si hay errores en la columna del cuadrante.',
  TOO_MANY_RINGS: 'Más de 4 anillos',
  MISSING_HEADERS: 'Falta un o más encabezados requeridos o se escriben mal. ' +
  'Compruebe que el documento contenga los encabezados: "name", "ring", "quadrant", "isNew", "description".',
  MISSING_CONTENT: 'Falta el contenido del documento.',
  LESS_THAN_FOUR_QUADRANTS : 'Hay menos de 4 nombres de cuadrantes en la lista de sus datos',
  SHEET_NOT_FOUND: '¡Oops! No podemos encontrar la Hoja de Google que has ingresado. ¿Puedes revisar la URL?'
};

module.exports = ExceptionMessages;
