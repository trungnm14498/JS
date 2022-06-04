# Các câu lệnh rẽ nhánh và Toán tử ba ngôi

## Câu lệnh rẽ nhánh -- If-else

## Câu lệnh rẽ nhánh -- Switch-case
- case so sánh với toán tử ===
- Khác với if-else, nếu trường hợp case đúng mà không break, sẽ chạy tất cả code bắt đầu từ case đúng tới hết, kể cả default
- else ~ default
- switch (arg) {  
    case `value`:  
    break;
}  

*Note*:
- Biết trước khoảng giá trị chính xác thì sử dụng switch-case hoặc case < 3 thì nên dùng if-else.
- Logic thì nên dùng if-else.

## Toán tử 3 ngôi (Ternary operator)
- Thường sử dụng trong các trường hợp đơn giản
- var `tên biến` = `Điều kiện 1` ? `Code 1` : `Code 2`;  
-> Nếu điều kiện 1 đúng thì thực hiện code 1 còn không thì thực hiện code 2.