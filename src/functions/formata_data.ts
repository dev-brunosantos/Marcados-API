export function FormataData(data: Date): string[] {
    let dataFormatada = data.toISOString().slice(0, 10).split("-")
    return dataFormatada
}