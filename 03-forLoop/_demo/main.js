console.log ('Learning counting loop');

console.log("starting...");
//() = parethesis = วงเล็บ
// {} = bracket = ปีกกา
// [] = square bracket = ก้ามปู

// for (let i = 0; i < 3; i++) {
//     console.log(' >> Hello');
// }


// //EX2 : FizzBuzz
// // for (let i = 1; i++ < 20;)
// for (let i = 1; i <= 20; i = i + 1) {
//         if (i % 3 == 0 && i % 5 == 0) console.log ("FizzBuzz");
//         else if (i % 5 == 0) console.log ("Buzz");
//         else if (i % 3 == 0) console.log ("Fizz");
//         else console.log(i);
// }



// EX3 : Skip Fizz
// for 


// for (let i = 1; i <= 20; i++) {
//     // i = 2 log(2), log(even)
//     if (i % 2 == 0) console.log(i);
//     else continue; // update ค่า และเริ่มรัน loop รอบถัดไป
//     console.log('even');
// }



//let str = ""
//      for(let i = 1 ; i <= 10; i++){
    //     Guard
    //  if(i % 3 == 0) continue; // หารเอาเศษ 3 ลงตัว เจอ continue จะข้ามไป skip
    // str = str + 1




// EX4 : Concat String

    
// for (let i = 1; i <= 10; i++) {
//     // Guard
//     if (i % 3 == 0) continue;
//     str += i;
//     // "" + 1 => "1"
//     // "1" + 2 => "12"
// }
// console.log(str); // "12345678910"



// EX5 : remove vowel (a,e,i,o,u)

// let src = 'codecamp';
// let res = ''; // cdcmp

// src.length ==> 8
// src[0] ==> c
// src[1] ==> o

// for (let i = 0; i < src.length; i++) {
//     // console.log(i, src[i]);
//     let c = src[i];
//     if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') continue;
//     res = res + src[i];
//     // '' + src[0] == '' + 'c' => 'c'
//     // 'c' + src[1] == 'c' + 'o' => 'co'
// }
//  console.log(res);


// Advance : Nested Loop;
// Multiplication Table

for(let i = 2; i <= 3; i++) {
    console.log(`เริ่มมท่องสูตรคูณแม่ ${i}`);
    for(let j = 1; j <= 12; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log ('\n');
}

console.log("End...");


