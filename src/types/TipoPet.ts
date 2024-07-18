import AdotanteEntity from "../entity/AdotanteEntity.js";
import Especies from "../enum/EnumEspecie.js";

type TipoPet = {
    id: number;
    nome: string;
    especie: Especies;
    idade: number;
    adotado: boolean;
    adotante: AdotanteEntity;
};

export default TipoPet;