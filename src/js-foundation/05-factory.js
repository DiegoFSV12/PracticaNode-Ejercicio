
const buildMakePerson = ({getId, getAge}) =>{//Una funcion flecha que retorna otra funcion flecha
    return ({name,birthdate}) =>{
        return{
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson
}