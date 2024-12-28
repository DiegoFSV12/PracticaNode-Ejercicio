interface BuildMakePersonOptions {
    getId: () => string;
    getAge: (birthdate: string) => number;
}
interface PersonOptions {
    name: string;
    birthdate: string;
}
export const buildMakePerson = ({getId, getAge}:BuildMakePersonOptions) =>{//Una funcion flecha que retorna otra funcion flecha
    return ({name,birthdate}:PersonOptions) =>{
        return{
            id: getId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}