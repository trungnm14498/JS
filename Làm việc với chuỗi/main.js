// var myString = 'Hoc JS tai JS F8!'

// // console.log(myString.length);
// // console.log(myString.indexOf('JS',12));
// // console.log(myString.slice(0,-1)); 
// console.log(myString.split(' '));

var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function stringToArray(str) {
    return str.split(', ');
}

// Expected results
stringToArray(coursesStr) // Output: ['HTML & CSS', 'JavaScript', 'ReactJS']