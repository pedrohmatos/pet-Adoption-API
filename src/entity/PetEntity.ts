import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Especies from "../enum/EnumEspecie.js";
import AdotanteEntity from "./AdotanteEntity.js";

@Entity()
class PetEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome: string;

    @Column()
    especie: Especies;

    @Column()
    idade: number;

    @Column()
    adotado: boolean;

    @ManyToOne(() => AdotanteEntity, (adotante) => adotante.pets)
    adotante!: AdotanteEntity;

    constructor
        (
            nomeRecebido: string,
            especieRecebida: Especies,
            idadeRecebida: number,
            adotadoRecebido: boolean = false
        ) {
        this.nome = nomeRecebido;
        this.especie = especieRecebida;
        this.idade = idadeRecebida;
        this.adotado = adotadoRecebido;
    }
}

export default PetEntity;