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

    constructor(nome:string, especie:Especies, idade:number, adotado:boolean) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
        this.adotado = adotado;
    }
}

export default PetEntity;