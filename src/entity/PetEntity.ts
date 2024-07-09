import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import Especies from "../enum/EnumEspecie.js";

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

    constructor
        (
            nomeRecebido: string,
            especieRecebida: Especies,
            idadeRecebida: number,
            adotadoRecebido: boolean
        ) {
        this.nome = nomeRecebido;
        this.especie = especieRecebida;
        this.idade = idadeRecebida;
        this.adotado = adotadoRecebido;
    }
}

export default PetEntity;