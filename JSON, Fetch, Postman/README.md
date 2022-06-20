# JSON
1. Là một định dạng dữ liệu (chuỗi)
2. JSON: JavaScript Object Notation
3. Có thể sử dụng JSON để biểu diễn các loại dữ liệu: Number, String, Boolean, Null, Array, Object và ngược lại (Stringify <-> Parse)
4. JSON.parse(`var`);
5. Sử dụng dấu ngoặc kép để lưu string trong đó

# Promise
1. Sync (Đồng bộ): chương trình chạy theo luồng được gọi là đồng bộ (sync)
2. Async (Bất đồng bộ): setTimeout, setInterval, fetch, XMLHtppRequest, file reading, request animation frame: viết trước nhưng có thể không thực hiện trước
3. Callback trong các async trên để xử lý bất đồng bộ 
4. Các vấn đề khi sử dụng callback: Callback hell, Pyramid of doom
5. Promise dùng để xử lý các vấn đề khi sử dụng callback (xuất hiện lần đầu trong ES6)
6. var promise = new Promise(  
    // Excutor  
    function(resolve, reject) {  
        // Logic  
        // Thành công: resolve()  
        // Thất bại: reject()  
    }
);
    - Ví dụ trong file main.js
7. Nhận 3 method: .then(function()){}: Khi resolve() xảy ra  
.catch(function()){}: Khi reject() xảy ra  
.finally(function()){}: Khi xong
8. 3 trạng thái cụ thể: Pending (đang chờ xử lý), Fulfilled (hoàn thành kết quả), Rejected (xảy ra lỗi). Pending - unsetted, Fulfilled + Rejected - setted
- -> Promise sinh ra để giải quyết các vấn đề khi sử dụng callback, xử lý các tác vụ bất đồng bộ, tuy nhiên nếu có thể sử dụng callback mà không xảy ra vấn đề thì vẫn có thể sử dụng callback. Promise được tạo ra bằng từ khóa `new Promise` của JS, đây là một Object Constructor, truyền vào một Excutor function gồm 2 tham số dưới dạng hàm: resolve() và reject(), được gọi khi thao tác lần lượt là thành công và thất bại. Khi sử dụng đối tượng Promise, sử dụng qua các phương thức `then` và `catch` đều nhận các callback function, lọt vào trường hợp resolve() khi thao tác thành công và reject() khi thao tác thất bại.
9.  Tính chất chuỗi (chain) của promise:
    - Có thể có nhiều các phương thức then (catch) chạy lần lượt, dọc theo chương trình, không bị lồng nhau như callback hell.
    - Trong trường hợp giá trị `return` của một promise không phải là một promise thì trong phương thức then (hoặc catch) tiếp theo, function sau sẽ nhận giá trị return của function trước làm tham số đầu vào.
    - Nếu không return gì thì giá trị tiếp theo nhận vào sẽ là `undefined`.
    - Nếu .then() trước không return một promise thì nó sẽ chạy ngay .then() đằng sau. Còn nếu không thì vẫn phải xử lý promise ở trong .then() trước rồi sau đó mới thực hiện .then() kế tiếp.

## Promise.resolve và Promise.reject
Hai hàm này quyết định luôn giá trị trả về cho Promise (cho đơn giản, dễ sử dụng)

## Promise.all
Nhận vào một đối số, thường là một mảng các promises. Trạng thái Promise này sẽ fulfilled nếu **TẤT CẢ** các promises đều fulfilled còn nếu không `Promise.all()` sẽ trả về ở trạng thái reject. Từ đây mà có các ứng dụng rất hữu ích cho devs:
- Xử lý nhiều kết quả đồng thời với nhau
- Xác minh xem nhiều kết quả yêu cầu có đáp ứng các điều kiện hay không
- Kết hợp kết quả yêu cầu và xử lý lỗi 

# Fetch
- Front-end: Xây dựng giao diện người dùng
- Back-end: Xây dựng logic xử lý + Cơ sở dữ liệu
- API: Application programing interface: Cổng giao tiếp giữa các phần mềm
- Backend trả về API, sau đó sử dụng Fetch để lấy dữ liệu JSON/XML -> JSON.parse để nhận về JS type rồi render ra giao diện với HTML
- JSON server: API Server (Fake) - Mock API
- CRUD:
    - Create: Tạo mới -> POST
    - Read: Lấy dữ liệu -> GET
    - Update: Chỉnh sửa -> PUT / PATCH
    - Delete: Xóa - DELETE
- Postman
