# HTML DOM
- DOM (Document Object Model)
- Có ba thành phần: Element, Attribute, Text
    - Element: Các thẻ </> trong Document
    - Attribute: Các thuộc tính nằm trong Element. Ví dụ: Element \<img> có Attribute là `src`
    - Text: Đoạn text hiển thị
- 3 thành phần trên còn có thể gọi là Node.
- -> Nếu được hỏi HTML DOM là gì thì cần trả lời tên đầy đủ và các thành phần
- Sử dụng JS để có thể truy cập vào DOM và thay đổi các thành phần
- HTML DOM không nằm trong JS mà JS chỉ là công cụ giúp dev "sờ" vào HTML DOM và chỉnh sửa, thay đổi nó.
- API: Application programming interface
- Browser: HTML -> DOM -> WEB API

## Document object trong Javascript
- Là toàn bộ website mà chúng ta thấy
- document.write(): đặt script ở đâu thì in ở đó

## Element
- ID, class, tag, CSS selector, HTML collection
- ID: document.getElementById('idName');
    - -> Trả về 1 phần tử duy nhất vì Id chỉ có 1 
- class: document.getElementsByClassName('className');
    - -> Trả về 1 mảng các phần tử có className giống nhau
- tag: document.getElementsByTagName('tagName');
    - -> Trả về 1 mảng các phần tử có tag giống nhau
- CSS selector: document.querySelector();
    - -> Trả về 1 phần tử theo CSS selector
    - querySelectorAll: Trả về 1 mảng các phần tử
- HTML collection: (ít sử dụng) đọc thêm tài liệu
- Nếu có nhiều node lồng nhau thì có thể chia nhỏ các node ra để xử lý, tiện cho việc xử lý sau này.


## Attribute
- Có hai cách để set và get attribute.
- Cách 1: Qua thuộc tính:
    - set: domElement.`attribute` = '`value`'
    - get: domElement.`attribute`
    - Cách này chỉ áp dụng cho những attribute có sẵn của một element. Ví dụ: a-href; img-src; h1-title...
- Cách 2: Qua phương thức:
    - set: domElement.setAttribute('`attribute`', '`value`');
    - get: domElement.getAttribute('`attribute`');
    - Cách này đa dụng hơn, có thể lấy hoặc đặt bất kì giá trị của attribute nào, kể cả mình đặt thêm.
## innerText vs textContent Property
- Để thay đổi hoặc lấy nội dung của text node có thể sử dụng hai thuộc tính của nó là innerText và textContent
- Text node là tất cả những text nằm giữa các thẻ tag, kể cả đấy là text, code css hay js.
- Điểm khác nhau giữa innerText và textContent:
    - innerText chỉ là nội dung text đơn thuần những gì chúng ta thấy ở trên màn hình.
    - textContent là tất cả các nội dung có trong text node (kể cả khoảng trắng, code...)

## innerHTML vs outerHTML
- Là hai thuộc tính của element node
- innerHTML: add thêm node vào trong HTML:
    - parentElement.innerHTML = '\<h1>ABC\</h1>' -> Một thẻ h1 có nội dung ABC được thêm vào element có tên parentElement.
    - nếu muốn lấy ra: console.log(parentElement.innerHTML); -> Trả về một chuỗi có nội dung của parentElement.
- outerHTML: tính từ parentElement. Ví dụ: parentElement.outerHTML = '\<h1>ABC\</h1>' -> Thẻ h1 sẽ ghi đè và thay thế luôn node parentElement.

## Node properties (Các thuộc tính của Node)
1. Element Node
- attributes: số attribute của node
- autocapitalize: giống capslock (liên quan đến att: contentEditable)
- baseURI: địa chỉ
- childElementCount: đếm phần tử con (element node)
- childNodes: các node con
- classList: quản lý (thêm bớt, kiểm tra, ...)
- firstChild: lấy ra node con đầu tiên
- firstElementChild: lấy ra element con đầu tiên
- lastChild: lấy ra node con cuối cùng
- nextElementSibling: element kế tiếp
- nextSibling: node kế tiếp
- nodeName: tên node được viết capslock
- nodeType: mỗi node sẽ có một chỉ mục riêng
- parentElement: element cha
- parentNode: node cha

## DOM Style
- Object.assign(boxElement.style, {  
    width: '200px',  
    height: '100px',  
    backgroundColor: 'green',  
});
- -> Cách viết ngắn gọn

## classList property
- Là thuộc tính của element node -> Chỉ sử dụng khi đã lấy được element node.
- Trả về một DOMTokenList gồm các index với các giá trị của các class có trong element node, value là một chuỗi tên các class đó và độ dài (số lượng các class).
1. add(): là một hàm để thêm class. Nếu muốn thêm nhiều class thì giữa các class cách nhau bằng dấu phẩy. Ví dụ: elementNode.classList.add('red', 'blue');
2. contains(): là một hàm để kiểm tra xem có class nào đó nằm trong element node hay không, trả về true/false.
3. remove(): ngược lại của add()
4. toggle(): nếu element node mà chưa có class (là đối số được truyền vào dưới dạng chuỗi) thì thêm vào và ngược lại, nếu có rồi thì xóa bỏ.

## DOM Events
1. Attribute events
- Thêm tiền tố `on` vào trước tên của event.
- Sử dụng event như một attribute của element: \<h1 onclick='console.log(this)'>\</h1>
- Sự kiện nổi bọt: Ví dụ có một event click ở element cha nhưng element con không có. Tuy nhiên khi click vào element con thì event click vẫn được thực hiện. Nếu có thêm 1 event click nữa nằm trong thẻ element con thì 2 event click (cả của cha và con sẽ được thực hiện).

2. Assign event using the element node
- element.onclick = function() {  
    // code here!!!  
}

3. Ví dụ (Xem trong file main.js và index.html)
- Lấy nội dung input
- Kiểm tra checkbox
- Lấy nội dung select options
- keyup và keydown

## preventDefault và stopPropagation 
- preventDefault(): Ngăn các hành động mặc định
- stopPropagation(): Ngăn sự kiện nổi bọt

## Event listener
- Tương tự như DOM event nhưng tùy trường hợp mà sử dụng
    - Xử lý nhiều việc khi 1 event xảy ra
    - Lắng nghe / Hủy bỏ lắng nghe
- -> DOM event: Nên sử dụng cho các sự kiện đơn giản, không có nhu cầu gỡ nó đi (dễ code, ngắn gọn).
- -> event Listener: Khi muốn gỡ bỏ 1 sự kiện nào đó, chia nhỏ các sự kiện liên quan đến một element để dễ bóc tách, xử lý. 
