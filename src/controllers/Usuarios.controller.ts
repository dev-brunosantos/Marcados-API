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
} 

const UsuarioController = new Usuario()

export { UsuarioController }