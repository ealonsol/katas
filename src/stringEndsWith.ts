export function solution(str: string, ending: string): boolean {
  let cadenaExtraida: string = "";
  cadenaExtraida = str.substr(str.length - ending.length, ending.length);
  if (cadenaExtraida === ending) {
    return true;
  } else {
    return false;
  }
}
