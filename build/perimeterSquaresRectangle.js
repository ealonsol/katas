"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function perimeter(figuras) {
    var perimeters = [];
    var suma = 0;
    perimeters[0] = 1;
    perimeters[1] = 1;
    for (var i = 2; i <= figuras; i++) {
        perimeters[i] = perimeters[i - 1] + perimeters[i - 2];
    }
    for (var i = 0; i <= perimeters.length - 1; i++) {
        suma += perimeters[i];
    }
    console.log(suma * 4);
    return suma * 4;
}
exports.perimeter = perimeter;
perimeter(7);
//# sourceMappingURL=perimeterSquaresRectangle.js.map