const n: number = 6;

function stairCase(n: number): void {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let hashes = '#'.repeat(i);
        console.log(spaces + hashes);
    }
}

stairCase(n);


