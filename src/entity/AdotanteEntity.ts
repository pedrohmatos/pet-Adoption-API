import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import PetEntity from "./PetEntity.js";

@Entity()
class AdotanteEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome: string;

    @Column()
    celular: string;

    @Column({ nullable: true })
    endereco?: string;

    @OneToMany(() => PetEntity, (pet) => pet.adotante)
    pets!: PetEntity[];

    constructor(nomeRecebido: string, celularRecebido: string, enderecoRecebido?: string) {
        this.nome = nomeRecebido;
        this.celular = celularRecebido;
        this.endereco = enderecoRecebido;
    }
}

export default AdotanteEntity;
