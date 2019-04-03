export function perimeter(figuras: number): number {
    const perimeters: number[] = [];
    let suma: number = 0;
    perimeters[0] = 1;
    perimeters[1] = 1;
    suma = perimeters[1] + perimeters[0];
    for (let i: number = 2; i <= figuras; i++ ) {
        perimeters[i] = perimeters[i - 1] + perimeters[i - 2];
        suma += perimeters[i];
    }
    return suma * 4;
}
