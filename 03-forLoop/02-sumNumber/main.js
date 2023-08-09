// let sum = 0;

// for (let u = 1; u <= 100; u++ ) {
//     // console.log(u);
//     sum = sum + u;
// }
// console.log (sum); // 5050


// //////////////////////////////
// //  2. ผลรวมเลขคู่ม คี่
// let sumEven = 0;
// let sumOdd = 0;
// let sum = 0;

// for (let u = 1; u <= 100; u++ ) {
//     sum += u;
//     if (u % 2 == 0) sumEven += i;
//     else sumOdd += i;
// }
// console.log (sumEven, sum - sumEven, sumOdd);

////////////////////////////////
// 3. หาผลรวมของเลขที่หาร 2 ลงตัว ยกกำลังสอง (2^2 + 4^2 + ...) ลบด้วยผลรวมของเลขที่หาร 3 ลงตัว ยกกำลัง 2 (3^2 + 6^2 + ...)

let sumEvenSquare = 0;
let sumThirdSquare = 0;

for (let i = 1; i <= 100; i++ ) {
    if ( i % 2 === 0) {
        sumEvenSquare = sumEvenSquare + i ** 2;
    }

    if (i % 3 === 0) {
        sumThirdSquare = sumThirdSquare + i ** 2;
    }
}
console.log(sumEvenSquare - sumThirdSquare)

