// import { prismaConfig } from "../config/prismaConfig";

// const { vozes } = prismaConfig

// interface VozesDados {
//     voz: string
// }

// class VozesServices {
//     async NovaVoz({ voz }: VozesDados) {
//         const naipe = await vozes.findFirst({ where: { voz } })
//         if (!naipe) {
//             const criarNaipe = await vozes.create({ data: { voz } })
//             return {
//                 status: "O novo naipe de vozes foi criado com sucesso.",
//                 criarNaipe
//             }
//         }
//         return { erro: "Naipe de voz já cadastrado no sistema." }
//     }

//     async ListarNaipes() {
//         const naipes = await vozes.findMany()
//         if (naipes) {
//             return { naipes }
//         }
//         return { erro: "Não existe nenhum naipe de voz cadastrado no sistema." }
//     }

//     async BuscarNaipe({ voz }: VozesDados) {
//         const naipeNome = await vozes.findFirst({ where: { voz } })
//         if (naipeNome) {
//             return { naipeNome }
//         }
//         return { erro: "Não existe nenhum naipe de voz com esse nome." }
//     }
// }

// export { VozesServices }