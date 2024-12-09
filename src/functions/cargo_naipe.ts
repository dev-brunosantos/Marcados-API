export function EscolherCargo(cargo: string, cargoId: number) {
    switch (cargo) {
        case "Ministro":
            cargoId = 2
            break;
        case "Vocal":
            cargoId = 3
            break;
        case "Musico":
            cargoId = 4
            break;
        default:
            return "Não existe esse cargo."
    }
}

export function EscolherNaipe(naipe: string, naipeId: number) {
    switch (naipe) {
        case "Soprano":
            naipeId = 1
            break;
        case "Contralto":
            naipeId = 2
            break;
        case "Tenor":
            naipeId = 3
            break;
        case "Sax":
            naipeId = 4
            break;
        case "Teclado":
            naipeId = 5
            break;
        case "Violão":
            naipeId = 6
            break;
        case "Guitarra":
            naipeId = 7
            break;
        case "Baixo":
            naipeId = 8
            break;
        case "Bateria":
            naipeId = 9
            break;
        default:
            return "Não existe esse naipe."
    }
}