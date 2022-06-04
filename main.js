
// Khai bao bien
// var fullName = 'Nguyen Manh Trung';
// var age = '24';

// /** */
// var result = 'A' && 0 && NaN && 'B' && 'C';
// console.log(result)

// Viết code tại đây

// function isNumber(value) {
//     if (isNaN(value) == true) {
//         return false;
//     }
//     else if (typeof value == 'number') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


// // Kì vọng đạt được
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / 'abc')); // false

// var languages = ['Javascript', 'PHP', 'Ruby'];

// console.log(languages.slice(-3,-1))
// console.log(languages)

// function joinWithCharacter(array, charactor) {
//     return array.join(charactor)
// }


// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// Viết hàm tại đây

// function getLastElement(array) {
//     return array.slice(0,1);
// };


// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// var mang1 = ['123', 213, 'Trung', true];


// var getRandomItem = function(array) {
//     return array[Math.floor(Math.random() * array.length)]
// }
// console.log(mang1[(Math.floor(Math.random() * mang1.length))])

