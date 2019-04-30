export function sumOfDivided(lst: number[]): number[][] {
    let factoresPrimosArreglo: number[] = [];
    let factoresPrimosArregloAux: number[] = [];
    let sumaFactoresPrimosArreglo: number[] = [];
    factoresPrimosArreglo = factoresPrimos(lst[0]);

    for (let i: number = 1; i < lst.length; i++) {
        factoresPrimosArregloAux = factoresPrimos(lst[i]);
        for (let index: number = 0; index < factoresPrimosArregloAux.length;  index++ ) {
            if (encontrarNumeroArregloDevolverlo(factoresPrimosArregloAux[index],
                factoresPrimosArreglo) === -1 ) {
                factoresPrimosArreglo.push(factoresPrimosArregloAux[index]);
            }
        }
    }
    factoresPrimosArreglo = factoresPrimosArreglo.sort();
    for (let index = 0; index < factoresPrimosArreglo.length; index++) {
        let auxiliar: number = factoresPrimosArreglo[index];
        sumaFactoresPrimosArreglo.push([ auxiliar, sumaValoresFactoresArreglo(lst, factoresPrimosArreglo[index]) ]);
        console.log(factoresPrimosArreglo[index]);
    }

    return sumaFactoresPrimosArreglo;
}

export function sumaValoresFactoresArreglo(numeroArreglo: number[], divisor: number): number {
    let suma: number = 0;
    for (let index: number = 0; index < numeroArreglo.length; index++ ) {
         if ( esNumeroDivisor(numeroArreglo[index], divisor )) {
             suma += numeroArreglo[index];
         }
    }
    return suma;
}

export function encontrarNumeroArreglo(numero: number, arreglo: number[]): boolean {
    const encontrado = arreglo.find((element) => {
        return element === numero ;
      });
    return encontrado ? true : false;
}

export function encontrarNumeroArregloDevolverlo(numero: number, arreglo: number[]): number {
    const encontrado = arreglo.find((element) => {
        return element === numero ;
      });
      return encontrado ? encontrado : -1;
}

export function factoresPrimos(numero: number): number[] {
    const result: number[] = [];
    for (let i: number = 2; i <= numero; i++) {
        if ( (esPrimo(i)) && (esNumeroDivisor(numero, i))) {
            result.push(i);
        }
    }
    return result;
}
export function esPrimo(numero: number): boolean {
    let divisores: number = 0;
    for (let i: number = 1; i <= numero; i++) {
        if (esNumeroDivisor(numero, i)) {
            divisores++;
        }
    }
    if ( divisores === 2 ) {
        return true;
    } else { return false; }
}

export function esNumeroDivisor(dividendo: number, divisor: number ): boolean {
    return dividendo % divisor === 0 ? true : false;
}

(() => {
    console.log(sumOfDivided([15, 21, 24, 30, 45]));
})();
