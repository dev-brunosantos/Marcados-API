import { prismaConfig } from "../config/prismaConfig";

interface NaipeModel {
    naipe: string;
}

const { naipes } = prismaConfig

class NaipeServices {
    async CriarNaipe({ naipe }:NaipeModel) {
        try {
            const naipeExistente = await naipes.findFirst({where: { naipe }})

            if(!naipeExistente) {
                const cadastrar = await naipes.create({ data: { naipe } })

                return `O naipe '${cadastrar.naipe.toUpperCase}' foi cadastrado com sucesso`
            }

            return `O cargo ${naipe} ja esta cadastrado no sistema.`
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }

    async ListarNaipes() {
        try {
            const naipesCadastrados = await naipes.findMany()

            if(!naipesCadastrados) {
                return "Não existe nenhum cargo registrado no sisteme."
            }

            return naipesCadastrados
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }

    async ListaNaipeID(id: number) {
        try {
            const naipeID = await naipes.findFirst({ where: { id }})

            if(!naipeID) {
                return `Não encontramos nenhum cargo vinculado ao ID=${id} informado.`
            }
            return naipeID
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }

    async EditarNaipe(id: number, naipe: string) {
        try {
            const idNaipe = await naipes.findFirst({ where: { id }})

            if(naipe === idNaipe?.naipe) {
                return "O cargo ja possui esse nome. Por favor, tente novamente."
            }

            if(idNaipe) {
                const editar = await naipes.update({
                    where: { id }, 
                    data: { naipe: naipe === "" ? idNaipe.naipe : naipe }
                })
                
                return {
                    status: "A edição dos dados foram realizadas com sucesso.",
                    dados_anteriores: idNaipe,
                    dados_atualizados: editar
                }
            }

            return `Não encontramos nenhum cargo vinculado ao ID=${id} informado.`

        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }

    async ApagarNaipe(id: number) {
        try {
            const idNaipeExistente = await naipes.findFirst({ where: {id}})

            if(idNaipeExistente) {
                await naipes.delete({ where: { id }})
                return `O naipe '${idNaipeExistente.naipe.toUpperCase()}' foi apagado com sucesso.`
            }

            return `Não encontramos nenhum cargo vinculado ao ID=${id} informado.`

        } catch (error) {
            
        }
    }
}

export { NaipeServices }