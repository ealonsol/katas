import { solution } from "../src/stringEndsWith";

test("Probando solution con tres caracteres", () => {
    expect(solution("abcde", "cde")).toBe(true);
});

test("Probando solution con dos caracteres", () => {
    expect(solution("edwin", "in")).toBe(true);
});

test("Probando solution con un caracter", () => {
    expect(solution("edwin", "n")).toBe(true);
});

test("Probando solution con un caracter, resultado falso", () => {
    expect(solution("edwin", "i")).toBe(false);
});
