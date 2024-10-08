import { prismaConfig } from "../config/prismaConfig";

const { instrumentos } = prismaConfig

interface InstrumentoDados {
    instrumento: string
}

class InstrumentosServices {
    async CriarNaipeInstrumento({ instrumento }:InstrumentoDados) {
        const cadastrarInstrumento = await instrumentos.findFirst({ where: {instrumento}})
        if(!cadastrarInstrumento) {
            const criar = await instrumentos.create({ data: { instrumento }})
            return { status: "Nova categoria de instrumentos cadastrada com sucesso."}
        }
        return { erro: "A categoria de instrumentos ja esta cadastrada no sistema."}
    }

    async ListarInstrumentos() {
        const naipeInstrumentos = await instrumentos.findMany()
        if(naipeInstrumentos) {
            return { naipeInstrumentos }
        }
        return { erro: "Não existe nenhuma categoria de instrumentos cadastrado no sistema."}
    }

    async BuscarCategoria({ instrumento }:InstrumentoDados) {
        const naipeInstrumento = await instrumentos.findFirst({ where: { instrumento }})
        if(naipeInstrumento) {
            return { naipeInstrumento }
        }
        return { erro: "Não existe nenhum naipe de instrumento cadastrado no sistema com esse nome."}
    }
}

export { InstrumentosServices }