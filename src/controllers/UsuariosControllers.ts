import { Request, Response } from "express";
import { UsuarioServices } from "../services/UsuarioServices";

const services = new UsuarioServices()

class Usuarios {
    async NovoUsuario(req: Request, res: Response) {
        const { nome, email, senha, id_cargo } = req.body
        const criar = await services.CadastrarUsuario({
            nome, email, senha, id_cargo
        })
        return res.json(criar)
    }
    async ListarUsuarios(req: Request, res: Response) {
        const usuarios = await services.ListarUsuarios()
        return res.json(usuarios)
    }
    async BuscarUsuarioNome(req: Request, res: Response) {
        const { nome } = req.body
        const usuarioNome = await services.BuscarUsuario(nome)
        return res.json(usuarioNome) 
    }
    async BuscarUsuarioID(req: Request, res: Response) {
        const { id } = req.params
        const usuarioId = await services.BuscarUsuarioId(id)
        return res.json(usuarioId)
    }
    async BuscarEmailUsuario(req: Request, res: Response) {
        const { email } = req.body
        const usuarioEmail = await services.BuscarEmailUsuario(email)
        return res.json(usuarioEmail)
    }
    async BuscarUsuarioCargo(req: Request, res: Response) {
        const { cargo } = req.body
        const usuarioCargo = await services.BuscarUsuarioCargo(cargo)
        return res.json(usuarioCargo)
    }

}

const UsuarioControllers = new Usuarios()

export { UsuarioControllers }