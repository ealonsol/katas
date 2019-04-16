import { findSmallestInt } from "../src/smallest";

describe("Encontrando el meno ", () => {
    test("Probando con un arrary de 5 números", () => {
        expect(findSmallestInt([78, 56, 232, 12, 8])).toBe(8);
    });

    test("Probando con un arrary de 5 números", () => {
        expect(findSmallestInt([78, 56, 232, 12, 18])).toBe(12);
    });

    test("Probando con un arrary de 5 números", () => {
        expect(findSmallestInt([78, 56, 232, 412, 228])).toBe(56);
    });

});
