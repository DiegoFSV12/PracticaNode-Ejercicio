Dependencias de node:
Nodemon: Recarga todo al hacer un cambio para no tener que cerrar y volver a iniciar el proyecto.
Axios: Similar a fetch, permite hacer consultas mediante solicitudes HTTP.


Pasos para usar Node con TypeScript con Nodemon
•	Instalar TypeScript y tipos de Node, como dependencia de desarrollo
o	npm i -D typescript @types/node
•	Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
o	npx tsc --init --outDir dist/ --rootDir src
•	Opcional - Para traspilar el código, se puede usar este comando
o	npx tsc --watch
•	Configurar Nodemon y Node-TS
o	npm install -D ts-node nodemon
•	Crear archivo de configuración de Nodemon - nodemon.json
{
"watch": ["src"],
"ext": ".ts,.js",
"ignore": [],
"exec": "npx ts-node ./src/app.ts"
}
•	Crear script para correr en desarrollo en el package.json
o	"dev": "nodemon"
o	"dev": "npx nodemon" // En caso de no querer instalar nodemon
•	Instalar rimraf (Herramienta que funciona similar al rm -f) eliminar directorio
o	npm install -D rimraf
•	Crear scripts en el package.json para construir e iniciar en producción
o	"build": "rimraf ./dist && tsc",
o	"start": "npm run build && node dist/app.js"

Testing usando Jest:
Pasos para configurar Jest con TypeScript, en Node
•	Instalaciones de desarrollo (super test es útil para probar Express)
o	npm install -D jest @types/jest ts-jest supertest
•	Crear archivo de configuración de Jest
o	npx jest --init
•	En el archivo jest.config.js configurar
o	preset: 'ts-jest',
o	testEnvironment: "jest-environment-node",
o	// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
o	// setupFiles: ['dotenv/config'],
•	Crear scripts en el package.json
o	"test": "jest",
o	"test:watch": "jest --watch",
o	"test:coverage": "jest --coverage",
