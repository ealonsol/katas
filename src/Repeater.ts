
export function repeater(str: string, n: number): string {
/*    let cadena: string = "";
    for (let i: number = 1; i <= n; i++) {
        cadena += str;
    }
    return cadena;
    // your code here
    //return str.repeat(n);
*/
    //return Array(n + 1).join(str);
    return Array(n).fill(str).join("");
}

//export const repeater = Function.prototype.call.bind(String.prototype.repeat);