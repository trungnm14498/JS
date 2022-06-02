# Số (number) trong Javascript


## Kiểu dữ liệu số
1. Các loại số
- Các số thông thường trong Javascript được lưu trữ dưới dạng 64 bit IEEE-754 (còn được gọi là các số phẩy động). Trong hầu hết các trường hợp khi làm việc với Javascript là chúng ta sử dụng loại số này
- Số BigInt là loại số sử dụng để biểu thị số nguyên có độ dài tùy ý
- 1e6 ~ 1000000

## Làm việc với số
1. Tạo giá trị Number
* C1: var age = 18;
* C2: var otherNumber = new Number(9);
* Dùng C1 cho đơn giản, đúng kiểu dữ liệu. C2 tạo ra object.
* var result = 20 / 'ABC' -> trả về NaN, kiểm tra bằng cách isNan(result);

2. Làm việc với Number
* toString(): convert sang string
* toFixed(): làm tròn số thập phân đến `tham số` sau dấu phẩy, nếu không có tham số thì làm tròn thành số nguyên.