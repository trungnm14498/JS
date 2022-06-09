// var btn = document.querySelector('button')
// console.log(btn);

// btn.onclick = function(){
//     btn.style.color = '#fff';
// }

var inputValue;
var inputElement = document.querySelector('input[type="text"]');

inputElement.onchange = function(e) {
    inputValue = (e.target.value);
}

inputElement.onkeyup = function(e) {
    console.log(e.target.value)
}

var inputElement2 = document.querySelector('input[type="checkbox"]');
inputElement2.onchange = function(e) {
    console.log(e.target.checked);
}

/**
 * onchange thực hiện khi blur (không focus vào element nữa)
 * ở đoạn code này sẽ in ra giá trị của ô input khi ta blur nó
 * nếu trong ô input là các giá trị khác nhau
 *  */

/**
 * oninput sẽ lấy được giá trị trực tiếp khi gõ (gõ đến đâu in ra đến đó)
 */

/**
 * onchange trong trường hợp check box muốn kiểm tra trạng thái thì dùng thuộc
 * tính checked. Giá trị trả về sẽ là true/false.
 */

/**
 * onchange trong trường hợp select cũng tương tự, sử dụng thuộc tính value,
 * Giá trị trả về sẽ là thuộc tính value nằm trong thẻ option. Tránh nhầm lẫn
 * với text hiển thị.
 */

/**
 * keyup: Thực hiện khi phím nhấc lên
 * keydown: Thực hiện khi phím ấn xuống
 */