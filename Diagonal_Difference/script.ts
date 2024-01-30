//     Given a square matrix, calculate the absolute difference between the sums of its diagonals.
//
//     For example, the square matrix arr is shown below:
//
//     1 2 3
//     4 5 6
//     9 8 9

function diagonalDifference(matrix: string | any[]):number {
    let primaryDiagonalSum: number = 0;
    let secondaryDiagonalSum: number = 0;
    const n: number = matrix.length;

    for (let i = 0; i < n; i++) {
        primaryDiagonalSum += matrix[i][i];
        secondaryDiagonalSum += matrix[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];
console.log(diagonalDifference(matrix));
