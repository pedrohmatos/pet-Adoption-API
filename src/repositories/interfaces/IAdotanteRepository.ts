import AdotanteEntity from "../../entity/AdotanteEntity.js";

interface IAdotanteRepository {
    cria(adotante: AdotanteEntity): Promise<void>;
    lista(): Promise<AdotanteEntity[]>;
    atualiza(id: number, mudancas: AdotanteEntity): Promise<AdotanteEntity>;
    deleta(id: number): Promise<void>;
    encontra(id: number): Promise<AdotanteEntity>;
}

export default IAdotanteRepository;