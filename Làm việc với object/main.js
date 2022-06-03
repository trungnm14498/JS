// Object contructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User('Trung', 'Nguyen', 'ava');
var user = new User('Thanh', 'Nguyen', 'ava2');

User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
}

author.title = 'Hello 123';
user.comment = 'Xin chao 456';

console.log(author.getName())


function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = function(){
        return `${firstName} ${lastName}`;
    }
}


// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');

console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'