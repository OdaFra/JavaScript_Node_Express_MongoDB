const express = require('express');

const Services = require('./src/services');

const app = express();
const PORT = 3000;

app.use(express.json());

//GET ALL
app.get('/', (req, res) => {
    res.json(
        {
            message: 'Lista de usuarios',
            body: Services.getUsers()
        }
    )
});

//POST - CREATE
app.post('/', (req, res) => {
    let { body: newUser } = req;
    let user = Services.createUser(newUser);
    res.status(201).json({
        message: 'El usuario fue creado',
        body: user
    })
});

//GET - ID
app.get('/:id', (req, res) => {
    let { params: { id } } = req;
    let user = Services.getUser(id)
    // console.log(id);
    res.json(
        {
            message: `Usuario encontrado ${id}`,
            body: user
        }
    )
});

//PUT - ID

app.put("/:id", (req, res) => {
    let identificador = req.params.id;
    let { body: updateData } = req;
    let usuario =  Services.updateUser(identificador, updateData);
    res.json({
      message: `Usuario id ${identificador}, actualizado`,
      body: usuario,
    });
});

// DELETE -ID
app.delete("/:id", (req, res) => {
    let identificador = req.params.id;
    let usuarioEliminado = Services.deleteUser(identificador);
   
    res.json({
      message: `Usuario ${identificador}, eliminado`,
      body: usuarioEliminado,
});
});



app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
})