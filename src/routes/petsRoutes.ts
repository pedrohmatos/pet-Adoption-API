import express from "express";
import PetController from "../controllers/PetController.js";

const petsRoutes = express.Router();

petsRoutes.get("/", PetController.listaPet);
petsRoutes.get("/:id", PetController.encontraPetPorId);
petsRoutes.post("/", PetController.criaPet);
petsRoutes.put("/:id", PetController.atualizaPet);
petsRoutes.put("/:petId/:adotanteId", PetController.adotaPet);
petsRoutes.delete("/:id", PetController.deletarPet);

export default petsRoutes;