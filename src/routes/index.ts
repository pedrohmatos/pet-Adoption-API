import express from "express"
import petsRoutes from "./petsRoutes.js";

const router = (app: express.Router) => {
    app.get("/", (req, res) => res.status(200).send("Bem vindo"));

    app.use("/pets", petsRoutes); // middleware
}

export default router;