import { prismaConfig } from "../config/prismaConfig";
import { EscolherCargo, EscolherNaipe } from "../functions/cargo_naipe";

interface UsuarioModel {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    cargo: string;
    naipe: string;
}

const { usuarios } = prismaConfig

class UsuarioServices {
    async CadastrarUsuario({ nome, sobrenome, email, senha, cargo, naipe }: UsuarioModel) {
        try {
            const usuarioExistente = await usuarios.findFirst({ where: { email } })

            if (!usuarioExistente) {

                let cargoId = 0;
                let naipeId = 0;

                cargoId = EscolherCargo(cargo)
                naipeId = EscolherNaipe(naipe)

                const novoUsuario = await usuarios.create({
                    data: {
                        nome, 
                        sobrenome, 
                        email,
                        senha, 
                        cargoId,
                        naipeId
                    }
                })

                return `Usuario ${novoUsuario.nome.toUpperCase()} foi cadastrado com sucesso.`
            }
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }

    async ListarUsuarios() {
        try {
            const usuariosCadastrados = await usuarios.findMany({
                select: {
                    id: true,
                    nome: true,
                    sobrenome: true,
                    email: true,
                    cargo: {
                        select: { id: true, cargo: true }
                    },
                    naipe: {
                        select: { id: true, naipe: true }
                    }
                }
            })

            if(!usuariosCadastrados) {
                return "Não existe nenhum usuário cadastrado no sistema."
            }

            return usuariosCadastrados
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }
}

export { UsuarioServices }