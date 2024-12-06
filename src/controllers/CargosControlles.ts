import { Request, Response } from "express";
import { CargosServices } from "../services/Cargos.services";

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
    async BuscarCargoId(req: Request, res: Response) {
        const { id } = req.params
        const cargoNome = await services.BuscarCargoId(Number(id))
        return res.json(cargoNome)
    }
    // async BuscarCargo(req: Request, res: Response) {
    //     const { cargo } = req.query
    //     if (!cargo || typeof cargo !== 'string') {
    //         return res.status(400).json({ error: "O parâmetro 'cargo' é obrigatório e deve ser uma string." });
    //     }

    //     let teste:string = cargo

    //     const cargoNome = await services.BuscarCargo(teste)
    //     return res.json(cargoNome)
    // }

    async EditarCargo(req: Request, res: Response) {
        const { id } = req.params
        const { cargo } = req.body
        const editar = await services.EditarCargo(Number(id), cargo)
        res.json(editar)
    }

    async ApagarCargo(req: Request, res: Response) {
        const { id } = req.params
        const apagar = await services.ApagarCargo(Number(id))
        res.json(apagar)
    }
}

const CargosControllers = new Cargos()

export { CargosControllers }