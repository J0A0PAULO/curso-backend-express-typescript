import express from "express";
import { routes } from "./routers/index";
const app = express();


routes(app);

app.listen('3000', () => {
  console.log('servidor ativo na porta 3000');
});