// 1-savol
// Ixtiyoriy arrow function yarating va unga beriladigan argument kiritilgan son bo'lsin. Kiritilgan sonning raqamlari yig'indisi topilsin.
// 2-savol
// Ixtiyoriy arrow function yarating va uning parametriga bi nechta sonlar berilsin. va o'sha sonlar yig'indisini arrayning element lari ko'rinishida ifodalang:
// masalan: [1, 22, 3] yigindisi: 26
// result=> [2,6]
// 3-savol
// Ixtiyoriy son kiritilsin va o'sha sonning kvadrati palindrome yoki palindrome emasligi topilsin algorithm function ichida bo'lsin
// 4-savol
// Ixtiyoriy 2 ta funciton yaratilsin
// 1-function ichida random sonning raqamlari yig'indisi topilsin
// va mana shu 1-function 2-funciton ni ichida ishlasin
// masala callback function yordamida bajarilsin


// TASK 1
const task1 = (number) => {
    let string = String(number);
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        result += Number(string[i]);
    }
    return result;
}
console.log(task1(123));



// TASK 2
const task2 = (numbers) => {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    let str = String(sum);
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = Number(str[i]);
    }
    return arr;
}
console.log(task2([1, 22, 3]));




// TASK 3
const task3 = (number) => {
    let square = number ** 2;
    let forwards = "";
    let backwards = "";
    for (let i of String(square)) {
        forwards += i;

    }
    let str = String(square);
    for (let i = str.length - 1; i >= 0; i--) {
        backwards += str[i];
    }
    return forwards === backwards ? "Palindrome" : "Not palindrome";
}
console.log(task3(11));



// TASK 4
const sumOfDigits = (number) => {
    let sum = 0;
    let str = String(number);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    return sum;
}
const generateRandomNumber = (sumOfDigits /* callback function */) => {
    const randomNumber = Math.floor(Math.random() * 100 + 10);
    return sumOfDigits(randomNumber);
}
console.log(generateRandomNumber(sumOfDigits));