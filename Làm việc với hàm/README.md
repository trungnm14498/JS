# Hàm (function) trong Javascript


## Khái niệm về hàm
1. Hàm?
- Là một khối mã
- Làm một việc cụ thể

2. Loại hàm
- Built-in
- Tự định nghĩa

3. Tính chất
- Không thực thi khi định nghĩa
- Sẽ thực thi khi được gọi
- Có thể nhận tham số
- Có thể trả về một giá trị

4. Cú pháp
* function functionName() {<br>
&emsp;&emsp;&emsp;// code<br>
}

## Tham số trong hàm
1. Tham số
- function functionName(parameter) {<br>
&emsp;&emsp;&emsp;// code<br>
}
- Bất kể kiểu dữ liệu
- Tính private: Chỉ sử dụng trong hàm

2. Truyền tham số
- Truyền một hay nhiều tham số phụ thuộc vào mục đích
- function có 2 tham số nhưng khi gọi chỉ truyền 1 thì cái còn lại sẽ là undefined

3. Arguments

## Return trong hàm
- Một hàm viết mà không có return thì sẽ trả về undefined
- Có thể trả về bất cứ kiểu dữ liệu nào

## Một số điều cần biết về function
1. Khi function đặt trùng tên?
- function định nghĩa sau cùng được thực hiện (ghi đè lên các function trước cùng tên)

2. Khai báo biến trong hàm?
- Có thể nhưng phạm vi sử dụng chỉ nằm trong hàm

3. Định nghĩa hàm trong hàm?
- Có thể nhưng phạm vi sử dụng chỉ nằm trong hàm đã được định nghĩa

## Các loại function
1. Declaration function
- Định nghĩa bằng từ khóa `function` đi kèm với tên function

2. Expression function
- Định nghĩa bằng cách gán vào một biến:<br>
    * var showMessage = function() { }
    * setTimeout(function() { })
    * var myObject = { myFunction: function() { }}
- Có thể đặt tên cho function hoặc không+

3. Arrow function

*NOTE*
 * Declaration Function có thể gọi ở bất cứ đâu nếu đã định nghĩa => Gọi trước định nghĩa sau => Ok
 * Expresstion Function chỉ có thể gọi sau khi được định nghĩa. Gọi trước định nghĩa sau => Không được