const data = require('./MOCK_DATA.json');

const getUsers=()=>data

const getUser =(id)=>{
let identificador= Number(id);
let user =data.filter((person)=>person.id===identificador)[0];
return user;
}

const createUser = (dataUser)=>{
 let newUser ={
    id:data.length+1,
    ...dataUser,
 }
 data.push(newUser);
 return newUser;
}

const updateUser= (identificador, updateData) => {
    let id = Number(identificador);
    let usuarioBuscado = data.find((cliente) => {
      return cliente.id === id;
      
    });
    usuarioBuscado.first_name = updateData.first_name;
    usuarioBuscado.last_name = updateData.last_name;
    usuarioBuscado.email = updateData.email;
    return usuarioBuscado;
};


const deleteUser= (identificador) => {
    let id = Number(identificador);
    let usuarioEliminado = data.find((user)=> user.id==identificador)
    let posicion =  data.findIndex((usuario) => usuario.id === id);
    data.splice(posicion, 1);
    return usuarioEliminado
};
// const updateUser = (id, newUpdater) => {
//     let identificador = Number(id);
//     var usuarioActualizado = data.find((usuarioActualizado) => usuarioActualizado.id === identificador);
//     usuarioActualizado.first_name = newUpdater.first_name;
//     usuarioActualizado.last_name = newUpdater.last_name;
//     usuarioActualizado.email = newUpdater.email;
//     return newUpdater;
// }

// let validatos= (user) => {
//     const schema = joi.object({
//       first_name: joi.string().min(6).required(),
//       last_name: joi.string().min(6).required(),
//       email: joi.string().min(6).required().email(),
//     });
//     const validation = schema.validate(user);
//     return validation;
// };


module.exports={
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
};
