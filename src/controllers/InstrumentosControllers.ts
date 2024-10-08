import { Request, Response } from "express";
import { InstrumentosServices } from "../services/InstrumentosServices";

const services = new InstrumentosServices()

class Instrumentos {
    async CriarCategoria(req: Request, res: Response) {
        const { instrumento } = req.body
        const categoria = await services.CriarNaipeInstrumento({ instrumento })
        return res.json(categoria)
    }
    async ListarCategorias(req: Request, res: Response) {
        const instrumentos = services.ListarInstrumentos()
        return res.json(instrumentos)
    }
    async BuscarInstrumentos(req: Request, res: Response) {
        const { instrumento } = req.params
        const instrumentoNome = await services.BuscarCategoria({ instrumento })
        return res.json(instrumentoNome)
    }
}

const InstrumentosControllers = new Instrumentos()

export { InstrumentosControllers }