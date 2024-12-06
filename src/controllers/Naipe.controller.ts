import { Request, Response } from "express";
import { NaipeServices } from "../services/Naipes.service";

const service = new NaipeServices()

class Naipe {
    async Criar(req: Request, res: Response) {
        const { naipe } = req.body
        const criar = await service.CriarNaipe(naipe)
        res.json(criar)
    }
    async ListarNaipes(req: Request, res: Response) {
        const naipes = await service.ListarNaipes()
        res.json(naipes)
    }
    async NaipeID(req: Request, res: Response) {
        const { id } = req.params
        const naipe = await service.ListaNaipeID(Number(id))
        res.json(naipe)
    }
    async Editar(req: Request, res: Response) {
        const { id } = req.params
        const { naipe } = req.body
        const editar = await service.EditarNaipe(Number(id), naipe)
        res.json(editar)
    }
    async Apagar(req: Request, res: Response) {
        const { id } = req.params
        const apagar = await service.ApagarNaipe(Number(id))
        res.json(apagar)
    }
}

const NaipeController = new Naipe()

export { NaipeController }