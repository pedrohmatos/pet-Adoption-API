import { Repository } from "typeorm";
import TipoPet from "../types/TipoPet.js";
import InterfacePetRepository from "./interfaces/InterfacePetRepository.js";
import PetEntity from "../entity/PetEntity.js";

class PetRepository implements InterfacePetRepository {
    private repository: Repository<PetEntity>;

    constructor(receivedRepository: Repository<PetEntity>) {
        this.repository = receivedRepository;
    }

    async cria(pet: TipoPet): Promise<void> {
        await this.repository.save(pet);
    }

    async lista(): Promise<TipoPet[]> {
        return await this.repository.find();
    }

    async atualiza(receivedId: number, receivedPet: TipoPet): Promise<TipoPet> {

        const petIdentificado: TipoPet | null = await this.repository.findOne({
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

    async deleta(receivedId: number): Promise<TipoPet> {

        const petIdentificado: TipoPet | null = await this.repository.findOne({
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
        const petIdentificado: TipoPet | null = await this.repository.findOne({
            where: {
                id: receivedId
            }
        });

        if (!petIdentificado) {
            throw new Error().message = `O pet com id: ${receivedId} não foi encontrado`;
        }

        return petIdentificado;
    }
}

export default PetRepository;
