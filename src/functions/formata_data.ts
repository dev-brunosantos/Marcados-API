export function FormataData(data: Date): string {
    let dataInicial = data.toISOString().slice(0, 10).split("-")
    let dataFormatada = dataInicial[2] + "/" + dataInicial[1] + "/" + dataInicial[0]
    return dataFormatada
}