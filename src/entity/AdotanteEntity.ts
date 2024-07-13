import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import TipoAdotante from "../types/TipoAdotante.js";

@Entity()
class AdotanteEntity implements TipoAdotante {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nome: string;

    @Column()
    celular: string;

    @Column({ nullable: true })
    endereco?: string;

    constructor(nomeRecebido: string, celularRecebido: string, enderecoRecebido?: string) {
        this.nome = nomeRecebido;
        this.celular = celularRecebido;
        this.endereco = enderecoRecebido;
    }
}

export default AdotanteEntity;
