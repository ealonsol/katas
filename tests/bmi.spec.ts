import { bmi } from "../src/bmi";
describe("Probando los BMI ", () => {
    test("Probando cuando el BMI es normal", () => {
        expect(bmi(80, 1.80)).toBe("Normal");
    });
});
