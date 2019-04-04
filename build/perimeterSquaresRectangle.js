"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function perimeter(figuras) {
    var perimeters = [];
    var suma = 0;
    var a = "";
    perimeters[0] = 1;
    perimeters[1] = 1;
    suma = perimeters[1] + perimeters[0];
    for (var i = 2; i <= figuras; i++) {
        perimeters[i] = perimeters[i - 1] + perimeters[i - 2];
        suma += perimeters[i];
    }
    return suma * 4;
}
exports.perimeter = perimeter;
//# sourceMappingURL=perimeterSquaresRectangle.js.map