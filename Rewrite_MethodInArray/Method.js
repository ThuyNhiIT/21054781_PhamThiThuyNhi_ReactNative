/* Viết các method sau cho mảng: myfilter(), reduce(), find(), map(), some(), every(), forEach(),  push(), pop(), 
  filter(), reduce(), reduceRight().
  */
/*
Đề bài 1: Viết hàm myfilter() lọc nhập vào số nào thì mảng lớn hơn số đó, trả về mảng mới truyền vào hàm callback
*/
const numbers = [45, 4, 9, 16, 25];
Array.prototype.myfilter = function (callback) {
  const newarr = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      newarr.push(this[i]);
    }
  }
  return newarr;
};

const value = numbers.myfilter((number) => number > 9);
console.log("Filter: Mảng lớn hơn số 9: ");
console.log(value);

/*
Đề bài 2: Viết hàm reduce() tính tổng các phần tử trong mảng
*/

const arr2 = [45, 4, 9, 16, 25];
Array.prototype.myreduce = function (callback, init) {
  // Ở đây có giá trị khởi tạo
  let sum = init;
  for (let i = 0; i < this.length; i++) {
    sum = callback(sum, this[i]); // Tổng = tổng + giá trị phần tử mảng
  }
  return sum;
};

const sum = arr2.myreduce((sum, number) => sum + number, 0);
console.log("Reduce: Tổng các phần tử trong mảng: ");
console.log(sum);

/*
Đề bài 3: Viết hàm find() tìm số lớn hơn 10 đầu tiên trong mảng
*/

const arr3 = [45, 4, 9, 16, 25];
Array.prototype.myfind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return this[i];
    }
  }
};

const value1 = arr3.myfind((number) => number > 10);
console.log("Find: Số lớn hơn 10 đầu tiên trong mảng: ");
console.log(value1);

/*
Đề bài 4: Viết hàm map() tạo mảng mới với các phần tử là bình phương của các phần tử trong mảng cũ
*/

const arr4 = [45, 4, 9, 16, 25];
Array.prototype.mymap = function (callback) {
  const newarr = [];
  for (let i = 0; i < this.length; i++) {
    newarr.push(callback(this[i]));
  }
  return newarr;
};

const newarr = arr4.mymap((number) => number ** 2);
console.log(
  "Map: Mảng mới với các phần tử là bình phương của các phần tử trong mảng cũ: "
);
console.log(newarr);

/*
Đề bài 5: Viết hàm some() kiểm tra xem có phần tử nào trong mảng lớn hơn 10 không
*/

const arr5 = [45, 4, 9, 16, 25];
Array.prototype.mysome = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      return true;
    }
  }
  return false;
};

const value2 = arr5.mysome((number) => number > 10);
console.log("Some: Có phần tử nào trong mảng lớn hơn 10 không: ");
console.log(value2);

/*
Đề bài 6: Viết hàm every() kiểm tra xem tất cả phần tử trong mảng có lớn hơn 10 không
*/

const arr6 = [45, 4, 9, 16, 25];
Array.prototype.myevery = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i])) {
      return false;
    }
  }
  return true;
};

const value3 = arr6.myevery((number) => number > 10);

console.log("Every: Tất cả phần tử trong mảng có lớn hơn 10 không: ");

console.log(value3);

/*
Đề bài 7: Viết hàm forEach() in ra mảng
*/

const arr7 = [45, 4, 9, 16, 25];
Array.prototype.myforEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
console.log("ForEach: ");
arr7.myforEach((number) => console.log(number));
