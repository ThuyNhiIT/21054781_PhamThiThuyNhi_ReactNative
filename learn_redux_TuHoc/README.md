## Luyện tập redux thuần

// Có tham khảo

- Hiểu được cách hoạt động của redux

## Thành phần của redux

Redux bao gồm ba thành phần chính:

* Store: Là nơi lưu trữ toàn bộ trạng thái của ứng dụng. Đây là một đối tượng JavaScript duy nhất.

* Actions: Là các đối tượng JavaScript mô tả những gì đã xảy ra trong ứng dụng. Mỗi action có một type để chỉ định loại hành động và có thể kèm theo payload chứa dữ liệu.

* Reducers: Là các hàm thuần (pure functions) nhận vào state hiện tại và action, sau đó trả về trạng thái mới dựa trên loại action.

## Bài tập vận dụng

Tạo TodoList  gồm các chức năng: thêm, xóa, sửa

Tương tự lab thực hành ở môn ReactNative