import { repeater } from "../src/Repeater";
test("Probando repeater", () => {
    expect(repeater("a", 5)).toBe("aaaaa");
    expect(repeater("Na", 16)).toBe("NaNaNaNaNaNaNaNaNaNaNaNaNaNaNaNa");
    expect(repeater("Wub ", 6)).toBe("Wub Wub Wub Wub Wub Wub ");
});
