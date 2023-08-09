
// for(i = 2 ; i <= 100 ; i++) {
//     let sum = 0;
//     for(j = 2 ; j<= 100 ; j++) {
//         if (i % j == 0 ){
//             sum = sum + 1
//         }
//     }
//     if (sum > 1) continue
//     else console.log(i)
// }



for (let n = 2; n <= 100 ; n++){
    let isPrime = true; //flag

    for(let divider = 2; divider < n; divider++) {
        //divider 2,3,4,...,n-1
        if (n % divider == 0) {
            isPrime = false;
            break; // ใส่เพื่อให้หยุดตั้งแต่ตัวแรกที่หารลงตัว ex. n=6
            // 6/2 = 3 หารลงตัว ก็จะหยุดตั้งแต่ตัวแรกเลย
        }
        // n=2 5/2 = 2.5 => isPrime = false
        // n=3 5/3 = 1.66 => isPrime = false
        // n=4 5/4 = 1.25 => isPrime = false
        // n=5 5/5 = 1 => isPrime = false
    }
    if (isPrime) console.log(n);
}


// if (isPrime) console.log(`number${n} is Prime Number`);
// else alert (`number ${n} is not Prime Number`);