import { prismaConfig } from "../config/prismaConfig";
import { EscolherCargo, EscolherNaipe } from "../functions/cargo_naipe";
import { FormataData } from "../functions/formata_data";
import { FormataDados } from "../functions/usuario_dados";

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

            if (!usuariosCadastrados) {
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

            if (usuarioIdExistente) {

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

            if (usuarioIdExistente) {
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

    // async EditarDados(nome: string, email: string, sobrenome: string, cargo: string, naipe: string) {
    async EditarDados(id: string, nome: string, sobrenome: string, cargo: string, naipe: string) {
        try {
            const idUsuarioExistente = await usuarios.findFirst({
                where: { id },
                select: {
                    id: true, nome: true, sobrenome: true, email: true,
                    cargo: { select: { id: true, cargo: true } },
                    naipe: { select: { id: true, naipe: true } },
                    dt_criacao: true, dt_atualizacao: true
                }
            })

            if (idUsuarioExistente) {

                var cargoId = 0;
                var naipeId = 0;
                var dataCadastroFormatada = FormataData(idUsuarioExistente.dt_criacao)
                var dataAtualizacaoFormatada = FormataData(idUsuarioExistente.dt_atualizacao)

                cargoId = EscolherCargo(cargo)
                naipeId = EscolherNaipe(naipe)

                const usuarioEditado = await usuarios.update({
                    where: { id },
                    data: {
                        nome: nome.trim() === "" ? idUsuarioExistente.nome : nome,
                        sobrenome: sobrenome.trim() === "" ? idUsuarioExistente.sobrenome : sobrenome,
                        cargoId: cargo.trim() === "" ? idUsuarioExistente.cargo.id : cargoId,
                        naipeId: naipe.trim() === "" ? idUsuarioExistente.naipe.id : naipeId,
                    },
                    select: {
                        id: true, nome: true, sobrenome: true, email: true,
                        cargo: { select: { id: true, cargo: true } },
                        naipe: { select: { id: true, naipe: true } },
                        dt_criacao: true, dt_atualizacao: true
                    }
                })

                const dadosAnteriores = FormataDados(
                    idUsuarioExistente.id, idUsuarioExistente.nome, idUsuarioExistente.sobrenome,
                    idUsuarioExistente.email,
                    idUsuarioExistente.cargo.cargo, idUsuarioExistente.naipe.naipe,
                    dataCadastroFormatada, ""
                )

                const dadosAtualizados = FormataDados(
                    usuarioEditado.id, usuarioEditado.nome, usuarioEditado.sobrenome,
                    usuarioEditado.email,
                    usuarioEditado.cargo.cargo, usuarioEditado.naipe.naipe,
                    dataCadastroFormatada, dataAtualizacaoFormatada
                )

                return {
                    status: "Os dados foram atualizados com sucesso.",
                    dados_antigos: dadosAnteriores,
                    dados_atualizados: dadosAtualizados
                }
            }
            return "O ID informado não esta vinculado a nenhum usuário cadastrado no sistema."
        } catch (error) {
            console.error(error)
            return "Erro interno! Por favor, tente novamente."
        }
    }
}

export { UsuarioServices }