import { query, Request, Response } from "express";
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
        const { id }  = req.query

        if(typeof id !== 'string') {
            return res.json({ erro: "O parametro de consulta não esta no formato correto"})
        }

        const usuarioNome = await service.BuscarUsuarioId(id)
        res.json(usuarioNome)
    }
    async UsuarioNome(req: Request, res: Response) {
        const { nome } = req.body
        const usuarioNome = await service.BuscarUsuarionNome(nome)
        res.json(usuarioNome)
    }
    async EditarUsuario(req: Request, res: Response) {
        const { id } = req.params

        if(typeof id !== "string") {
            throw new Error("O ID informado não esta no formato correto.")
        }
        const { nome, sobrenome, cargo, naipe } = req.body

        const usuarioEditado = await service.EditarDados(
            id, nome, sobrenome, cargo, naipe
        )

        res.json(usuarioEditado)
    }
} 

const UsuarioController = new Usuario()

export { UsuarioController }