/**
 * for (var i = 1; i <= 1000; i++) {
    console.log(i);
}
 */

/**
 * function getRandNumber(min, max, length) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i]=(Math.floor(Math.random() * (max-min)) + min);
    }
    return result;
}
console.log(getRandNumber(3,9,6));
 */

/**
 * var sum = 0;

function getTotal(arr) {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(getTotal([4,5,3,5]))

 */

/**
var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(arr) {
    var total = 0;
    for (var key in arr) {
        total += arr[key].price;
    }
    return total;
}

// Expected results:
console.log(getTotal(orders)); // Output: 8700000

*/

/**
function run(object) {
    var result = [];
    for (var key in object) {
        result.push(`Thuộc tính ${key} có giá trị ${object[`${key}`]}`);
    }

    return result;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]

 */

var i= 0;  
do {  
    console.log(i);  
    i++;  
} while (i<10);

