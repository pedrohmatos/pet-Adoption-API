import express from "express";
import router from "./routes/index.js";
import "reflect-metadata";
import AppDataSource from "./config/fonteDados.js";

const app = express();

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor executando em http://localhost:${PORTA}`);
});
app.use(express.json()); // middleware

AppDataSource.initialize()
    .then(() => console.log("Banco de dados conectado"))
    .catch((erro) => console.log(erro));
    
router(app);

export default app;
