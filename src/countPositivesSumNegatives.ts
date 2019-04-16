import { isEmptyStatement } from "@babel/types";

export function countPositivesSumNegatives(numbers: number[]): number[]  {
    if ( (numbers !== []) && (numbers !== null) ) {
        let count: number = 0;
        let sum: number = 0;
        let result: number[] = [0, 0];
        numbers.forEach( (x) => {
            if (x > 0) {
              count++;
            } else if (x < 0 ) {
              sum += x;
            }
        });
        result[0] = count;
        result[1] = sum;
        return result;
    } else {
        return [];
    }
}
