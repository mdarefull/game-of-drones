# game-of-drones

**Tecnologías utilizadas:**
1- ASP.NET Core MVC v1.1
2- .NET Standard v1.6
3- Entity Framework Core v1.1
4- SQL Server 2017, local db feature.
5- Angular 4
6- Boostrap 4
7- jQuery, Datatables


**Requerimientos:**

Dependiendo de la versión de la publicación a ejecutar, varían los requerimientos.
La versión recomendada, es un bundle en el que traté de incorporar ambos, la aplicación angular para ser servida desde la aplicación .NET Core corriendo justo a Kestrel.
El único requisito que tiene esta publicación son los mismos que los de una instalación .NET Core (VC redistributable).
La publicación fue hecha específicamente para win10 x64.

Si se requiere ejecutar la versión en desarrollo del backend, se deben tener instalados los requisitos para el desarrollo en .NET Core (.NET Core 1.1, Visual Studio 2017, etc.)

Si se requiere ejecutar la versión dev de la aplicación angular, se deben tener instalado los requisitos para el desarrollo en Angular 4. (Typescript, npm, nodeJs, angular-cli, etc.)

Para facilidad de ejecución, la aplicación intentará crear la BD si esta no existiera (mediante migrations), por lo que no debería haber ninguna dependencia estricta con la versión de SQL Server. No obstante, por si esto no fuera posible, también incluyo un backup de una BD para ser restaurada.


**Pasos para ejecutar la aplicación (version bundle):**
1- Clonar el repositorio utilizando el comando: `git clone https://github.com/mdarefull/game-of-drones.git` en el lugar donde se desee clonar.
2- Moverse a la carpeta ~/Published/!app_bundled.
3- Dicha carpeta contiene 4 archivos de interés:
* "GameOfDrones.Presentation.MvcCore.exe": Ejecutable de la aplicación.
* "appsettings.json": Configuraciones de la aplicación, modificar aquí el Servidor y el nombre de la BD SQL si no se tuviera acceso a los datos por defecto: Server=(localdb)\\MSSQLLocalDB
* "hosting.json": Configuración de hosteo de la aplicación, modificar si se desea incluir un puerto diferente.
* "~\wwwroot\main.bundle.js": Dicho archivo contiene un bundle de todo el código de angular, en el caso de que se cambie el puerto por defecto del servidor (hosting.json), se debe especific aquí en el fragmento de código que dice:
this.PORT = '7683';
4- Ejecutar el archivo "GameOfDrones.Presentation.MvcCore.exe"
5- Asegurarse de permitir en el firewall el funcionamiento de la aplicación.
6- Acceder al url de escucha, por defecto: "http://localhost:7683/"
7- Listo.
