import { Request, Response } from "express";
import { UsuarioServices } from "../services/Usurios.service";

const service = new UsuarioServices()

class Usuario {
    async Cadastrar(req: Request, res: Response) {
        const { nome, sobrenome, email, senha, cargo, naipe } = req.body
        const novoUsuario = await service.CadastrarUsuario({
            nome, sobrenome, email, senha, cargo, naipe
        })
        res.json(novoUsuario)
    }
    async Listar(req: Request, res: Response) {
        const usuarios = await service.ListarUsuarios()
        res.json(usuarios)
    }
    async UsuarioId(req: Request, res: Response) {
        const { id } = req.params
        const usuarioNome = await service.BuscarUsuarioId(id)
        return usuarioNome
    }
} 

const UsuarioController = new Usuario()

export { UsuarioController }