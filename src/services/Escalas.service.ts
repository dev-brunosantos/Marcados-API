import { prismaConfig } from "../config/prismaConfig";
import { FiltrarIntegrantes, FiltrarMinistros } from "../functions/filtrar_integrantes";
import { filtrarNaipe } from "../functions/filtrar_naipe_escala";

const { escalas } = prismaConfig;

class EscalasServices {
    async CriarEscala() {
        try {
            const ministro = await FiltrarMinistros("Ministro")

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
                    ministro: ministro[Math.floor(Math.random() * ministro.length)],
                    sopranos: filtrarNaipe(soprano),
                    contraltos: filtrarNaipe(contralto),
                    tenores: filtrarNaipe(tenor),
                    tecladistas: filtrarNaipe(teclado),
                    violao: violao[Math.floor(Math.random() * violao.length)],
                    guitarrista: guitar[Math.floor(Math.random() * guitar.length)],
                    baixista: baixo[Math.floor(Math.random() * baixo.length)],
                    baterista: bateria[Math.floor(Math.random() * bateria.length)]
                }

                return await escalas.create({
                    data: {
                        ministro: dados.ministro,
                        soprano: dados.sopranos,
                        contralto: dados.contraltos,
                        tenor: dados.tenores,
                        teclado: dados.tecladistas,
                        violao: dados.violao,
                        guitarra: dados.guitarrista,
                        baixo: dados.baixista,
                        bateria: dados.baterista
                    }
                })
            }

            return "Erro ao buscar os dados."
        } catch (error) {
            return "Erro interno!"
        }
    }
}

export { EscalasServices }