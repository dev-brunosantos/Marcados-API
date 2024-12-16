import { prismaConfig } from "../config/prismaConfig";
import { criarEscala } from "../functions/criar_escala";

const { escalas } = prismaConfig;

class EscalasServices {
    async CriarEscala() {
        try {
            let dados = await criarEscala()
            const { 
                ministro, sopranos, contraltos, tenores, tecladistas, 
                violao, guitarrista, baixista, baterista 
            } = dados;

            if (dados) {
                return await escalas.create({
                    data: {
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
}

export { EscalasServices }