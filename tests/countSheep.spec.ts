import { countSheep } from "../src/countSheep";

describe("Probando funcion countSheep ", () => {
    test("Probando con un Sheep", () => {
        expect(countSheep(1)).toBe("1 sheep...");
    });

    test("Probando con dos Sheeps", () => {
        expect(countSheep(2)).toEqual("1 sheep...2 sheep...");
    });

    test("Probando con tres Sheeps", () => {
        expect(countSheep(3)).toEqual("1 sheep...2 sheep...3 sheep...");
    });
});
