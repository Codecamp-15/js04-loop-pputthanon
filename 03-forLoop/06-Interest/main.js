// 100,000 *(2.5/100) + 100,000
// 100,000 *(0.025 + 1)

let sum = 100000;

for (let y = 1 ; y < 11 ; y++) {
    sum = sum * 1.025;

}
console.log(sum.toFixed(2))

// 128008