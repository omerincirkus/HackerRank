// You are in charge of the cake for a child's birthday.
// You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

const candles: number[] = [3, 2, 3, 3, 5, 7, 3, 9];

function birthdayCakeCandles(candles: number[]): number {
    let max = Math.max(...candles);
    return candles.filter(candle => candle === max).length;
}

console.log(birthdayCakeCandles(candles));