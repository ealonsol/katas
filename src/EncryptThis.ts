export const encryptThis = (str: string): string => {
    if ( str === "") {return str };
    let cadenaArray: string [] = [];
    cadenaArray = str.split(" ");
    for (let i: number = 0; i <= cadenaArray.length - 1; i++) {
        cadenaArray[i] = encryptThisWord(cadenaArray[i]);
    }
    return cadenaArray.join(" ");
};

export const encryptThisWord = (str: string ): string => {
    const carInicial: string = str.charCodeAt(0).toString();
    const carSegundo: string = str[1];
    const carFinal: string = str[str.length - 1];
    const carIntermedio: string = str.substring(2, str.length - 1);

    if (str.length > 2) {
        return carInicial + carFinal + carIntermedio + carSegundo;
    } else if (str.length > 1) {
        return carInicial + str.substring(1, str.length);
    }
    return carInicial;
};
