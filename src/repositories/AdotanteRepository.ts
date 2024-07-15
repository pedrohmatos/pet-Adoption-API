import { Repository } from "typeorm";
import TipoAdotante from "../types/TipoAdotante.js";
import IAdotanteRepository from "./interfaces/IAdotanteRepository.js";
import AdotanteEntity from "../entity/AdotanteEntity.js";

class AdotanteRepository implements IAdotanteRepository {
    private repository: Repository<AdotanteEntity>;

    constructor(receivedRepository: Repository<AdotanteEntity>) {
        this.repository = receivedRepository;
    }

    async cria(adotante: TipoAdotante): Promise<void> {
        await this.repository.save(adotante);
    }

    async lista(): Promise<TipoAdotante[]> {
        const listaDeAdotantes: TipoAdotante[] = await this.repository.find();
        return listaDeAdotantes;
    }

    async atualiza(receivedId: number, mudancas: TipoAdotante): Promise<TipoAdotante> {
        const adotanteIdentificado: TipoAdotante | null = await this.repository.findOne({
            where: {
                id: receivedId
            }
        });

        if (!adotanteIdentificado) {
            throw new Error().message = `Não foi encontrada nenhuma pessoa adotante com o id: ${receivedId}`;
        }

        Object.assign(adotanteIdentificado, mudancas);

        this.repository.save(adotanteIdentificado);

        return adotanteIdentificado;
    }

    async deleta(receivedId: number): Promise<void> {
        const adotanteIdentificado: TipoAdotante | null = await this.repository.findOne({
            where: {
                id: receivedId
            }
        });

        if (!adotanteIdentificado) {
            throw new Error().message = `Não foi encontrada nenhuma pessoa adotante com o id: ${receivedId}`;
        }

        await this.repository.remove(adotanteIdentificado);
    }
}

export default AdotanteRepository;
