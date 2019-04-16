export function findSmallestInt(args: number[]): number {
//    let menor: number = args[0];
//    args.forEach((element) => {
//        if ( element < menor ) {
//            menor = element;
//        }
//    });
//    return menor;
//return Math.min(...args);
//return args.reduce((a, b) => Math.min(a, b));
//return args.reduce((min, value) => value < min ? value : min, args[0]);
  args.sort((x, y) => x > y ? 1 : -1);
  return args[0];
}
