export function sumOfDivided(lst: number[]): number[][] {
    let result: number[] = [];
    let resultAux: number[] = [];
    result = factoresPrimos(lst[0]);
    for (let i: number = 1; i < lst.length; i++) {
        resultAux = factoresPrimos(i);
    }
}



export function factoresPrimos(numero: number): number[] {
    let result: number[] = [];
    for (let i: number = 2; i <= numero; i++) {
        if ( (esPrimo(i)) && (numero % i === 0)) {
            result.push(i);
        }
    }
    return result;
}
export function esPrimo(numero: number): boolean {
    let divisores: number = 0;
    for (let i: number = 1; i <= numero; i++) {
        if (numero % i === 0) {
            divisores++;
        }
    }
    if ( divisores === 2 ) {
        return true;
    } else { return false; }
}
