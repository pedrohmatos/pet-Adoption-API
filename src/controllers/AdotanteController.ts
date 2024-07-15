import { Request, Response } from "express";
import TipoAdotante from "../types/TipoAdotante.js";
import AdotanteRepository from "../repositories/AdotanteRepository.js";
import AppDataSource from "../config/fonteDados.js";
import AdotanteEntity from "../entity/AdotanteEntity.js";

const adotanteRepository = new AdotanteRepository(AppDataSource.getRepository(AdotanteEntity));

class AdotanteController {
    static async criaAdotante(req: Request, res: Response) {
        const { nome, celular, endereco } = <TipoAdotante>req.body;
        
        const novoAdotante = new AdotanteEntity(nome, celular, endereco);

        try {
            await adotanteRepository.cria(novoAdotante);

            return res.status(201).json({ mensagem: "Adotante adicionado com sucesso", adotante: novoAdotante });
        } catch (erro) {
            return res.status(500).json({ erro: `Ocorreu um erro ao criar o adotante: ${erro}` })
        }
    }

    static async listaAdotante(req: Request, res: Response) {
        const listaDeAdotantes: TipoAdotante[] = await adotanteRepository.lista();

        return res.status(200).json({ mensagem: "Aqui estão as pessoas adotantes", adotantes: listaDeAdotantes });
    }

    static async atualizaAdotante(req: Request, res: Response) {
        const identificador: number = Number(req.params.id);

        const mudancas: TipoAdotante = req.body;

        try {
            const adotanteIdentificado: TipoAdotante = await adotanteRepository.atualiza(identificador, mudancas);
            return res.status(200).json({ mensagem: "Adotante atualizado com sucesso", adotante: adotanteIdentificado });
        } catch (erro) {
            return res.status(400).json({ mensagem: `Ocorreu um erro ao tentar atualizar adotante: ${erro}` });
        }
    }

    static async deletaAdotante(req: Request, res: Response) {
        const identificador: number = Number(req.params.id);

        try {
            await adotanteRepository.deleta(identificador);
            return res.status(200).json({ mensagem: `Foi deletado adotante com o id: ${identificador}` });
        } catch (erro) {
            return res.status(400).json({ mensagem: `Ocorreu um erro ao tentar deletar adotante: ${erro}` });
        }
    }
}

export default AdotanteController;
