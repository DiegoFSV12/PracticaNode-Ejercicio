export const datos = process.env;
console.log(datos);
export const {USERNAME,USERDOMAIN} = datos;
console.table({USERNAME,USERDOMAIN});