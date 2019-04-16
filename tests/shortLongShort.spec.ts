import { shortLongShort } from "../src/shortLongShort";

describe("Debe pasar pruebas básica de cadena ", () => {
    test("Primera prueba básica", () => {
        expect( shortLongShort("45", "1")).toBe("1451");
    });

    test("Segunda prueba básica", () => {
        expect( shortLongShort("13", "200")).toBe("1320013");
    });

    test("Tercera prueba básica", () => {
        expect( shortLongShort("Soon", "Me")).toBe("MeSoonMe");
    });

    test("Cuarta prueba básica", () => {
        expect( shortLongShort("U", "False")).toBe("UFalseU");
    });
});
