import { Request, Response } from "express";
import { VozesServices } from "../services/VozesServices";

const services = new VozesServices()

class Vozes {
    async CriarNaipe(req: Request, res: Response) {
        const { voz } = req.body
        const criar = await services.NovaVoz({ voz })
        return res.json(criar)
    }
    async Naipes(req: Request, res: Response) {
        const naipes = await services.ListarNaipes()
        return res.json(naipes)
    }
    async BuscarNaipe(req: Request, res: Response) {
        const { voz } = req.params
        const naipe = await services.BuscarNaipe({ voz })
        return res.json(naipe)
    }
}

const VozesControllers = new Vozes()

export { VozesControllers }