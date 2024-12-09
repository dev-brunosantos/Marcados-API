import { prismaConfig } from "../config/prismaConfig";
import { EscolherCargo, EscolherNaipe } from "../functions/cargo_naipe";
import { FormataData } from "../functions/formata_data";

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

    async BuscarUsuarioId(id: string) {
        try {
            const usuarioIdExistente = await usuarios.findFirst({ 
                where: { id },
                select: {
                    id: true,
                    nome: true,
                    sobrenome: true,
                    email: true,
                    dt_criacao: true,
                }
            })

            if(usuarioIdExistente) {

                let dataFormatada = FormataData(usuarioIdExistente.dt_criacao)
                 
                const dadosUsuario = {
                    id: usuarioIdExistente.id,
                    nome: usuarioIdExistente.nome,
                    sobrenome: usuarioIdExistente.sobrenome,
                    email: usuarioIdExistente.email,
                    cadastro: dataFormatada
                }

                return dadosUsuario
            }

            return "Não existe nenhum usuário cadastrado com o ID informado"
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }

    async BuscarUsuarionNome(nome: string) {
        try {
            const usuarioIdExistente = await usuarios.findFirst({ 
                where: { nome: { equals: nome, mode: 'insensitive' } },
                select: {
                    id: true,
                    nome: true,
                    sobrenome: true,
                    email: true,
                    dt_criacao: true,
                }
            })

            if(usuarioIdExistente) {
                const dadosUsuario = {
                    id: usuarioIdExistente.id,
                    nome: usuarioIdExistente.nome,
                    sobrenome: usuarioIdExistente.sobrenome,
                    email: usuarioIdExistente.email,
                    cadastro: usuarioIdExistente.dt_criacao
                }

                return dadosUsuario
            }

            return "Não existe nenhum usuário cadastrado com o ID informado"
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }
}

export { UsuarioServices }