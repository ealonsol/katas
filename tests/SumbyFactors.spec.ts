import { encontrarNumeroArreglo, encontrarNumeroArregloDevolverlo,
    esPrimo, factoresPrimos, sumaValoresFactoresArreglo,
     sumOfDivided } from "../src/SumbyFactors";
describe("haciendo pruebas al algoritmo de factores primos", () => {
    //const esperado = [ [2, 12], [3, 27], [5, 15] ];
    const factores = [ 3, 5 ];

    test("Probando con el arreglo [15,21,24,30,45] ", () => {
        expect(sumOfDivided([15, 21, 24, 30, 45])).
            toEqual(expect.
                arrayContaining( [ [2, 3, 5, 7] ] ));
    });

    test("Probando con el arreglo [12, 15] ", () => {
        expect(sumOfDivided([12, 15])).toEqual(expect.arrayContaining([ [2, 12], [3, 27], [5, 15] ]));
    });

    test("Probando numero primo 2 ", () => {
        expect(esPrimo(2)).toBe(true);
    });
    test("Probando numero primo 5 ", () => {
        expect(esPrimo(97)).toBe(true);
    });
    test("Probando numero primo 4 ", () => {
        expect(esPrimo(4)).toBe(false);
    });
    test("Probando numero primo 30 ", () => {
        expect(esPrimo(30)).toBe(false);
    });
    test("Probando numero primo 29 ", () => {
        expect(esPrimo(29)).toBe(true);
    });

    test("devolviendo factores primos ", () => {
        expect(factoresPrimos(45)).toEqual(expect.arrayContaining(factores));
    });
    test("devolviendo factores primos ", () => {
        expect(factoresPrimos(21)).toEqual(expect.arrayContaining([3, 7]));
    });
    test("buscando numero en arreglo ", () => {
        expect(encontrarNumeroArreglo(60, [29, 30, 45, 58, 60])).toBe(true);
    });
    test("buscando numero en arreglo ", () => {
        expect(encontrarNumeroArreglo(1, [29, 30, 45, 58, 60])).toBe(false);
    });

    test("encontrando numero en arreglo ", () => {
        expect(encontrarNumeroArregloDevolverlo(29, [29, 30, 45, 58, 60])).toBe(29);
    });
    test("encontrando numero en arreglo ", () => {
        expect(encontrarNumeroArregloDevolverlo(1, [29, 30, 45, 58, 60])).toBe(-1);
    });
    test("suma todos los numeros que son divisores ", () => {
        expect(sumaValoresFactoresArreglo([29, 30, 45, 58, 60], 2 )).toBe(148);
    });
    test("suma todos los numeros que son divisores ", () => {
        expect(sumaValoresFactoresArreglo([29, 30, 45, 58, 60], 3 )).toBe(135);
    });
    test("suma todos los numeros que son divisores ", () => {
        expect(sumaValoresFactoresArreglo([29, 30, 45, 58, 60], 2 )).toBe(140);
    });
    test("suma todos los numeros que son divisores ", () => {
        expect(sumaValoresFactoresArreglo([15, 21, 24, 30, 45], 7 )).toBe(21);
    });
});
