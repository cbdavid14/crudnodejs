# crudnodejs

Windows:
    Pasos CMD:
        Iniciar la instancia de mondodb
        - "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe" --dbpath="c:\data\db"

Se utilizaron los siguentes modulos:
 
   Framework Express:
   - npm install express

   Modulo mongoose--> conectar con mongodb y modelar los objetos e interactuar con la BD
  - npm install mongoose

  Motor de plantillas: ejs
  - npm install ejs

  Modulo de morgan --> para saber por consola que es lo que esta pasando 
  es un middleware que una funcion antes q lleguen a las routes.
  - npm install morgan

  Modulo nos ayuda a no tener q reinicar nuestro servidor.
  - npm i nodemon
  

Para iniciar la aplicación:
- npm install
- npm run dev
