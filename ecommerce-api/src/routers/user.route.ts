import express, { Request, Response } from "express";
export const userRoutes = express.Router();

type user = {
  id : number,
   nome : string,
    email : string
}

let id = 1;
let usuarios : user[] = [];


userRoutes.get('/', (req : Request, res : Response) => {
   res.send("Endpoind de usuários");
});

userRoutes.get('/users', (req : Request, res : Response) => {
  res.send(usuarios);
});

userRoutes.post('/users', (req: Request, res : Response) => {
  let user = req.body;
  user.id = id++;
  usuarios.push(user);
  res.send({
    message : 'Usuario criado com sucesso'
  })
}); 

userRoutes.get('/users/:id', (req : Request, res : Response ) =>{ 
  let userId = Number(req.params.id);
  let user = usuarios.findIndex(user => user.id === userId); 
  res.send(user);
});

userRoutes.put('/users/:id', (req : Request, res : Response ) =>{ 
 let userId = Number(req.params.id);
  let indice = usuarios.findIndex(user => user.id === userId);
  usuarios[indice].nome = req.body.nome; 
  usuarios[indice].email = req.body.email; 
  res.send('USUARIO ALTERADO COM SUCESSO');
});

userRoutes.delete('/user/:id', (req : Request, res : Response) => {
  let userId = Number(req.params.id);
  let indice = usuarios.findIndex(indice => indice.id === userId);
  usuarios.splice(indice,1);
  res.send('USUARIO DELETADO COM SUCESSO')
});

