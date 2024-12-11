import { prismaConfig } from "../config/prismaConfig";
import { FiltrarIntegrantes } from "../functions/filtrar_integrantes";

function filtrarNaipe(naipe: number) {
    let dado = Math.floor(Math.random() * naipe)
    return dado
}

// function filtrarNaipe(naipe: number) {

//     var pessoa1 = Math.floor(Math.random() * naipe)
//     var pessoa2 = Math.floor(Math.random() * naipe)

//     if(pessoa2 === pessoa1) {
//         if(pessoa2 === 0) {
//             pessoa2 = Math.floor(Math.random() * naipe) +1
//         } 
//         else {
//             pessoa2 = Math.floor(Math.random() * naipe) -1
//         }
//     }

//     return [pessoa1, pessoa2]
// }


class EscalasServices {
    async CriarEscala() {
        try {
            const soprano = await FiltrarIntegrantes("Soprano")
            const contralto = await FiltrarIntegrantes("Contralto")
            const tenor = await FiltrarIntegrantes("Tenor")

            if (soprano || contralto || tenor) {


                const dados = {
                    sopranos: [
                        // soprano[soprano[s1], soprano[s2]],
                        soprano[filtrarNaipe(soprano.length)],
                        soprano[filtrarNaipe(soprano.length)]
                    ],
                    contraltos: [
                        contralto[filtrarNaipe(contralto.length)],
                        contralto[filtrarNaipe(contralto.length)]
                    ],
                    tenores: [
                        tenor[filtrarNaipe(tenor.length)],
                        tenor[filtrarNaipe(tenor.length)]
                    ]
                }

                return dados
            }

            return "Erro ao buscar os dados."
        } catch (error) {
            return "Erro interno!"
        }
    }
}

export { EscalasServices }