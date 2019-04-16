import { abbrevName } from "../src/abbrevName";
test("Probando abbrevName", () => {
    expect(abbrevName("Sam Harris")).toBe("S.H");
    expect(abbrevName("Patrick Feenan")).toBe("P.F");
    expect(abbrevName("R Favuzzi")).toBe("R.F");
});
