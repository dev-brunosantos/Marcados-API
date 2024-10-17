import { prismaConfig } from "../config/prismaConfig";

const { cargos } = prismaConfig

interface CargosDados {
    cargo: string
}

class CargosServices {
    async CadastrarCargo({ cargo }:CargosDados) {
        const cargoNome = await cargos.findFirst({ where: { cargo }})

        if(!cargoNome) {
            const criar = await cargos.create({ data: { cargo }})
            return "Cargo criado com sucesso."
        }
        return "O cargo informado já existe."
    }

    async ListarCargos() {
        const listar = await cargos.findMany()
        if(!listar) {
            return "Não existe nenhum cargo cadastrado no sistema."
        }
        return listar
    }

    async BuscarCargo({ cargo }:CargosDados) {
        const cargoNome = await cargos.findFirst({ where: { cargo }})

        if(cargoNome) {
            return cargoNome 
        }

        return "O cargo informado não esta cadastrado no sistema."
    }
}

export { CargosServices }