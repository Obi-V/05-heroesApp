# Aplicación de CRUD de Héroes con Backend en db.json

¡Bienvenido a la aplicación de Lista de Héroes con Backend en db.json! Esta aplicación es un ejemplo de cómo utilizar un archivo `db.json` como backend para crear una página que muestra una lista de héroes.

## Características

- Utiliza el archivo `db.json` como base de datos para almacenar los datos de los héroes.
- Implementa una API REST simulada mediante el archivo `db.json` para acceder y manipular los datos.
- Muestra una lista de héroes en la página principal de la aplicación.
- Permite ver los detalles de cada héroe al hacer clic en su nombre.
- Utiliza Angular Material para estilos y componentes de interfaz de usuario.
- Implementa una lista de héroes con diseño y estilo utilizando los componentes de Angular Material.


## Angular Material

Angular Material es una biblioteca de componentes de interfaz de usuario (UI) para Angular. Proporciona una amplia gama de componentes predefinidos, estilos y directivas listas para usar que facilitan la creación de aplicaciones web modernas y atractivas.

Algunas características clave de Angular Material incluyen:

- **Componentes ricos**: Angular Material ofrece una amplia variedad de componentes reutilizables, como botones, tarjetas, barras de navegación, listas, diálogos y más. Estos componentes están diseñados siguiendo las directrices de Material Design, lo que proporciona una apariencia y una experiencia de usuario coherentes en toda la aplicación.

- **Diseño adaptable**: Los componentes de Angular Material se adaptan automáticamente a diferentes tamaños de pantalla y dispositivos, lo que garantiza una experiencia de usuario óptima en escritorios, tabletas y dispositivos móviles.

- **Personalización sencilla**: Angular Material permite personalizar fácilmente los estilos y temas de los componentes para adaptarse a las necesidades y la identidad visual de tu aplicación. Puedes cambiar colores, tipografías, efectos y más con solo unos pocos ajustes.

- **Accesibilidad**: Angular Material se preocupa por la accesibilidad y cumple con las pautas de WCAG 2.0 (Web Content Accessibility Guidelines). Los componentes están diseñados y desarrollados para ser accesibles para todos los usuarios, incluidos aquellos con discapacidades visuales o motoras.

- **Integración con Angular**: Angular Material se integra de manera fluida con el ecosistema de Angular. Puedes aprovechar las funcionalidades avanzadas de Angular, como el enlace de datos, las animaciones y las directivas estructurales, junto con los componentes de Angular Material.

La combinación de Angular y Angular Material proporciona una base sólida para desarrollar aplicaciones web modernas y de alto rendimiento con una experiencia de usuario excepcional.

Para obtener más información sobre Angular Material, consulta la [documentación oficial](https://material.angular.io/). La documentación proporciona detalles completos sobre los componentes, ejemplos de uso, guías de estilo y mucho más.

## db.json

`db.json` es un archivo utilizado comúnmente en aplicaciones para simular un backend o una base de datos. Aunque no es una base de datos real, es una forma conveniente de almacenar datos en formato JSON para prototipos o proyectos pequeños.

El archivo `db.json` actúa como un almacenamiento de datos donde puedes guardar y recuperar información como si estuvieras interactuando con una base de datos real. Por lo general, se utiliza en combinación con una API REST simulada para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en los datos.

La estructura de `db.json` es similar a un objeto JSON. Puedes definir diferentes colecciones o entidades, y cada una de ellas contendrá los registros o elementos correspondientes. Cada registro puede tener múltiples campos y valores asociados.

Una ventaja de utilizar `db.json` es que es fácil de manejar y no requiere una configuración compleja del servidor de base de datos. Puedes modificar directamente el archivo `db.json` para agregar, editar o eliminar datos según sea necesario.

Sin embargo, es importante tener en cuenta que `db.json` no es adecuado para entornos de producción o aplicaciones que manejan grandes volúmenes de datos. Para proyectos más grandes, se recomienda utilizar una base de datos real y un servidor backend adecuado.

En resumen, `db.json` es un archivo utilizado para simular un backend o una base de datos en aplicaciones. Proporciona una forma rápida y sencilla de almacenar y recuperar datos en formato JSON para prototipos o proyectos pequeños.


## Postman

Postman es una herramienta popular para probar y documentar APIs. Permite realizar solicitudes HTTP a una API y ver las respuestas correspondientes. Además, proporciona una interfaz intuitiva para crear, probar y automatizar casos de prueba.

- Sitio web: [Postman](https://www.postman.com/)
- Documentación: [Documentación de Postman](https://learning.postman.com/docs/)

## Insomnia

Insomnia es otra herramienta ampliamente utilizada para probar y depurar APIs. Al igual que Postman, permite enviar solicitudes HTTP y ver las respuestas correspondientes. Además, ofrece características como la posibilidad de organizar solicitudes en carpetas, trabajar con variables y entornos, y realizar pruebas de automatización.

- Sitio web: [Insomnia](https://insomnia.rest/)
- Documentación: [Documentación de Insomnia](https://support.insomnia.rest/)

Ambas herramientas son excelentes opciones para probar y depurar APIs. Puedes elegir la que mejor se adapte a tus necesidades y preferencias.




## Instalación

1. Clona el repositorio: `git clone https://github.com/Obi-V/04-pipesApp.git`
2. Navega hasta el directorio del proyecto: `cd 04-pipesApp.git`(Tu ruta)
3. Instala las dependencias: `npm install`
3. Levantar backend ```npm run backend``` (Nuestro backend está en './data/db.json' )
4. Inicia la aplicación: `ng serve` o `ng serve -o`(Se abre automáticamente)
5. Abre tu navegador y visita: `http://localhost:4200`
6. El backend se aloja en : `http://localhost:3000`

## Uso

Esta serie de aplicaciones son para experimentar el funcionamiento de Angular, pero recomiendo complementar con más información y videos que podreis encontrar gratis en Youtube.

La aplicación puede estar incompleta o tener errores, te insto a que experimentes, los arregles y mejores.

Una vez que la aplicación esté en funcionamiento, podrás ver la lista de héroes en la página principal. Cada héroe mostrará su nombre y una breve descripción. Si haces clic en el nombre de un héroe, podrás ver más detalles sobre él, como su poder y habilidades.

La información de los héroes se almacena en el archivo `db.json` y se accede mediante una API REST simulada. Esto te permite obtener y mostrar los datos de los héroes en la aplicación.

Si deseas añadir, editar o eliminar héroes, puedes modificar el archivo `db.json` directamente para simular cambios en el backend.

¡Explora la aplicación y disfruta de la lista de héroes generada a partir del backend en db.json!


### Texto creado con la ayuda chatGTP

