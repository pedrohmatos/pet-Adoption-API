import Especies from "../enum/EnumEspecie.js";

type TipoPet = {
    id: number,
    nome: string,
    especie: Especies,
    idade: number,
    adotado: boolean
};

export default TipoPet;