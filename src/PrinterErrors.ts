
export function printerError(s: string): string {
    let cuenta: number = 0;
    for (let index = 0; index < s.length; index++) {
        if ( (s.charCodeAt(index) >= 110) && (s.charCodeAt(index) <= 122) ) {
            cuenta++;
        }
    }
    return cuenta.toString() + "/" + s.length.toString();
}
