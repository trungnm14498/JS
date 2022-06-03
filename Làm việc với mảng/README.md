# Mảng (array) trong Javascript

## Mảng
- Có thể lưu bất cứ dữ liệu nào
- Vẫn có 2 cách tạo array nhưng chọn cách 1 như các kiểu dữ liệu khác
- typeof của Array khi console.log() ra là object, trùng với kdl Object, vậy muốn kiểm tra thì dùng Array.isArray(myArray);
- Độ dài của mảng: myArray.length
- Lấy phần tử theo index: myArray[index]

## Làm việc với mảng
var languages = ['Javascript', 'PHP', 'Ruby'];

1. To string
- Chuyển các phần tử của mảng thành một chuỗi, ngăn cách nhau bằng dấu phẩy
- languages.toString();<br>
-> Javascript,PHP,Ruby

2. Join
- Thêm kí tự vào giữa các phần tử của mảng
    - languages.join(''); -> trả về giống hệt toString()
    - languages.join('-'); -> Javascript-PHP-Ruby
    - languages.join(', '); -> Javascript, PHP, Ruby

3. Pop
- Xóa phần tử cuối mảng và trả về phần tử đã xóa
    - languages.pop() -> Ruby
    - Nếu sử dụng khi hàm rỗng -> undefined

4. Push
- Thêm một hoặc nhiều phần tử vào cuối mảng, trả về độ dài mới của mảng sau khi thêm
    - languages.push('Python', 'Dart'); -> 5
    - languages = ['Javascript', 'PHP', 'Ruby', 'Python', 'Dart']

5. Shift
- Ngược lại với pop: Xóa phần tử đầu mảng và trả về phần tử đã xóa
    - languages.shift() -> Javascript

6. Unshift
- Ngược lại với push: Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng sau khi thêm
    - languages.unshift('Python', 'Dart'); -> 5
    - languages = ['Python', 'Dart', 'Javascript', 'PHP', 'Ruby']

7. Splice
- Trả về phần tử đã xóa
- languages.splice(`index bắt đầu thực hiện xóa`,`số lượng phần tử bị xóa`,`phần tử được chèn vào`);
    - languages.splice(1); -> Xóa từ index 1 đến hết -> Trả về mảng ['PHP', 'Ruby']
    - languages.splice(1,1); -> Xóa 1 phần từ bắt đầu từ index 1 -> Trả về mảng ['PHP']
    - languages.splice(1,4); -> 4 lớn hơn độ dài của mảng -> Xóa hết các phần tử từ index 1 -> Trả về mảng ['PHP', 'Ruby']
    - languages.splice(1,0); -> Không xóa phần tử nào -> Trả về mảng y hệt ban đầu
    - languages.splice(1,0,'Java'); -> Bắt đầu từ index 1, không xóa phần tử nào, thêm Java vào mảng ở index 1 -> Trả về mảng ['Javascript', 'Java', 'PHP', 'Ruby']
    - languages.splice(1,2,'Java'); -> Bắt đầu từ index 1, xóa 2 phần tử , thêm Java vào mảng ở index 1 -> Trả về mảng ['Javascript', 'Java']

8. Concat
- Trả về một mảng sau khi nối 2 mảng với nhau, thứ tự mảng mới theo thứ tự của mảng viết trước rồi đến mảng viết sau
- languages.concat(myArray);

9. Slice
- Trả về phần tử đã xóa (gần tương tự như splice nhưng không thêm được)
- languages.slice(`index bắt đầu thực hiện cắt`, `index kết thúc thực hiện cắt`);
- tips: copy mảng languages.slice(0);