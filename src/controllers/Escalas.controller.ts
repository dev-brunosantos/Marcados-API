import { Request, Response } from "express";
import { EscalasServices } from "../services/Escalas.service";

const services = new EscalasServices()

class Escalas {
    async CriarEscalas(req: Request, res: Response) {
        const { confirmacao } = req.body
        if(confirmacao === "") {
            res.json({erro: "Erro"})
        }
        const gerar = await services.CriarEscala()
        res.json(gerar)
    }
}

const EscalasController = new Escalas()

export { EscalasController }