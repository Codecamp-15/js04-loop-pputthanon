console.log('Learn while loop');

// ประเภทของ Loop
// - Condition loop : ตัดสินใจว่าจะรันต่อไหม จาก Boolean
// - Counting loop : ตัดสินใจว่าจะทำต่อไหม จาก ตัวเลข
// - List loop : ตัดสินใจว่าจะทำต่อไหม จาก จำนวนของในรายการ

console.log("starting...");

// let i = 1;
// while (i <= 20) {
// //loop block
//     if (i % 5 == 0){
//         console.log(`${1} : High Five`);
//     } else if (i % 3 == 0) {
//         console.log(i);
//     }


//     i++;
// }

// FizzBuzz
// Range : 1-20;
// divided by 3 : PTINT Fizz
// divided by 5 : PRINT Buzz
// divided by 3 and 5 : PRINT FizzBuzz
// others : PRINT number

// handle ตัวที่มีปัญหามากสุดก่อน

let i = 1;
while (i <= 20) {
       if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuxzz");
      } else if (i % 3 === 0) {
            console.log("Fizz");
      } else if (i % 5 === 0) {
            console.log("Buzz");
      } else {console.log(i)
    }

    i++;
}




console.log("end...");