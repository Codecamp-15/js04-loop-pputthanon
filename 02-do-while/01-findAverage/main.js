let num;
let isNan;
let isEmpty;
let outOfRange;
let average;
let count = 0;
let sum = 0;
let isNull;

do {
    num = +prompt("Enter your Number");
    
    isNull = num == null;
    isEmpty =  num.trim === "";
    isNan = isNaN(num);
    outOfRange = Number(num) <= 0

    if (isEmpty || isNan || isNull || outOfRange) {
        count--;
    } else {
        count++;
        sum = sum + num;
        average = sum / count;
    }
} while (!(isEmpty || isNan || isNull || outOfRange));

console.log(`Summary : ${sum}`);
console.log(`Average : ${average}`);