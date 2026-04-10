import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

let id = 1;
let usuarios : {id : number, nome : string, email : string}[] = [];

app.get('/', (req : Request, res : Response) => {
   res.send("Endpoind de usuários");
});

app.get('/users', (req : Request, res : Response) => {
  res.send(usuarios);
});

app.post('/users', (req: Request, res : Response) => {
  let user = req.body;
  user.id = id++;
  usuarios.push(user);
  res.send({
    message : 'Usuario criado com sucesso'
  })
}); 

app.get('/users/:id', (req : Request, res : Response ) =>{ 
  let userId = Number(req.params.id);
  let user = usuarios.findIndex(user => user.id === userId); 
  res.send(user);
});

app.put('/users/:id', (req : Request, res : Response ) =>{ 
 let userId = Number(req.params.id);
  let indice = usuarios.findIndex(user => user.id === userId);
  if(indice === -1) return res.send('usario nao encontrado');
  usuarios[indice].email = req.body.nome; 
  usuarios[indice].email = req.body.email; 
  res.send('USUARIO ALTERADO COM SUCESSO');
});

app.delete('/user/:id', (req : Request, res : Response) => {
  let userId = Number(req.params.id);
  let indice = usuarios.findIndex(indice => indice.id === userId);
  if(indice === -1) return res.send('usario nao encontrado');
  usuarios.splice(indice,1);
  res.send('USUARIO DELETADO COM SUCESSO')
});

app.listen('3000', () => {
  console.log('servidor ativo na porta 3000');
});