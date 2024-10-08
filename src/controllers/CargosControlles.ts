import { Request, Response } from "express";
import { CargosServices } from "../services/CargosServices";

const services = new CargosServices()

class Cargos {
    async CriarCargo(req: Request, res: Response) {
        const { cargo } = req.body
        const criar = await services.CadastrarCargo({ cargo })
        return res.json(criar)
    }
    async ListarCargos(req: Request, res: Response) {
        const cargos = await services.ListarCargos()
        return res.json(cargos)
    }
    async BuscarCargo(req: Request, res: Response) {
        const { cargo } = req.params
        const cargoNome = await services.BuscarCargo({ cargo })
        return res.json(cargoNome)
    }
}

const CargosControllers = new Cargos()

export { CargosControllers }