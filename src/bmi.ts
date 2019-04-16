export function bmi(weight: number, height: number): string {
    const bmiResult: number = weight / Math.pow(height, 2);
    let stringOut: string = "";
    if (bmiResult <= 18.5) {
        stringOut = "Underweight";
    } else if ((bmiResult > 18.5) && ( bmiResult <= 25.0)) {
        stringOut = "Normal";
    } else if ((bmiResult > 25.0) && ( bmiResult <= 30.0)) {
        stringOut = "Overweight";
    } else if (bmiResult > 30)  {
        stringOut = "Obese";
    }
    return stringOut;
}
