import { esPrimo, factoresPrimos, sumOfDivided } from "../src/SumbyFactors";
describe("haciendo pruebas al algoritmo de factores primos", () => {
    const esperado = [ [2, 12], [3, 27], [5, 15] ];
    const factores = [ 3, 5 ];
    test("Probando con el arreglo [12, 15] ", () => {
        expect(sumOfDivided([12, 15])).toEqual(expect.arrayContaining(esperado));
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
});
