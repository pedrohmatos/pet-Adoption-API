import { Request, Response } from "express";
import TipoPet from "../types/TipoPet.js";
import Especies from "../enum/EnumEspecie.js";
import PetRepository from "../repositories/PetRepository.js";
import AppDataSource from "../config/fonteDados.js";
import PetEntity from "../entity/PetEntity.js";

const petRepository = new PetRepository(AppDataSource.getRepository(PetEntity));

class PetController {

    static async criaPet(req: Request, res: Response) {
        const { nome, idade, especie, adotado } = <TipoPet>req.body;

        if (!Object.values(Especies).includes(especie)) {
            return res.status(404).json({ erro: "Especie inválida" });
        }

        const novoPet = new PetEntity(nome, especie, idade, adotado);

        await petRepository.cria(novoPet);

        return res.status(201).json(novoPet);
    }

    static async listaPet(req: Request, res: Response) {
        const listaDePets = await petRepository.lista();
        return res.status(200).json(listaDePets);
    }

    static async atualizaPet(req: Request, res: Response) {
        const numIdentificador: number = Number(req.params.id);

        const mudancasNoPet: TipoPet = req.body;

        try {
            const novoPet: TipoPet = await petRepository.atualiza(numIdentificador, mudancasNoPet);
            return res.status(200).json({ mensagem: `Atualizado com sucesso`, pet: novoPet });
        } catch (erro) {
            return res.status(400).json({ mensagem: erro });
        }
    }

    static async deletarPet(req: Request, res: Response) {
        const numIdentificador: number = Number(req.params.id);

        try {
            const petRemovido: TipoPet = await petRepository.deleta(numIdentificador);
            res.status(200).json({ mensagem: `Pet removido com sucesso`, pet: petRemovido });
        } catch (erro) {
            res.status(400).json({ mensagem: erro });
        }
    }

    static async encontraPetPorId(req: Request, res: Response) {
        const numIdentificador: number = Number(req.params.id);

        try {
            const petIdentificado = await petRepository.encontra(numIdentificador);
            res.status(200).json({ mensagem: "Pet encontrado com sucesso", pet: petIdentificado });
        } catch (erro) {
            res.status(400).json({ mensagem: erro });
        }
    }
}

export default PetController;
