export function countSheep(num: number): string {
  /* let cadena: string = "";
  for (let i: number = 1; i <= num; i++ ) {
    cadena += i.toString() + " sheep...";
  }
  return cadena; */
  return Array(num)
    .fill("")
    .map((v, i) => `${i + 1} sheep...`)
    .join("");
}
