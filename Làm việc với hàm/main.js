function showDialog() {
    alert('Hi, xin chào các bạn');
}

// showDialog();

function forExample() {
    var myString = '';
    for (param of arguments) {
        myString += `${param} - `;
    }
    myString = myString.slice(0,-2);
    console.log(myString);
}

// forExample('Hello', 123, 'Toi la Trung');

function sum(a, b) {
    return a+b;
}

// var result = sum(2,5);
// console.log(result);

/**
 * Hosting:
 * Declaration Function có thể gọi ở bất cứ đâu nếu đã định nghĩa => Gọi trước định nghĩa sau => Ok
 * Expresstion Function chỉ có thể gọi sau khi được định nghĩa. Gọi trước định nghĩa sau => Không được
 */