
const getAgePlugin = require('get-age');

export const getAge = (birthdate:string) =>{
    if(!birthdate) return new Error('No se ha proporcionado una fecha de nacimiento');
    //console.log({currentYear: new Date().getFullYear()});
    return getAgePlugin(birthdate);
    //return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
