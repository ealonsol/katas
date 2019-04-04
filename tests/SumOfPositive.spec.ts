import { positiveSum } from "../src/SumOfPositive";
test("Probando sumapostiva sin negativos ", () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
});

test("Probando sumapositiva solo negativos ", () => {
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
});

test("Probando sumapositiva solo negativos ", () => {
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
});

test("Probando sumapositiva positivos y negativos ", () => {
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
});
