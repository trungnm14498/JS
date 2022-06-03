# Object trong Javascript

## Basic
- Tạo object: var myInfo = {  
                  name: 'Manh Trung',  
                  age: 24,  
                  address: 'Hanoi',  
                  key: value,  
                  'my-email': 'trungnm.14498@gmail.com',  
                  getName: function() {  
                      return this.name;
                  }  
                  };
- Nếu muốn đặt tên key mà không tuân theo nguyên tắc đặt tên hàm hay biến thì nhét nó vào trong chuỗi.
- Thêm 1 cặp key-value: myInfo.university = 'ITMO'
- Trường hợp tên không chuẩn: myInfo['uni-versity'] = 'ITMO'
- Lấy value: myInfo.name hoặc myInfo['name']. Trường hợp không có key trả về undefined.
- Tạo key từ biến: var universityKey = 'university'; -> [universityKey]: 'ITMO' nhét vào object.
- Xóa key: delete myInfo.key;
- Value của key có thể là một function: console.log(myInfo.getName()); -> Manh Trung
- Các key mà có value là: Function -> Phương thức (method), Others -> Thuộc tính (property)

## Object Constructor

- Nên viết hoa chữ cái đầu của Object contructor:  
function User(firstName, lastName, avatar) {  
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
}
- Code mẫu trong file main.js
- Có thể thêm các thuộc tính/phương thức đặc trưng của các đối tượng khác nhau vào constructor, cách làm giống như thêm cặp key-value của object.

## Object Prototype - Basic
1. Prototype (nguyên mẫu) là gì?
- Nếu tưởng tượng constructor là một bản thiết kế nhà thì prototype là các thành phần cấu tạo nên bản thiết kế đó. Ở đây là phương thức, thuộc tính.
- Thêm các thuộc tính/phương thức cho cùng một constructor có 2 cách:
    - Thêm thẳng vào this trong constructor.
    - User.prototype.className = 'F8'; (Xem trong \_\_proto\_\_ khi console.log())

## Date Object
- var date = new Date(); -> object
- var date = Date(); -> string
- var month = date.getMonth() -> 0-11
- var day = date.getDay() -> 0-6

## Math Object
- Math.PI: trả về số PI
- Math.round(): làm tròn về số nguyên
- Math.abs(): trả về giá trị tuyệt đối
- Math.ceil(): làm tròn lên trên dù thập phân có nhỏ đến đâu
- Math.floor(): làm tròn dưới ngược lại ceil
- Math.random(): trả về số thập phân ngẫu nhiên nhỏ hơn 1   
- Math.min(): trả về số nhỏ nhất
- Math.max(): trả về số lớn nhât