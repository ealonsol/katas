export function areaOfPolygonInsideCircle(circleRadius: number, numberOfSides: number): number {
    /*return redondeo( numberOfSides * Math.pow(circleRadius, 2) *
            Math.sin(180 / numberOfSides) *  Math.cos(180 / numberOfSides), 3);*/
    const angle: number = calcAngulo(numberOfSides);
    const cantSides: number = calcSides(circleRadius, angle);
    return calculoArea(numberOfSides, numberOfSides, angle);
}

export function redondeo(flotante: number, decimales: number): number {
    return Math.round(flotante * Math.pow(10, decimales)) / Math.pow(10, decimales);
}

export function calcAngulo(numberSides: number): number {
    return numberSides = 360 / numberSides;
}

export function calcSides(Radius: number, angle: number): number {
    return Radius * 2 * Math.sin(angle / 2);
}

export function calculoArea(numberOfSides: number, longSides: number, angle: number): number {
    return (numberOfSides * Math.pow(longSides, 2)) / ( 4 * Math.tan(angle * Math.PI / 180 ) );
}
