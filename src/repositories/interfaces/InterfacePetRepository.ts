import PetEntity from "../../entity/PetEntity.js";

interface InterfacePetRepository {
    cria(pet: PetEntity): Promise<void>;
    lista(): Promise<PetEntity[]>;
    atualiza(id: number, pet: PetEntity): Promise<PetEntity>;
    deleta(id: number): Promise<PetEntity>;
    encontra(id: number): Promise<PetEntity>;
    adota(petId:number, adotanteId:number): Promise<PetEntity>;
}

export default InterfacePetRepository
