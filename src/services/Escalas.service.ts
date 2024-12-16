import { FiltrarIntegrantes } from "../functions/filtrar_integrantes";

function filtrarNaipe(naipe: string[]):string[] {
    let pessoa1 = Math.floor(Math.random() * naipe.length)
    let pessoa2 = Math.floor(Math.random() * naipe.length)
    
    if(pessoa2 === pessoa1) {
        pessoa2 = Math.floor(Math.random() * naipe.length)
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
                    ],
                    contraltos: [
                        filtrarNaipe(contralto)
                    ],
                    tenores: [
                        filtrarNaipe(tenor)
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