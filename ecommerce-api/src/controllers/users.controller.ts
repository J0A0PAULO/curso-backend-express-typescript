import { Request, Response } from "express";

type user = {
  id : number,
   nome : string,
    email : string
}

let id = 1;
let usuarios : user[] = [];

export class UserController {
  static getAll(req : Request, res : Response) {
    res.send(usuarios);
  }

  static getById(req : Request, res : Response){
    let userId = Number(req.params.id);
      let user = usuarios.findIndex(user => user.id === userId); 
      res.send(user);
  }

  static save(req : Request, res : Response) {
      let user = req.body;
      user.id = id++;
      usuarios.push(user);
      res.send({
        message : 'Usuario criado com sucesso'
      });   
  }
  
  static update(req : Request, res : Response) {
    let userId = Number(req.params.id);
      let indice = usuarios.findIndex(user => user.id === userId);
      usuarios[indice].nome = req.body.nome; 
      usuarios[indice].email = req.body.email; 
      res.send('USUARIO ALTERADO COM SUCESSO');
  }

  static delete(req : Request, res : Response) {
    let userId = Number(req.params.id);
  let indice = usuarios.findIndex(indice => indice.id === userId);
  usuarios.splice(indice,1);
  res.send('USUARIO DELETADO COM SUCESSO');
  }

}