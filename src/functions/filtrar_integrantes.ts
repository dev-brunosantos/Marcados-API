import { prismaConfig } from "../config/prismaConfig";

const { usuarios } = prismaConfig

export async function FiltrarIntegrantes(naipe: string) {
    const integrante = await usuarios.findMany({
        where: { 
            naipe: { naipe: {
                equals: naipe, mode: 'insensitive'
            } }
        },
        select: {
            nome: true,
            sobrenome: true,
            naipe: true
        }
    })

    // const pessoas = integrante.map(pes => pes.nome);
    const pessoas = integrante.map(pes => `${pes.nome} ${pes.sobrenome}`);
    return pessoas;
}

export async function FiltrarMinistros(cargo: string) {
    const integrante = await usuarios.findMany({
        where: { 
            cargo: { cargo: {
                equals: cargo, mode: 'insensitive'
            } }
        },
        select: {
            nome: true,
            sobrenome: true,
            cargo: true
        }
    })

    // const pessoas = integrante.map(pes => pes.nome);
    const pessoas = integrante.map(pes => `${pes.nome} ${pes.sobrenome}`);
    return pessoas;
}