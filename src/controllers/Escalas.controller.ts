import { Request, Response } from "express";
import { EscalasServices } from "../services/Escalas.service";

const services = new EscalasServices()

class Escalas {
    async CriarEscalas(req: Request, res: Response) {
        const { id } = req.body
        if(id === "") {
            res.json({erro: "Erro"})
        }
        const gerar = await services.CriarEscala(id)
        res.json(gerar)
    }

    async ListarEscalas(req: Request, res: Response) {
        const escalas = await services.ListarEscalas()
        res.json(escalas)
    }

    async BuscarCulto(req: Request, res: Response) {
        const { id } = req.body;
        const culto = await services.ListarCulto(id)
        res.json(culto)
    }

    
}

const EscalasController = new Escalas()

export { EscalasController }