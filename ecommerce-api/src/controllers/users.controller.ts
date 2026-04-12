import { Request, Response } from "express";
import { getFirestore } from "firebase-admin/firestore";

type User = {
  id : number,
   nome : string,
    email : string
}

export class  UserController {
  static async getAll(req : Request, res : Response) {
    const snapshoot = await getFirestore().collection("users").get();
    const users = snapshoot.docs.map(doc => {
        return {
          id : doc.id,
          ...doc.data() 
        };
    });
    res.send(users);
  }

  static async getById(req : Request, res : Response){
     let userId = req.params.id as string;
      const doc = await getFirestore().collection("users").doc(userId).get();
      res.send({ id : doc.id, ...doc.data()});
  }

  static async save(req : Request, res : Response) {
      let user = req.body;
      const userSalvo = await getFirestore().collection("users").add(user);
      res.send({
        message : `Usuario ${userSalvo} criado com sucesso`
      });   
  }
  
  static async update(req : Request, res : Response) {
    let userId = req.params.id as string;
    let user = req.body as User;
    await getFirestore().collection("users").doc(userId).set(
      {
        nome : user.nome,
        email : user.email
      }
    )
      res.send('USUARIO ALTERADO COM SUCESSO');
  }

  static async delete(req : Request, res : Response) {
    let userId = req.params.id as string;
    await getFirestore().collection("users").doc(userId).delete()
    res.send('USUARIO DELETADO COM SUCESSO');
  }
}