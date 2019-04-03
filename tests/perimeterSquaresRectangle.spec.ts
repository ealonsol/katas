import { perimeter } from "../src/perimeterSquaresRectangle";

test("Probando con 5 figuras", () => {
    expect(perimeter(5)).toBe(80);
});

test("Probando con 7 figuras", () => {
    expect(perimeter(7)).toBe(216);
});

test("Probando con 20 figuras", () => {
    expect(perimeter(20)).toBe(114624);
});

test("Probando con 30 figuras", () => {
    expect(perimeter(30)).toBe(14098308);
});
