
import { getCount } from "../src/VowelCount";
describe("haciendo pruebas al algoritmo de contar vocales", () => {
    test("Probando con la cadena abracadabra ", () => {
        expect(getCount("abracadabra")).toBe(5);
    });
});
