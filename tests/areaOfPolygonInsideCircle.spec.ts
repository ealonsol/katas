import { areaOfPolygonInsideCircle, calculoArea, redondeo } from "../src/areaOfPolygonInsideCircle";

describe("probando areas", () => {
    test("6, 3 , 30°", () => {
        expect( calculoArea(6, 3, 30)).toBe(23.38);
    });
});

describe("probando redondeos", () => {
    test("redondeo del numero 3.4513", () => {
        expect( redondeo(3.4513, 3)).toBe(3.451);
    });
});

describe("Pruebas  básicas", () => {
    test("Primera prueba básica con parametros de 3 y 3", () => {
        expect( areaOfPolygonInsideCircle(3, 3)).toBe(11.691);
    });
    test("Primera prueba básica con parametros de 2 y 4", () => {
        expect( areaOfPolygonInsideCircle(2, 4)).toBe(8);
    });
    test("Primera prueba básica con parametros de 2.5 y 5", () => {
        expect( areaOfPolygonInsideCircle(2.5, 5)).toBe(14.86);
    });
});
