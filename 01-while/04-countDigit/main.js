let n = +prompt("Enter Number");
// console.log(n);

//Pattern Recognite
// 1150/ 10 => 115 => count 1
// 115 / 10 => 11.5 => count 2
// 11.5 / 10 => 1.15 => count 3
// 1.15 /10 => 0.115 => count 4

let count = 0;


while (n>=1) {
    // console.log(n)
    count++;
    n = n / 10;
}

console.log(count);