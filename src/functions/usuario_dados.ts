export function FormataDados(
    id: string, nome: string, sobrenome: string, email: string, cargo: string, naipe: string, cadastro: string, atualizacao: string
) {
    let dados = {
        id: id,
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        cargo: cargo,
        naipe: naipe,
        cadastro: cadastro,
        atualizacao: atualizacao
    }

    return dados
}