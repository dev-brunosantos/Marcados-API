import { FiltrarIntegrantes, FiltrarMinistros } from "./filtrar_integrantes"
import { filtrarNaipe } from "./filtrar_naipe_escala"

export async function criarEscala() {
    const ministro = await FiltrarMinistros("Ministro")

    const soprano = await FiltrarIntegrantes("Soprano")
    const contralto = await FiltrarIntegrantes("Contralto")
    const tenor = await FiltrarIntegrantes("Tenor")

    const teclado = await FiltrarIntegrantes("Teclado")
    const violao = await FiltrarIntegrantes("Violão")
    const guitar = await FiltrarIntegrantes("Guitarra")
    const baixo = await FiltrarIntegrantes("Baixo")
    const bateria = await FiltrarIntegrantes("Bateria")

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

    return dados
}