function minMaxSum(arr: any[]) {
    arr.sort((a, b) => a - b);
    let minSum = arr.slice(0, -1).reduce((a, b) => a + b, 0);
    let maxSum = arr.slice(1).reduce((a, b) => a + b, 0);
    console.log(minSum + ' ' + maxSum);
}

// Example usage:
minMaxSum([1, 2, 6, 4, 5]);


