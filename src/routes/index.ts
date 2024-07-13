import express from "express"
import petsRoutes from "./petsRoutes.js";
import adotantesRoutes from "./adotantesRoutes.js";

const router = (app: express.Router) => {
    app.get("/", (req, res) => res.status(200).send("Bem vindo"));

    app.use("/pets", petsRoutes); // middleware
    app.use("/adotantes", adotantesRoutes); // middleware
}

export default router;