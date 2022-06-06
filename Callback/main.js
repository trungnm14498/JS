// function sumCb(a, b) {
//     return a+b
// }

// function subCb(a, b) {
//     return a-b
// }

// function multiCb(a, b) {
//     return a*b
// }

// function divCb(a, b) {
//     return a/b
// }

// function caculate(a, b, cb) {
//     return cb(a, b);
// }

// // Expected results
// // caculate(1, 2, sumCb) // Output: 3
// // caculate(1, 2, subCb) // Output: -1
// // caculate(1, 2, multiCb) // Output: 2
// // caculate(3, 1, divCb) // Output: 3

// console.log(caculate(1,2, sumCb))

var myArray = ['Hekko', 'Assaw', 'Khdbq']
var result = [];

Array.prototype.forEach2 = function(callback){
    
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this);
        }
    }
}

// myArray.forEach2(function(e, i){
//     return result.push(`${e} is ${i} index`) 
// })

Array.prototype.myMap = function(cb) {
    
    var output = []
    for (var i in this){
        if (this.hasOwnProperty(i))
        {   
            var result = cb(this[i],i,this)
            output.push(result)
        }
    }
    return output
}

// Expected results
const numbers = [1, 2, 3 ,4];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) 
// Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) 
// Output: [0, 2, 6]

Array.prototype.myFilter = function(cb) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = cb(this[index], index, this)
            if(result) {
                output.push(this[index])
            }
        }
    }
    return output
}


console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
}))


console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
}))

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
}))

Array.prototype.mySome = function(cb) { 
    for (var index in this) {
        if(this.hasOwnProperty(index)) {
            if(cb(this[index], index, this)) 
                return true
        }
    }
    return false
}



