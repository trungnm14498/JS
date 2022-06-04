# Vòng lặp - Loop

1. for - Lặp với điều kiện đúng
- Chú ý điều kiện tránh vào vòng lặp vô hạn kẻo treo trình duyệt
- for (var i = 0; i < length; i++) {  
    // code;  
}  

2. for/in - Lặp qua key của đối tượng
- key của object sẽ là string
- key của array sẽ là số, tương tự như string
- for (var `key` in `object`) {  
    //code;  
}

3. for/of
- Lấy ra từng phần tử một array hoặc từng chữ cái của một string
- Phải có tricks mới dùng được với object:
    - Object.values(array) -> Trả về một array các values của object.
    - Object.keys(array) -> Trả về một array các keys của object.
    - -> Dùng for/of
 

4. while - Lặp khi điều kiện đúng
- while () {//code;}

5. do/while
- var i= 0;  
do {  
    console.log(i);  
    i++;  
} while (i<10);

6. Break và Continue trong vòng lặp
- break: thoát khỏi vòng lặp nếu gặp
- continue: tiếp tục thực hiện

7. Vòng lặp lồng nhau - Nested loop

8. Đệ quy
*Ví dụ*:  
function giaiThua(number) {  
    if (number > 0) {  
        return number * giaiThua(number-1);
    }  
    return 1;  
}
- Xác định điểm dừng
- Xử lý logic -> Tạo ra điểm dừng