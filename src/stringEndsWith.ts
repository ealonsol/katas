export function solution(str: string, ending: string): boolean {
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
