import { chooseBestSum } from "../src/bestTravel";

describe("probando el cálculo del mejor viaje", () => {
    test("Tres pueblos de 5", () => {
        expect( chooseBestSum(163, 3, [50, 55, 56, 57, 58])).toBe(0);
    });

    test("Tres pueblos de siete", () => {
        expect( chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87] )).toBe(0);
    });
});
