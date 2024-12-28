
const getAgePlugin = require('get-age');

export const getAge = (birthdate:string) =>{
    if(!birthdate) return new Error('No se ha proporcionado una fecha de nacimiento');
    return getAgePlugin(birthdate);
}
