export function shortLongShort(a: string, b: string) {
    // let cadena: string = "";
    // if ( a.length > b.length ) {
    //     cadena = b + a + b;
    // } else if ( b.length > a.length ) {
    //     cadena = a + b + a;
    // }
    // return cadena;
    return a.length > b.length ? b + a + b : a + b + a;
}
