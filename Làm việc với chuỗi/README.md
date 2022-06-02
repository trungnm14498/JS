# Chuỗi (string) trong Javascript

## Kiểu dữ liệu Chuỗi
1. Tạo chuỗi
* Các cách tạo chuỗi
    * var fullName = 'Manh Trung';
    * var fullName = new String('Manh Trung');
* Nên dùng cách 1. Vì cách số 1 nhanh hơn, gọn hơn, kiểu dữ liệu mà cách 2 tạo ra là object => Phức tạp

2. Một số case sử dụng backslash (\\)
* Chèn nháy đơn nằm trong nháy đơn, tương tự với nháy kép. Giải quyết: \'
* Muốn dùng backslash vào thì dùng 2 cái \\\

3. Xem độ dài chuỗi
* myString.length

4. Chú ý độ dài khi viết code
* Khuyến nghị chỉ nên dùng tối đa 80 kí tự trên một dòng code

5. Template string ES6
- Nằm giữa hai dấu \` \`, muốn chèn biến bên ngoài vào dùng `${varName}`

## Làm việc với chuỗi
*Ví dụ*: myString = 'Hoc JS tai JS F8!';
1. Độ dài string
* myString.length

2. Tìm index
* myString.indexOf('JS') -> 4
* myString.indexOf('JS', 5) -> bắt đầu tìm từ vị trí thứ 5 -> 11
* Trả về -1 nếu không tìm thấy
* myString.lastIndexOf('') -> Trả về vị trí tìm thấy cuối cùng

3. Cắt string
* myString.slice(start, end)

4. Thay thế
* myString.replace('JS', 'Javascript') -> Thay thế JS đầu tiên thành Javascript
* myString.replace(/JS/g, 'Javascript') -> Thay thế toàn bộ JS bằng Javascript. Đây là biểu thức chính quy, học sau.

5. Chuyển sang chữ hoa, chữ thường
* Chữ hoa: myString.toUpperCase();
* Chữ thường: myString.toLowerCase();

6. Loại bỏ khoảng trắng thừa đầu cuối string
* myString.trim();

7. Chia string thành array
*Ví dụ*: var languages = 'JS, PHP, Ruby'<br>
languages.split(', ') -> Nhận được một array: ['JS', 'PHP', 'Ruby']<br>
Nếu truyền vào chuỗi rỗng thì sẽ nhận được tất cả các kí tự của chuỗi.

8. Lấy kí tự từ index
* myString.charAt(0) -> H. Nếu một index vượt quá length thì nhận được một chuỗi rỗng
* myString[index]: myString[0] -> H. Nếu index vượt quá length thì nhận được undefined

