import express from "express";
import AdotanteController from "../controllers/AdotanteController.js";

const adotantesRoutes = express.Router();

adotantesRoutes.get("/", AdotanteController.listaAdotante);
adotantesRoutes.post("/", AdotanteController.criaAdotante);
adotantesRoutes.put("/:id", AdotanteController.atualizaAdotante);
adotantesRoutes.delete("/:id", AdotanteController.deletaAdotante);

export default adotantesRoutes;