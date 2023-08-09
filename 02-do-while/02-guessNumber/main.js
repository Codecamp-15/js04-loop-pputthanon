// let ansNumber = prompt("Enter your magic number") // => null, string : ", "    ", "dssd", "12"

// let isNull = ansNumber == null ;
// let isEmpty = ansNumber.trim() === "";
// let isNan = isNaN(ansNumber);
// let isValid = ansNumber == null || ansNumber.trim() === "" || isNaN(ansNumber)
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 || Number(ansNumber) <= 99;

// if (isValid) {
//     alert("Invalid Input");
// } else if (outOfRange) {
//     alert("Invalid Range");
// } else if (isInRange) {
//     alert("Try to guess number"); // Program : player 2
// }



// V.2 รับ Input เรื่อยๆจนกว่าจะพิมพ์ถูก / ให้กด Esc เพื่อจบโปรแกรมได้

// let ansNumber = ""
// let isNan;
// let isEmpty;
// outOfRange;

do {
    ansNumber = prompt("Enter your magic number") || "";

    isEmpty = ansNumber.trim === "";
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99 ;

    if (isEmpty || isNan) {
        alert("Invalid Input, Try 1-99");
        } else if (outOfRange) {
            alert("Invalid Range, Try 1-99");
        }
} while (isEmpty || isNan || isEmpty || isNan);





//Program 2 : Guess
// ทายซ้ำ
// Hint Too High, Too Low
// Alert Correct
// ทายได้ไม่เกิน 5 ครั้ง

let guessNumber;


do {
   
    guessNumber = prompt("Enter your answer") || "";
    isEmpty = ansNumber.trim === "";
    isNan = isNaN(ansNumber);
    outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99 ;

    if (isEmpty || isNan) {
        alert("Invalid Input, Try 1-99");
        } else if (outOfRange) {
            alert("Invalid Range, Try 1-99");
        } else if (+guessNumber > +ansNumber){
            alert("Too High")
        } else if (+guessNumber < +ansNumber){
            alert("Too Low")
        } else if (+guessNumber === +ansNumber){
            alert("Correct")
        }
    
} while (+guessNumber != +ansNumber);


