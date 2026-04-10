import express, { Request, Response } from "express";
import { UserController } from "../controllers/users.controller";
export const userRoutes = express.Router();

userRoutes.get('/', (req : Request, res : Response) => {
   res.send("Endpoind de usuários");
});

userRoutes.get('/users', (UserController.getAll));
userRoutes.get('/users/:id', (UserController.getById));
userRoutes.post('/users', (UserController.save)); 
userRoutes.put('/users/:id', (UserController.update));
userRoutes.delete('/user/:id', (UserController.delete));

