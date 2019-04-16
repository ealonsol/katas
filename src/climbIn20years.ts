export function stairsIn20(stairs: any[] ) {
    let sumTotal: number = 0;
    for (const iterator of stairs) {
        sumTotal += sumaArray(iterator);
    }
    return sumTotal * 20;
}

export function sumaArray(arrayNumero: number[]): number {
    let sumElement: number = 0;
    for (const iterator of arrayNumero) {
        sumElement += iterator;
    }
    return sumElement;
}
