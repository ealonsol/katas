import { printArray } from "../src/printArray";
test("Probando printArray con arreglo de numeros", () => {
    expect(printArray([2, 4, 5, 2])).toBe("2,4,5,2");
});

test("Probando printArray con arreglo de letras", () => {
    expect(printArray(["h", "o", "l", "a"])).toBe("h,o,l,a");
});
