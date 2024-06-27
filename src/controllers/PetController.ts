import { Request, Response } from "express";
import TipoPet from "../types/TipoPet.js";
import Especies from "../enum/EnumEspecie.js";
import geradorDeId from "../util/geraId.js";

let listaDePets: TipoPet[] = [];

class PetController {

    static listaPet(req: Request, res: Response) {
        res.status(200).json(listaDePets);
    }

    static encontraPetPorId(req: Request, res: Response) {
        const identificador: string = req.params.id;

        const petIdentificado: TipoPet | undefined = listaDePets.find((el) => el.id === Number(identificador));

        if (petIdentificado === undefined) {
            res.status(404).json({ mensagem: "Pet não encontrado", pet: petIdentificado });
        }

        return res.status(200).json({ mensagem: "Pet encontrado com sucesso", pet: petIdentificado });
    }

    static criaPet(req: Request, res: Response) {
        const { id, nome, idade, especie, adotado } = <TipoPet>req.body;

        if (!Object.values(Especies).includes(especie)) {
            return res.status(404).json({ erro: "Especie inválida" });
        }

        const novoPet = {
            id: geradorDeId(listaDePets),
            nome,
            idade,
            especie,
            adotado
        };

        listaDePets.push(novoPet);

        return res.status(201).json(novoPet);
    }

    static atualizaPet(req: Request, res: Response) {
        const identificador: string = req.params.id;
        const { id, nome, idade, especie, adotado } = <TipoPet>req.body;

        const petIdentificado: TipoPet | undefined = listaDePets.find((el) => el.id === Number(identificador));

        if (petIdentificado === undefined) {
            return res.status(404).json({ mensagem: "Pet não encontrado", pet: petIdentificado });
        }

        petIdentificado.nome = nome;
        petIdentificado.idade = idade;
        petIdentificado.especie = especie;
        petIdentificado.adotado = adotado;

        return res.status(200).json({ mensagem: "Pet atualizado com sucesso", pet: petIdentificado });
    }

    static deletarPet(req: Request, res: Response) {
        const identificador: string = req.params.id;
        const petIdentificado: number = listaDePets.findIndex((el) => el.id === Number(identificador));

        if (petIdentificado < 1) {
            return res.status(404).json({ mensagem: "Pet não encontrado", pet: petIdentificado });
        }

        listaDePets.splice(petIdentificado, 1);

        res.status(200).json({ mensagem: "Pet deletado com sucesso", pet: listaDePets[petIdentificado - 1] });
    }
}

export default PetController;
