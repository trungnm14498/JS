# Array nâng cao 1 xíu trong Javascript :blush:

***myArrays.`method`(function(myArray, index){ //code;})***

## Array methods
1. forEach()
- duyệt qua tất cả các phần tử của mảng.

2. every()
- trả về giá trị boolean
- xét từng phần tử của myArrays, nếu điều kiện của `return` đúng thì xét tiếp phần tử tiếp theo. Trả về true nếu tất cả hợp lệ còn không thì trả về false.
- -> kiểm tra các phần tử thỏa mãn 1 điều kiện nào đó.

3. some()
- ngược lại với every(), tương tự AND và OR. Chỉ cần 1 phần tử thỏa mãn điều kiện thì trả về true.

4. find()
- trả về phần tử đầu tiên thỏa mãn điều kiện return. Nếu không có thì trả về *undefined*.

5. filter()
- giống find() nhưng trả về tất cả các phần tử thỏa mãn điều kiện return.

6. map() ***Quan trọng***
- muốn thay đổi phần tử của một array
- ví dụ cụ thể trong file main.js

7. reduce()
- muốn nhận về một giá trị duy nhất sau khi xử lý và tính toán trên một array
- ví dụ cụ thể trong file main.js
- ***Note***
    - accumulator là biến tích trữ, ban đầu sẽ bằng giá trị khởi tạo (initial value - đối số thứ hai được truyền vào hàm reduce() sau function)
    - accumulator mới sẽ nhận được giá trị khi được return trong function được truyền vào hàm reduce()
    - currentValue là phần tử hiện tại mà mảng đang chỉ đến
    - giá trị khởi tạo là giá trị không bắt buộc, nhưng nếu không có initial value thì reduce() sẽ lấy phần tử đầu tiên của mảng làm initial value và currentValue sẽ là phần tử thứ 2.
- -> Mấy hàm này rất hay ho cơ mà hơi phức tạp, cố gắng ghi nhớ và sử dụng nhiều cho quen :muscle:

8. includes()
- phương thức này chỉ có trong string và array
- string: tìm kiếm một chuỗi trong chuỗi, từ trong chuỗi, trả về true hoặc false. Đối số thứ hai của phương thức này là vị trí bắt đầu tìm kiếm
- array: tìm kiếm xem trong array có phần tử nào đó không, trả về true hoặc false. Đối số thứ hai là index bắt đầu tìm kiếm trong mảng, nếu không truyền vào thì mặc định là 0. Đối số này có thể truyền vào số âm, giá trị được tính bằng độ dài array + số âm, nếu < 0 thì tính là 0.
- -> Nhưng thường đối số thứ 2 này ít sử dụng
