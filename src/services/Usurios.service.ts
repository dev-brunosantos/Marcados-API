import { prismaConfig } from "../config/prismaConfig";

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

                switch (cargo) {
                    case "Ministro":
                        cargoId = 2
                        break;
                    case "Vocal":
                        cargoId = 3
                        break;
                    case "Musico":
                        cargoId = 4
                        break;
                    default:
                        return "Não existe esse cargo."
                }

                switch (naipe) {
                    case "Soprano":
                        naipeId = 1
                        break;
                    case "Contralto":
                        naipeId = 2
                        break;
                    case "Tenor":
                        naipeId = 3
                        break;
                    case "Sax":
                        naipeId = 4
                        break;
                    case "Teclado":
                        naipeId = 5
                        break;
                    case "Violão":
                        naipeId = 6
                        break;
                    case "Guitarra":
                        naipeId = 7
                        break;
                    case "Baixo":
                        naipeId = 8
                        break;
                    case "Bateria":
                        naipeId = 9
                        break;
                    default:
                        return "Não existe esse naipe."
                }

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
            const usuariosCadastrados = await usuarios.findMany()

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