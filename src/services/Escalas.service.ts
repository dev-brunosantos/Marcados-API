import { prismaConfig } from "../config/prismaConfig";
import { criarEscala } from "../functions/criar_escala";
import { FormataData } from "../functions/formata_data";

const { escalas } = prismaConfig;

class EscalasServices {
    async CriarEscala(titulo: string) {
        try {
            let dados = await criarEscala()
            const {
                ministro, sopranos, contraltos, tenores, tecladistas,
                violao, guitarrista, baixista, baterista
            } = dados;

            if (dados) {
                return await escalas.create({
                    data: {
                        titulo,
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
                    titulo: true,
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
                        titulo: escala.titulo,
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

            return { error: "Erro ao tentar consultar os dados das escalas" }

        } catch (error) {
            console.error(error)
            return { error: "Erro interno!" }
        }
    }

    async ListarCulto(titulo: string) {
        try {
            const cultoExistente = await escalas.findFirst({
                where: { titulo: { equals: titulo, mode: 'insensitive' } },
                select: {
                    id: true,
                    titulo: true,
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

            if (cultoExistente) {
                const {
                    id, titulo, ministro, soprano, contralto, tenor, 
                    teclado, violao, guitarra, baixo, bateria, dt_culto
                } = cultoExistente

                var dataFormatada = FormataData(dt_culto)

                var culto = {
                    id: id,
                    titulo: titulo,
                    ministro: ministro,
                    soprano_1: soprano[0],
                    soprano_2: soprano[1],
                    contralto_1: contralto[0],
                    contralto_2: contralto[1],
                    tenor_1: tenor[0],
                    tenor_2: tenor[1],
                    teclado_1: teclado[0],
                    teclado_2: teclado[1],
                    violao: violao,
                    guitarra: guitarra,
                    baixo: baixo,
                    baterista: bateria,
                    dia: dataFormatada
                }
                return culto
            }
            return "Não existe o culto informado."
        } catch (error) {
            console.log(error)
            return "Erro interno"
        }
    }

    async EditarEscala(id: string, culto: string) {
        try {
            const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            const match = culto.match(regex);

            if (!match) {
                return { erro: "Data informada no formato inváltituloo. Use dd/MM/yyyy." };
            }

            const [_, dia, mes, ano] = match;

            const dataFormatada = new Date(`${ano}-${mes}-${dia}T00:00:00.000Z`).toISOString();

            const buscarTeste = await escalas.findMany({
                where: { id }
            });

            if (buscarTeste) {
                const edicao = await escalas.update({
                    where: { id },
                    data: {
                        dt_culto: dataFormatada
                    }
                });

                return edicao;
            }

            return "Não encontramos a escala informada.";
        } catch (error) {
            return { erro: error || "Erro desconhectituloo." };
        }
    }

    async ApagarEscala(id: string) {
        try {
            const tituloEscalaExistente = await escalas.findFirst({ 
                where: { id } 
            })

            if(tituloEscalaExistente) {

                const dataFormatada = FormataData(tituloEscalaExistente.dt_culto)

                await escalas.delete({where: { id } })
                return `Escala do dia ${dataFormatada} foi escluída com sucesso.`
            }

            return "Não foi encontrado nenhuma escala com esse titulo"

        } catch (error) {
            console.log(error)
            return "Erro interno"
        }
    }
}

export { EscalasServices }