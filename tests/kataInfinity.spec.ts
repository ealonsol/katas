import { going } from "../src/kataInfinity";

test("Fixed Tests going", () => {
    expect(going(5)).toEqual(1.275);
    expect(going(6)).toEqual(1.2125);
    expect(going(7)).toEqual(1.173214);
});
