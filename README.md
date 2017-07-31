[![Build Status](https://github.com/geoffreyporto/radarX.git)](https://github.com/geoffreyporto/radarX.git)

Esta herramienta de RadarX que genera un radar interactivo, fue inspirado en [thoughtworks.com](http://thoughtworks.com).

## Demo

Tu puedes ver una demo en https://radar.thoughtworks.com. If you plug in [this data](https://docs.google.com/spreadsheets/d/1KfCVUYXI3EnSNVveWI40B7-oOZJofeoh5PWzxRqDP1U/edit#gid=0) you'll see [this visualization](https://radar.thoughtworks.com/?sheetId=1YXkrgV7Y6zShiPeyw4Y5_19QOfu5I6CyH5sGnbkEyiI).

## Cómo usar esto

La forma más fácil de usar la aplicación fuera de la caja es proporcionar una ID de hoja de Google *pública* de la que se obtendrán todos los datos. Puede introducir ese ID en el campo de entrada en la primera página de la aplicación, y su radar se generará. Los datos deben ajustarse al formato siguiente para que el radar se genere correctamente.

### Configuración de sus datos

Tu necesitas hacer que sus datos públicos en una forma que podemos entender.

Crear una Hoja de Google. Déle por lo menos los encabezados de columna a continuación, y poner en el contenido que desea:

| name          | ring   | quadrant               | isNew | description                                             |
|---------------|--------|------------------------|-------|---------------------------------------------------------|
| Composer      | adoptar  | herramientas, librerias & APIS | TRUE  | Gestión de la dependencia de pqauqtes ...          |
| Canary builds | probar  | técnicas, buenas prácticas & estándares | FALSE | Muchos proyectos tienen dependencias de código externas ...       |
| Apache Kylin  | evaluar | plataformas & arquitecturas TI | TRUE  | Apache Kylin es una solución de analítica open source...   |
| JSF           | mirar   | lenguajes & frameworks | FALSE | Seguimos viendo que los equipos tienen problemas con JSF ... |

### Compartir la hoja

* En las hojas de Google, vaya a "Archivo", elija "Publicar en la web ..." y, a continuación, haga clic en "Publicar".
* Cierre el cuadro de diálogo "Publicar en la web".
* Copia la URL de tu hoja editable desde el navegador (No te preocupes, esto no comparte la versión editable).

La URL será similar a [https://docs.google.com/spreadsheets/d/1KfCVUYXI3EnSNVveWI40B7-oOZJofeoh5PWzxRqDP1U/edit#gid=0](https://docs.google.com/spreadsheets/d/1KfCVUYXI3EnSNVveWI40B7-oOZJofeoh5PWzxRqDP1U/edit#gid=0). En teoría sólo estamos interesados en la parte entre '/d /'y '/edit', pero puede usar toda la URL si lo desea.

### Construyendo el RadarX

Pegue la URL en el campo de entrada de la página de inicio.

¡Eso es!

Nota: los cuadrantes del radar y el orden de los anillos dentro del radar se presentará en el orden en que aparecen en su Hoja de Google.

### Uso más complejo

Para crear la representación de datos, puede utilizar Google Sheet [factory](/src/util/factory.js), o también puede insertar todos sus datos directamente en el código.

La app utiliza [Tabletop.js](https://github.com/jsoma/tabletop) Para obtener los datos de una Hoja de Google, por lo que consulte su documentación para obtener una interacción más avanzada. La entrada de la Hoja de Google se utiliza mediante la inclusión en blanco de etiquetas HTML con [sanitize-html](https://github.com/punkave/sanitize-html).

La aplicación utiliza [webpack](https://webpack.github.io/) Para empaquetar dependencias y minificar todos los archivos .js y .scss.

## Contribuya

Todas las tareas se definen en `package.json`.

Las peticiones de tracción son bienvenidas; Por favor escriba las pruebas siempre que sea posible.
Asegúrese de tener instalado nodejs.

- 'git clone https://github.com/geoffreyporto/radarX.git`
- `npm install`
- `npm test` - para ejecutar sus pruebas
- `npm run dev` - para ejecutar la aplicación en localhost:8080. Esto verá los archivos .js y .css y reconstruirá los cambios de archivo

### ¿No desea instalar el nodejs? Ejecuta con un simple comando de Docker

     $ docker run -p 8080:8080 -v $PWD:/app -w /app -it node:7.3.0 /bin/sh -c 'npm install && npm run dev'

Después de la construcción comenzará en localhost:8080
