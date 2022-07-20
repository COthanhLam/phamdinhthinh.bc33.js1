console.log("Hello word!!!");

// var name = 'Thiago Tran';
// var age = 24;
// var book;

// console.log(name)
// console.log(age)
// console.log(book)

// var res1 = 5;
// var res2 = 6;
// var sum = res1 + res2;
// var brand = res2 - res1;
// var volume = res1 + res2

// res2 = res2++ +3;
// console.log(res2);

// bài 1

/**
 * sơ đồ 3 khối
 *
 * INPUT: lương 1 ngày, số ngày làm
 *
 * PROCESS:
 *          1.lấy được input(hardcode)
 *          2.tính lương = lương 1 ngày * số ngày làm
 *          3.log luong ra màn hình
 * OUTPUT:lương
 */

var salaryPerDay = 100000;
var workingDays = 30;
var totalSalary = salaryPerDay * workingDays;

console.log("Tổng số lương :", totalSalary);

//bài 2

/**
 * sơ đồ 3 khối
 *
 * INPUT: 5 số nguyên 
 *
 * PROCESS:
 *          1.lấy được input(hardcode)
 *          2.trung bình tổng 5 số /5
 *          3.log trung bình ra màn hình
 * OUTPUT:số nguyên
 */


var num1 = 10;
var num2 = 20;
var num3 = 30;
var num4 = 40;
var num5 = 50;
var num6 = (num1 + num2 + num3 + num4 + num5) / 5;
console.log("Trung bình của 5 số :", num6);

//bài 3

/**
 * sơ đồ 3 khối
 *
 * INPUT: tiền việt nam , số tiền usd cần đổi
 *
 * PROCESS:
 *          1.lấy được input(hardcode)
 *          2.tính được đổi = tiền usd cần đổi * tiền vnd
 *          3.log 2usd ra màn hình
 * OUTPUT:tiền vnd
 */


var moneyVnd = 23500;
var moneyUsd = 2;
var change = moneyUsd * moneyVnd;
console.log("2 USD : ", change);

//bài 4

/**
 * sơ đồ 3 khối
 *
 * INPUT: khai báo chiều dài, chiều rộng
 *
 * PROCESS:
 *          1.lấy được input(hardcode)
 *          2.tính chu vi = (dài+rộng)*2,diện tích =dài*rộng 
 *          3.log chu vi và diện tích ra màn hình
 * OUTPUT:cv,dt
 */


var chieuDai = 10;
var chieuRong = 5;

var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;

console.log("\tChu vi là : %f \n Diện tích là : %f", chuVi, dienTich);

//bài 5

/**
 * sơ đồ 3 khối
 *
 * INPUT: khai báo temp, tổng 
 *
 * PROCESS:
 *          1.lấy được input(hardcode)
 *          2.vòng lặp while cho temp !== 0
 *          3.log luong ra màn hình
 * OUTPUT:2 ký số
 */


function soNguyen(x) {
  var temp;
  var tong = 0;
  temp = x;
  while (temp !== 0) {
    tong += temp % 10;
    temp = Math.floor(temp / 10);
  }
  console.log("Tổng của số nguyên là :" + Math.floor(tong));
}
soNguyen(56);
