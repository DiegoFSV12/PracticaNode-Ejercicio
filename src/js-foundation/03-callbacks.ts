interface user {
    id: number,
    name: string
}

const users:user[] = [{
    id:1,
    name:'John Doe'
},{
    id:2,
    name:'Jane Doe'
}];

export function getUserById(id:number, callback:(error?:string, user?:user)=>void){
    const user = users.find((user)=>{
        return user.id===id;//Retorno el usuario si el id del usuario es igual al id que recibo por parametro
    });
    //Si no se encuentra el usuario, retorno un error
    if(!user){
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined,user);
}
