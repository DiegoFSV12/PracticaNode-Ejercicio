/*const emailTemplate = require('./js-foundation/01-template');
require('./js-foundation/02-destructuring');
console.log(emailTemplate.emailTemplate);*/
/*
const {getUserById} = require('./js-foundation/03-callbacks');
const id = 1;
getUserById(id, (error:string,user:string)=>{
    //Se recibe el error y el usuario
    if(error){
        throw new Error(error);
    }
    console.log(user);
});*/



/*
const { getId, getAge } = require('./plugins/index');
const {buildMakePerson} = require('./js-foundation/05-factory');

const obj = {
    name: 'John Doe',
    birthdate: '2004-11-16'
};

const makePerson = buildMakePerson({getId, getAge});

const john = makePerson(obj);
console.log(john);
*/


const {getPokemonById} = require('./js-foundation/06-promises');

getPokemonById(4)
.then((pokemon: Number|String) => console.log(pokemon))
.catch((error: Error) => console.log(error))
.finally(()=> console.log('Proceso terminado'));

/*import { buildLogger } from "./plugins/logger.plugin";
const logger = buildLogger('app.js');
logger.log('Hola mundo');
logger.error('Hola ERROR');*/
