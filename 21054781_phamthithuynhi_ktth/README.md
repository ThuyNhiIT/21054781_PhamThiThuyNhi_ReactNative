# Thêm xe đạp mới dùng reduxtoolkit 

# Sự khác biệt giữa redux thuần và reduxToolkit:
## <Quan điểm cá nhân>

* Redux toolkit: 
  * Cho phép viết action và reducer trong cùng một tệp với createSlice, gọn hơn, dễ đọc hơn
  * store : const store = configureStore...

* Redux thuần: 
  * Thường phải tách riêng từng file hoặc không, phải gọi lại các phương thức dài dòng rườm rà hơns
  * store: const store = createStore(todoReducer);

## Các bước đã làm

* Tạo bicycleSlide
  * filterBicycles: tại vì bài này có chia ra theo từng loại xe
  * setLoading: Dùng để quản lý trạng thái tải dữ liệu.
  * setError: Dùng để quản lý lỗi khi lấy dữ liệu.

* Tạo store 
* Trong file App.js gọi lại store và để trong Provider

* Tạo BikeScreen.js để hiển thị màn hình xe đạp
  * useDispatch: Dùng để dispatch các hành động (actions) từ Redux.
  * useSelector: Dùng để truy cập trạng thái của Redux store.

* Tạo FormAdd để thêm xe đạp

* Tiếp theo sẽ cập nhật bicycleSlide thêm phương thức addBicycle

* Thử add xe mới và render lại màn hình danh sách
