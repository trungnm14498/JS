
// Khai bao bien
// var fullName = 'Nguyen Manh Trung';
// var age = '24';

// /** */
// var result = 'A' && 0 && NaN && 'B' && 'C';
// console.log(result)

// Viết code tại đây

function isNumber(value) {
    if (isNaN(value) == true) {
        return false;
    }
    else if (typeof value == 'number') {
        return true;
    }
    else {
        return false;
    }
}


// Kì vọng đạt được
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false