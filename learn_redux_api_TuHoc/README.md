# 1. Khởi tạo và Kết nối với Redux Store

App component được khởi chạy và kết nối với redux/store thông qua Provider của react-redux. Provider đảm bảo rằng toàn bộ ứng dụng có thể truy cập vào store.

store chứa todoReducer, quản lý trạng thái của todo (danh sách, trạng thái tải, lỗi).

# 2. Hiển thị TodoList Component

TodoList component được hiển thị bên trong Provider.

Lúc đầu, component sử dụng useEffect để gọi dispatch(fetchTodos()), hành động này gửi yêu cầu lấy dữ liệu từ API để cập nhật danh sách todos trong store.

# 3. Xử lý Hiển thị Dữ Liệu

Khi Redux nhận được hành động fetchTodos, dữ liệu từ API được tải về và cập nhật trạng thái todos trong store.

Component TodoList sử dụng useSelector để lấy danh sách todos, trạng thái loading và error từ store.

Trong khi dữ liệu đang được tải, một ActivityIndicator sẽ hiển thị để báo hiệu trạng thái tải.

Nếu có lỗi xảy ra trong quá trình lấy dữ liệu, một thông báo lỗi sẽ xuất hiện.

# 4. Thêm Mới Mục Todo

Người dùng nhập nội dung vào TextInput và nhấn nút "Add Todo".

Hàm handleAddTodo kiểm tra nếu nội dung không trống, sau đó gọi dispatch(addTodo()) để thêm mục mới vào store.

store cập nhật trạng thái todos và component tự động hiển thị mục mới.

# 5. Chỉnh Sửa Mục Todo
Khi nhấn nút "Edit" bên cạnh một mục todo, hàm handleStartEdit được gọi, đặt editingTodo bằng mục đó và điền dữ liệu vào TextInput.

Người dùng chỉnh sửa nội dung trong TextInput và nhấn "Save Changes".

Hàm handleEditTodo được gọi, thực hiện dispatch(editTodo()) để cập nhật mục đó trong store.

Trạng thái editingTodo được reset và TextInput được làm trống.
# 6. Xóa Mục Todo
Khi nhấn nút "Delete" bên cạnh một mục todo, hàm handleDeleteTodo gọi dispatch(deleteTodo()) để xóa mục đó khỏi store.

Redux cập nhật trạng thái todos và component tự động loại bỏ mục đó khỏi hiển thị.
# 7. Cập Nhật Giao Diện
Redux tự động gửi trạng thái mới đến TodoList thông qua kết nối useSelector. Bất kỳ thay đổi nào trong store sẽ làm component re-render với dữ liệu mới.

Giao diện hiển thị danh sách todos với các nút "Edit" và "Delete" cho từng mục, cùng một ô nhập liệu để thêm mới hoặc chỉnh sửa.

Luồng Hoạt Động Tổng Quan

Khởi tạo App -> Provider -> store (chứa todoReducer).

Component TodoList gọi dispatch(fetchTodos()).

Dữ liệu từ API được lấy và cập nhật vào store.

Component nhận dữ liệu từ store thông qua useSelector.

Người dùng thêm, chỉnh sửa, hoặc xóa todo -> Gọi dispatch() tương ứng.

store cập nhật và thông báo thay đổi đến component để hiển thị lại.


====================================================================================================================================


# Hiểu sơ sơ, Chưa rõ lắm, cần xem thêm