import { Repository } from "typeorm";
import InterfacePetRepository from "./interfaces/InterfacePetRepository.js";
import PetEntity from "../entity/PetEntity.js";
import AdotanteRepository from "./AdotanteRepository.js";
import AppDataSource from "../config/fonteDados.js";
import AdotanteEntity from "../entity/AdotanteEntity.js";

const adotanteRepository = new AdotanteRepository(AppDataSource.getRepository(AdotanteEntity));

class PetRepository implements InterfacePetRepository {
    private repository: Repository<PetEntity>;

    constructor(receivedRepository: Repository<PetEntity>) {
        this.repository = receivedRepository;
    }

    async cria(pet: PetEntity): Promise<void> {
        await this.repository.save(pet);
    }

    async lista(): Promise<PetEntity[]> {
        return await this.repository.find();
    }

    async atualiza(receivedId: number, receivedPet: PetEntity): Promise<PetEntity> {

        const petIdentificado: PetEntity | null = await this.repository.findOne({
            where: {
                id: receivedId
            }
        });

        if (!petIdentificado) {
            throw new Error().message = `O pet com id: ${receivedId} não foi encontrado`;
        }

        this.repository.merge(petIdentificado, receivedPet); // or Object.assign(petId, rcvdPet);

        const novoPet = await this.repository.save(petIdentificado);
        return novoPet;
    }

    async deleta(receivedId: number): Promise<PetEntity> {

        const petIdentificado: PetEntity | null = await this.repository.findOne({
            where: {
                id: receivedId
            }
        });

        if (!petIdentificado) {
            throw new Error().message = `O pet com id: ${receivedId} não foi encontrado`;
        }

        await this.repository.remove(petIdentificado);

        return petIdentificado;
    }

    async encontra(receivedId: number) {
        const petIdentificado: PetEntity | null = await this.repository.findOne({
            where: {
                id: receivedId
            }
        });

        if (!petIdentificado) {
            throw new Error().message = `O pet com id: ${receivedId} não foi encontrado`;
        }

        return petIdentificado;
    }

    async adota(receivedPetId: number, receivedAdotanteId: number): Promise<PetEntity> {
        const petIdentificado: PetEntity | null = await this.repository.findOne({
            where: {
                id: receivedPetId
            }
        });

        if (!petIdentificado) {
            throw new Error().message = `O pet com id: ${receivedPetId} não foi encontrado`;
        }
        
        const adotanteIdentificado = await adotanteRepository.encontra(receivedAdotanteId);

        petIdentificado.adotante = adotanteIdentificado;
        petIdentificado.adotado = true;

        this.repository.save(petIdentificado);

        return petIdentificado;
    }
}

export default PetRepository;
