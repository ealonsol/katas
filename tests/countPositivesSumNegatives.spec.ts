import { countPositivesSumNegatives } from "../src/countPositivesSumNegatives";
describe('Probando suma de #s negativos y cuenta de #s positivos',() => {
    test("Probando primer array ", () => {
        expect(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])).toEqual([10, -65]);
    });

    test("Probando segundo array ", () => {
        expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toEqual([8, -50]);
    });
});
