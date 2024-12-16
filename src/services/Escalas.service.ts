import { FiltrarIntegrantes } from "../functions/filtrar_integrantes";
import { filtrarNaipe } from "../functions/filtrar_naipe_escala";

class EscalasServices {
    async CriarEscala() {
        try {
            const soprano = await FiltrarIntegrantes("Soprano")
            const contralto = await FiltrarIntegrantes("Contralto")
            const tenor = await FiltrarIntegrantes("Tenor")

            const teclado = await FiltrarIntegrantes("Teclado")
            const violao = await FiltrarIntegrantes("Violão")
            const guitar = await FiltrarIntegrantes("Guitarra")
            const baixo = await FiltrarIntegrantes("Baixo")
            const bateria = await FiltrarIntegrantes("Bateria")

            if (soprano && contralto && tenor) {

                const dados = {
                    sopranos: [ filtrarNaipe(soprano) ],
                    contraltos: [ filtrarNaipe(contralto) ],
                    tenores: [ filtrarNaipe(tenor) ],
                    tecladistas: [ filtrarNaipe(teclado) ],
                    violao: violao[Math.floor(Math.random() * violao.length)],
                    guitarrista: guitar[Math.floor(Math.random() * guitar.length)],
                    baixista: baixo[Math.floor(Math.random() * baixo.length)],
                    baterista: bateria[Math.floor(Math.random() * bateria.length)]
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