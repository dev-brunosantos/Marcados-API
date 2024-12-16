import { prismaConfig } from "../config/prismaConfig";
import { FiltrarIntegrantes } from "../functions/filtrar_integrantes";

// function filtrarNaipe(naipe: number) {
//     let dado = Math.floor(Math.random() * naipe)
//     return dado
// }

function filtrarNaipe(naipe: string[]):string[] {
    let pessoa1 = Math.floor(Math.random() * naipe.length)
    let pessoa2 = Math.floor(Math.random() * naipe.length)
    
    if(pessoa2 === pessoa1) {
        pessoa2 = Math.floor(Math.random() * naipe.length)
        // if(pessoa1 == 0) {
        //     pessoa2 = Math.floor(Math.random() * naipe.length) + 1
        //     return [naipe[pessoa1], naipe[pessoa2]]
        // }
        // else {
        //     pessoa2 = Math.floor(Math.random() * naipe.length) - 1
        //     return [naipe[pessoa1], naipe[pessoa2]]
        // }
    }
    return [naipe[pessoa1], naipe[pessoa2]]
}


class EscalasServices {
    async CriarEscala() {
        try {
            const soprano = await FiltrarIntegrantes("Soprano")
            const contralto = await FiltrarIntegrantes("Contralto")
            const tenor = await FiltrarIntegrantes("Tenor")

            if (soprano && contralto && tenor) {

                const dados = {
                    sopranos: [
                        filtrarNaipe(soprano)
                        // soprano[filtrarNaipe()],
                        // soprano[filtrarNaipe(soprano)]
                    ],
                    contraltos: [
                        filtrarNaipe(contralto)
                        // contralto[filtrarNaipe(contralto)],
                        // contralto[filtrarNaipe(contralto)]
                    ],
                    tenores: [
                        filtrarNaipe(tenor)
                        // tenor[filtrarNaipe(tenor)],
                        // tenor[filtrarNaipe(tenor)]
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