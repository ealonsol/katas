"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(str, ending) {
    var cadenaExtraida = "";
    cadenaExtraida = str.substr(str.length - ending.length, ending.length);
    if (cadenaExtraida === ending) {
        return true;
    }
    else {
        return false;
    }
}
exports.solution = solution;
//# sourceMappingURL=stringEndsWith.js.map