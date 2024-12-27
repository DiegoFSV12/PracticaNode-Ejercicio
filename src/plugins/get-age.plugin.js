const getAgePlugin = require('get-age');

const getAge = (birthdate) =>{
    if(!birthdate) return new Error('No se ha proporcionado una fecha de nacimiento');
    return getAgePlugin(birthdate);
}

module.exports = {
    getAge
};