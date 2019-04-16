export function noSpace(x: string): string {
    let cadenaFinal: string = "";
    for (const iterator of x) {
        if (iterator !== " ") {
            cadenaFinal += iterator;
        }
    }
    /*
    for (let i: number = 0; i< x.length; i++ ) {
        if (x[i] !== " ") {
            cadenaFinal += x[i];
        }
    }*/
    return cadenaFinal;
    //return x.split(" ").filter((item) => item !== "").join("");
    //return x.split(/\s*/g).join("");
}

//export const noSpace = (s: string ) => s.replace(/ /g, "");