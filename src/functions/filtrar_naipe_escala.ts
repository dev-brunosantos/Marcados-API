export function filtrarNaipe(naipe: string[]):string[] {
    let pessoa1 = Math.floor(Math.random() * naipe.length)
    let pessoa2 = Math.floor(Math.random() * naipe.length)
    
    if(pessoa2 === pessoa1) {
        pessoa2 = Math.floor(Math.random() * naipe.length)
    }
    return [naipe[pessoa1], naipe[pessoa2]]
}