import { prismaConfig } from "../config/prismaConfig";
import { criarEscala } from "../functions/criar_escala";
import { FormataData } from "../functions/formata_data";

const { escalas } = prismaConfig;

class EscalasServices {
    async CriarEscala(id: string) {
        try {
            let dados = await criarEscala()
            const {
                ministro, sopranos, contraltos, tenores, tecladistas,
                violao, guitarrista, baixista, baterista
            } = dados;

            if (dados) {
                return await escalas.create({
                    data: {
                        id,
                        ministro: ministro,
                        soprano: sopranos,
                        contralto: contraltos,
                        tenor: tenores,
                        teclado: tecladistas,
                        violao: violao,
                        guitarra: guitarrista,
                        baixo: baixista,
                        bateria: baterista
                    }
                })
            }

            return "Erro ao buscar os dados."
        } catch (error) {
            return "Erro interno!"
        }
    }

    async ListarEscalas() {
        try {
            const escalasExistentes = await escalas.findMany({
                select: {
                    id: true,
                    ministro: true,
                    soprano: true,
                    contralto: true,
                    tenor: true,
                    teclado: true,
                    violao: true,
                    guitarra: true,
                    baixo: true,
                    bateria: true,
                    dt_culto: true
                }
            })

            var escalaGeral: any[] = []

            if (escalasExistentes) {
                escalasExistentes.forEach(escala => {
                    var dataFormatada = FormataData(escala.dt_culto)
                    var dados = {
                        id: escala.id,
                        ministro: escala.ministro,
                        soprano_1: escala.soprano[0],
                        soprano_2: escala.soprano[1],
                        contralto_1: escala.contralto[0],
                        contralto_2: escala.contralto[1],
                        tenor_1: escala.tenor[0],
                        tenor_2: escala.tenor[1],
                        teclado_1: escala.teclado[0],
                        teclado_2: escala.teclado[1],
                        violao: escala.violao,
                        guitarra: escala.guitarra,
                        baixo: escala.baixo,
                        baterista: escala.bateria,
                        dia: dataFormatada
                    }
                    escalaGeral.push(dados)
                })

                return escalaGeral
            }

            return { error: "Erro ao tentar consultar os dados das escalas" }  // Melhor retornar um objeto de erro

        } catch (error) {
            console.error(error)  // Logando o erro real para depuração
            return { error: "Erro interno!" }  // Retornando um objeto de erro
        }
    }

}

export { EscalasServices }