# Toán tử, kiểu dữ liệu

## **`Toán tử trong Javascript`**
**`1. Toán tử số học - Arithmetic`**
- Cộng              +
- Trừ               -
- Nhân              *
- Lũy thừa          **
- Chia              /
- Chia lấy dư       %
- Tăng 1 giá trị số ++      
- Giảm 1 giá trị số --

**Toán tử hậu tố và tiền tố prefix/postfix**
+ x++ tăng giá trị biến lên 1 và trả về giá trị trước khi tăng
+ ++x tăng giá trị biến lên 1 và trả về giá trị sau khi tăng
+ x-- giảm giá trị biến xuống 1 và trả về giá trị trước khi giảm
+ --x giảm giá trị biến xuống 1 và trả về giá trị sau khi giảm

*Ví dụ*<br>
- var a = 6;<br>
var output = ++a;<br>
// Việc 1: +1 cho a => a = a + 1 => a = 7 <br>
// Việc 2: Trả về a sau khi được +1 <br>
console.log(output); => 7

- var a = 6;<br>
var output = a--;<br>
// Việc 1: Tạo ra một biến *a copy* bằng với a => *a copy* = 6 <br>
// Việc 2: +1 cho a => a = a + 1 => a = 7 <br>
// Việc 3: Trả về *a copy* <br>
console.log(output); => 6

- var number = 6; <br>
var output = number++ + --number; <br>
// number++: Vẫn trả về 6 sau đó mới +1 vào number<br>
// --number: number lúc này đã hoàn thành tính toán của toán tử ++ postfix nên có giá trị là 7 và thực hiện ngay -- prefix nên trả về giá trị 6<br>
=> output = 6 + 6 = 12<br>
Tương tự: output = ++number * 2 - number-- *2;<br>
=> output = 7 * 2 - 7 * 2 = 0

**Toán tử chuỗi - String operator**
- Nối các chuỗi bằng toán tử + hoặc +=

**`2. Toán tử gán - Assignment`**

| Toán tử        | Ví dụ           | Tương đương  |
| ---------- |:----------------:| -----------:|
|    =   :|  x = y   |    x = y        |
|   +=    |  x += y  |    x = x + y    |
|   -=    |  x -= y  |    x = x - y    |
|   *=    |  x *= y  |    x = x * y    |
|   /=    |  x /= y  |    x = x / y    |
|   **=   |  x **= y |    x = x ** y   |

**`3. Toán tử so sánh - Comparison`**
- Bằng: ==
- Không bằng:            !=
- Lớn hơn:               >
- Nhỏ hơn:               <
- Lớn hơn hoặc bằng:     >=
- Nhỏ hơn hoặc bằn:g     <=

**Boolean**

*Ví dụ*: Tạo biến canBuyAlcohol để biết có age có được mua rượu hay không (được mua khi age >= 18):<br>
var age = 16;<br>
var canBuyAlcohol = age >= 18; => false

**Câu lệnh điều kiện if-else**
- 6 giá trị khi convert sang boolean sẽ là false: *0, false, '' - "", undefined, NaN, null* được gọi là `Falsy`. Ngược lại các giá trị true được gọi là `Truthy`. *`Chỉ có chuỗi rỗng là Falsy`* còn array, function hay object trống vẫn là Truthy
- Một tip để convert các kiểu dữ liệu khác sang boolean là thêm `!!` vào trước các giá trị cần convert
- Ngoại lệ: 
    * document.all covert sang boolean sẽ là false
    * document.all khi là toán hạng của toán tử so sánh sẽ là undefined
    * typeof document.all sẽ trả về undefined

**Toán tử so sánh P2**
So sánh tuyệt đối `===` và `!==` không chỉ so sánh giá trị mà còn cả kiểu dữ liệu


**`4. Toán tử logic - Logical`**
- And - &&
- Or - ||
- Not - !
<br><br>

## **`Kiểu dữ liệu trong Javascript`**
**`1. Dữ liệu nguyên thủy - Primitive Data`**
- Number
- String: muốn thêm dấu nháy đơn trong string bao quanh bởi dấu nháy đơn thì thêm kí tự \ vào trước dấu nháy đơn cần thêm: `\'`
- Boolean: tip đặt tên, thêm is vào tên biến `isSuccess`
- Underfined: không gán giá trị cho một biến `var age`
- Null: `var isNull = null` ~nothing
- Symbol: `var id = Symbol('id');` unique (học sau)

**`2. Dữ liệu phức tạp - Complex Data`**
- Function:<br>
    var myFunction = function() {<br>
    &emsp;&ensp; alert('Hi, xin chào các bạn!');<br>}

* Object: 
    * var myObject = {<br>
&emsp;&ensp; name: 'Nguyen Trung',<br>
&emsp;&ensp; age: 18,<br>
&emsp;&ensp; address: 'Hanoi',<br>
&emsp;&ensp; myFunction: function() { }<br>
};<br>
    * var myArray = ['Javascript', 'PHP', 'HTML']
<br>

* Kiểm tra kiểu dữ liệu: typeof `biến`

<h2> `NOTE SIÊU TO KHỔNG LỒ` </h2>

- var result = 'A' || 0 || NaN || 'B' || 'C';<br>
    console.log(result)<br>
    => A<br>
    => Trả về giá trị true đầu tiên từ trái sang<br>

- var result = 'A' && 0 && NaN && 'B' && 'C';<br>
    console.log(result)<br>
    => 0<br>
    => Trả về giá trị false đầu tiên từ trái sang<br>

- var result = 'A' && 0 && NaN || 'B' && 'C';<br>
    console.log(result)<br>
    => C<br>
    => Làm lần lượt từ trái sang: 'A' && 0 => lấy 0<br>
    => 0 && NaN => lấy 0 <br>
    => 0 || 'B' => lấy 'B'<br>
    => 'B' && 'C' => lấy 'C'<br>