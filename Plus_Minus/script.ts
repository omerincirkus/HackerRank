const arr: number[] = [1, 1, 0, -1, -1];

function plusMinus(arr: number[]): (string | number)[] {
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (arr[i] > 0) {
            positiveCount++;
        } else if (arr[i] < 0) {
            negativeCount++
        } else {
            zeroCount++
        }
    }
    return [parseFloat((positiveCount / n).toFixed(6)), parseFloat((negativeCount / n).toFixed(6)), parseFloat((zeroCount / n).toFixed(6))];
}

console.log(plusMinus(arr));