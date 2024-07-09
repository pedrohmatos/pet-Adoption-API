import TipoPet from "../../types/TipoPet.js";

interface InterfacePetRepository {
    cria(pet: TipoPet): Promise<void>;
    lista(): Promise<TipoPet[]>;
    atualiza(id: number, pet: TipoPet): Promise<TipoPet>;
    deleta(id: number): Promise<TipoPet>;
    encontra(id: number): Promise<TipoPet>;
}

export default InterfacePetRepository
