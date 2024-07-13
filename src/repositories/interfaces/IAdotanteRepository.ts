import TipoAdotante from "../../types/TipoAdotante.js";

interface IAdotanteRepository {
    cria(adotante: TipoAdotante): Promise<void>;
    lista(): Promise<TipoAdotante[]>;
    atualiza(id: number, mudancas: TipoAdotante): Promise<TipoAdotante>;
    deleta(id: number): Promise<void>;
}

export default IAdotanteRepository;