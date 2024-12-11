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

    const pessoas = integrante.map(pes => pes.nome);
    return pessoas;
}