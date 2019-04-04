"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function solution(str, ending) {
    /*let cadenaExtraida: string = "";
    cadenaExtraida = str.substr(str.length - ending.length, ending.length);
    if (cadenaExtraida === ending) {
      return true;
    } else {
      return false;
    }*/
    // return str.slice(str.length - ending.length, str.length) === ending ? true : false;
    //return str.endsWith(ending);
    //const regex = new RegExp(`${ending}$`);
    //return regex.test(str);
    return ending.length <= str.length && str.substr(-ending.length) === ending;
}
exports.solution = solution;
//# sourceMappingURL=stringEndsWith.js.map