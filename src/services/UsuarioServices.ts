import { prismaConfig } from "../config/prismaConfig";
import { hash } from 'bcrypt'

const { usuarios } = prismaConfig

interface UsuarioDados {
    nome: string;
    email: string;
    senha: string;
    cargoId: string;
    naipe: string;
}

class UsuarioServices {
    async CadastrarUsuario({ nome, email, senha, cargoId, naipe }:UsuarioDados) {
        const criarUsuario = await usuarios.findFirst({ where: { email }})
        if(!criarUsuario) {
            const senhaCriptografada = await hash(senha, 8)
            await usuarios.create({
                data: { 
                    nome, email,
                    senha: senhaCriptografada,
                    cargoId,
                    naipe
                }
            })
            return "Usuário cadastrado com sucesso."
        }
        return "Usuário ja cadastrado no sistema."
    }
    
    async ListarUsuarios() {
        const listar = await usuarios.findMany()
        if(listar) {
            const listarUsuarios = await usuarios.findMany({
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    cargo: true
                }
            })
            return listarUsuarios 
        }
        return "Não existe nenhum usuário cadastrado no sistema"
    }

    async BuscarUsuario(nome: string) {
        const usuarioNome = await usuarios.findMany({
            where: { nome },
            select: {
                id: true,
                nome: true,
                email: true,
                cargo: true 
            }
        })
        if(usuarioNome) {
            return usuarioNome
        }
        return "Não existe usuário com o nome informado."
    }

    async BuscarEmailUsuario(email: string) {
        const emailUsuario = await usuarios.findFirst({ where: {email }})
        if(!emailUsuario) {
            return "Não encontramos nenhum usuário com o email informado."
        }
        return emailUsuario
    }

    async BuscarUsuarioCargo(cargo: string) {
        const usuarioCargo = await usuarios.findMany({ 
            where: { cargo }
        })
        if(usuarioCargo) {
            return usuarioCargo
        }
        return "Não existe nenhum usuário com o cargo informado."
    }

    async BuscarUsuarioId(id: string) {
        const usuarioID = await usuarios.findFirst({ where: { id }})
        if(usuarioID) {
            return usuarioID
        }
        return "Não existe nenhum usuário com o ID informado. "
    }
}

export { UsuarioServices }