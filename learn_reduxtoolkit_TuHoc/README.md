# Tìm hiểu về reduxToolkit

- Có phần giống như redux thuần về cơ bản

# Sự khác biệt giữa redux thuần và reduxToolkit:
## <Quan điểm cá nhân>

* Redux toolkit: 
  * Cho phép viết action và reducer trong cùng một tệp với createSlice, gọn hơn, dễ đọc hơn
  * store : const store = configureStore...

* Redux thuần: 
  * Thường phải tách riêng từng file hoặc không, phải gọi lại các phương thức dài dòng rườm rà hơns
  * store: const store = createStore(todoReducer);
