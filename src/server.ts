import express from "express";
import router from "./routes/index.js";

const app = express();

const PORTA = 3000;

app.listen(PORTA, () => {
    console.log(`Servidor executando em http://localhost:${PORTA}`);
});
app.use(express.json()); // middleware

router(app);

export default app;
