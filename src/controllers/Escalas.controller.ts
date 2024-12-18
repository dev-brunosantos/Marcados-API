import { Request, Response } from "express";
import { EscalasServices } from "../services/Escalas.service";

const services = new EscalasServices()

class Escalas {
    async CriarEscalas(req: Request, res: Response) {
        const { titulo } = req.body
        if(titulo === "") {
            res.json({erro: "Erro"})
        }
        const gerar = await services.CriarEscala(titulo)
        res.json(gerar)
    }

    async ListarEscalas(req: Request, res: Response) {
        const escalas = await services.ListarEscalas()
        res.json(escalas)
    }

    async BuscarCulto(req: Request, res: Response) {
        const { titulo } = req.body;
        const culto = await services.ListarCulto(titulo)
        res.json(culto)
    }

    async EditarEscala(req: Request, res: Response) {
        const { id } = req.params
        const { culto } = req.body
        const editar = await services.EditarEscala(id, culto)
        res.json(editar)
    }

    async ApagarEscala(req: Request, res: Response) {
        const { id } = req.params 
        const escala = await services.ApagarEscala(id)
        res.json(escala)
    }
}

const EscalasController = new Escalas()

export { EscalasController }