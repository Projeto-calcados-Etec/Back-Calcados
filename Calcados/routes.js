import express from "express";
import { clientController } from "./src/Controllers/clientController.js";

const routes = express.Router();

routes.get("/", clientController.listarTodos);

export {routes}