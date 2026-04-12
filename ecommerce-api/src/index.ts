import express from "express";
import { initializeApp } from "firebase-admin/app";
import { routes } from "./routers/index";

initializeApp();
const app = express();

routes(app);

app.listen('3000', () => {
  console.log('servidor ativo na porta 3000');
});