export function EscolherCargo(cargo: string): number {
    switch (cargo) {
        case "Ministro":
            return 2;
        case "Vocal":
            return 3;
        case "Musico":
            return 4;
        default:
            throw new Error("Não existe esse cargo.")
    }
}

export function EscolherNaipe(naipe: string): number {
    switch (naipe) {
        case "Soprano":
            return 1
        case "Contralto":
            return 2
        case "Tenor":
            return 3
        case "Sax":
            return 4
        case "Teclado":
            return 5
            
        case "Violão":
            return 6
        case "Guitarra":
            return 7
        case "Baixo":
            return 8
        case "Bateria":
            return 9
        default:
            throw new Error("Não existe esse naipe.")
    }
}