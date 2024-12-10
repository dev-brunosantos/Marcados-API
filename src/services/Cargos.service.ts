import { prismaConfig } from "../config/prismaConfig";

const { cargos } = prismaConfig

interface CargosDados {
    cargo: string
}

class CargosServices {
    async CadastrarCargo({ cargo }: CargosDados) {
        try {
            const cargoExistente = await cargos.findFirst({ where: { cargo } })

            if (!cargoExistente) {
                const criarCargo = await cargos.create({
                    data: { cargo },
                })

                return `O cargo ${criarCargo.cargo} foi cadastrado com sucesso.`
            }

            return `O cargo ${cargo} ja foi esta cadastrado no sistema.`
        } catch (error) {
            return "Erro interno! Por favor tente novamente."
        }
    }

    async ListarCargos() {
        const listar = await cargos.findMany()
        if (!listar) {
            return "Não existe nenhum cargo cadastrado no sistema."
        }
        return listar
    }

    async BuscarCargoId(id: number) {
        try {
            const cargoId = await cargos.findMany({ where: { id } })

            if (cargoId) {
                return cargoId
            }

            return "O cargo informado não esta cadastrado no sistema."
        } catch (error) {
            return "Erro interno! Por favor tente novamente."
        }
    }

    // async BuscarCargo(cargo:string) {
    //     try {
    //         const cargoNome = await cargos.findFirst({ 
    //             // where: { cargo: { equals: cargo, mode: 'insensitive'} } 
    //             where: { cargo } 
    //         })

    //         if (cargoNome) {
    //             return cargoNome
    //         }

    //         return "O cargo informado não esta cadastrado no sistema."

    //     } catch (error) {
    //         return {
    //             status: "Erro interno! Por favor tente novamente. ",
    //             erro: error
    //         }
    //     }
    // }
    async EditarCargo(id: number, cargo: string) {
        try {
            const idCargoExistente = await cargos.findFirst({where: {id}})

            if(cargo === idCargoExistente?.cargo) {
                return "O cargo já possui esse nome."
            }

            if(idCargoExistente) {
                const cargoEditado = await cargos.update({
                    where: {id},
                    data: { cargo }
                })

                return {
                    status: "As edições foram concluídas com sucesso.",
                    dados_antigos: idCargoExistente,
                    dados_atualizados: cargoEditado
                }
            }

            return `Não encontramos nenhum cargo com o ID=${id} informado.`
        } catch (error) {
            return "Erro interno! Por favor tente  novamente."
        }
    }

    async ApagarCargo(id: number) {
        try {
            const idCargo = await cargos.findFirst({where: {id}})

            if(idCargo) {
                await cargos.delete({ where: {id}})
                return `Os dados do cargo ${idCargo.cargo} foram apagados com sucesso.`
            }
            return `Não encontramos nenhum cargo com o ID=${id} informado.`
        } catch (error) {
            return "Erro interno! Por favor, tente novamente."
        }
    }
}

export { CargosServices }