// alert("hi")
// var fullName = 'Phạm Như Thuần';
// var age = 23;
// alert(fullName);
// alert(age);
// console.log(fullName);
/*hàm built-in
    1,console
-bật lên của sổ hộp thoại
    2. alert
    3 confirm
    4. prompt
-chạy 1 đoạn code sau 1 khoảng tg
    5. setTimeout
-chạy 1 đoạn code sau 1 khoảng tg liên tục lặp lại
    6 .setInterval
*/

// prompt ('xác nhận bạn đủ 18 tuổi');
// setTimeout( function() {
//     alert('thông báo')
// },1000)
// setInterval(function() {
//     console.log('Đây là log' + Math.random());
// },1000)
/*toán tử logic
    1.toán tử số học
    2.toán tử gán
    3.toán tử so sánh
    4.toán tử logic
 */
// var a= 1+2;
// console.log(a);
// var name= 'Thuần';
// console.log(name);
// var a = 1;
// var b = 2;
// if (a < b) {
//     alert('đúng');
// }
// var a = 1;
// var b = 2;
// if (a > 0 && b > 0) {
//     alert('a và b lớn hơn 0')
// } 
/*
Toán tử số học 
Cộng +
trừ -
nhân *
chia /
luỹ thừa **
chia lấy số dư %
tăng 1 giá trị một số ++
giảm 1 giá trị một số --
 */


// toán tử ++ --
// Prefix & Postfix
// Prefix
// 1: +1 cho a
// 2: trả về a sau khi được +1;
// Postfix
// 1: a coppy
// 2: trừ 1 của a;
// 3: trả về a coppy
// var a = 5 ;
// var output =a--;
// console.log('output:',output);
// console.log('a:',a);
/** Toán tử gán
 Toán tử            ví dụ           tương đương
 =                  x = y           x = y
 +=                 x += y          x = x + y
 -=                 x -= y          x = x - y
 *=                 x *= y          x = x * y
 /=                 x /= y          x = x / y
 **=                x **= y         x = x ** y
 */
//  var a = 1;
//  a **= 2
//  console.log(a);
/**
 * Toán tử chuỗi string operator
 
 */
// var firstName = 'Thuần';
// var lastName = 'Phạm';
// console.log(firstName + ' ' + lastName);
/*Bài 1 : Sử dụng console.log in ra các kết quả sau  : 

a ) : “Bootcamp 3 thực hành Nodemy buổi 1“ 
b ) : 43674 
c ) : [‘Hoa’,’Hải’,’Huy’,’Thái’]
d ) : {Ten:‘Tên của bạn’,Ngaysinh:’Ngày Sinh của bạn’,Diachi:’Địa chỉ của bạn’} 
e ) :  Primitive values, like "John Doe", cannot have properties or methods (because they are not objects). 
But with JavaScript, methods and properties are also available to primitive values, 123 
\because JavaScript treats primitive values as objects when executing methods and properties. 
Lưu ý : câu e sử dụng 1 câu lệnh duy nhất 
f ) : 
Gán biến ten bằng tên của bạn (ví dụ var ten = “Đào Văn Anh”;)
Gán biến tuoi bằng tuổi của bạn . 
in ra chuỗi sau :
‘Tên tôi là ${ten} năm nay ${tuoi}`
Gợi ý : sử dụng  `` 
*/
console.log("Bootcamp 3 thực hành Nodemy buổi 1");
console.log(43674);
var arr =['Hoa','Hải','Huy','Thái']
console.log(arr);
var obj = {
    name:'Phạm Như Thuần',
    date:'21/01/1999',
    adress:'Thanh Hoá'
}
console.log(obj);
var name = 'Phạm Như Thuần';
var age = '23';
console.log(`Tên tôi là ${name} năm nay ${age}`)
 // Bài 1 : 
// Cho object sau : 
// a ) Sử dụng console.log để hiện tên , màu , tuổi  của xe 
// b ) Đổi tên xe thành “lamborghini “ ,màu “ đỏ “ , tuổi = 0 . 
// c ) Thêm key “namSx” vào object xe và gán một giá trị cụ thể  . 
// d ) chạy console.log để xem lại kết quả cuối cùng thu được . 

var Car ={
name:'audi',
color:'Black',
age:1
}
Car.name = 'Lamborghini';
Car.color = 'Red';
Car.age = 0;
Car.YoM=2022
console.log(Car);
// Bài 2:
// Cho object sau : 
// Yêu cầu 
// a )Thêm vào Object hocVien , họ là “ Đào” . 
// b ) Sử dụng console.log để in ra chuỗi sau : “Tôi tên Đào Văn Anh năm nay 23 tuổi địa chỉ Hà Nội “ 
// c ) Sửa họ ,ten , tuoi , diachi của Object hocVien thành các thông tin của bạn . 
// d ) Tương tự như câu b ,  sử dụng console.log in ra các thông tin của bạn.
// e )Xóa key diachi và thay bằng noiSinh và điền thông tin của bạn vào .
// f ) Sử dụng console.log để in ra cuối cùng  . 

var emailKey= 'email';
var phonenumber = 'phone'
var hocVien = {
    ten:'Như Thuần',
    tuoi:23,
    diachi:'Thanh Hoá',
    [emailKey]:'nhuthuanprd@gmail.com',
    [phonenumber]:'036303XXXX',
    getName: function(){
       return this.ten;
    }
    }
hocVien.ho = 'Phạm';
delete hocVien.diachi
hocVien.noisinh ='Thanh Hoá',

console.log(hocVien.getName());
console.log(`Tên tôi là ${hocVien.ten} năm nay ${hocVien.tuoi} địa chỉ ${hocVien.noisinh}`)
console.log(hocVien)

//function => phương thức/method
// others => thuộc tính/ property
// Bài 3 cho Object sau :
// a ) sử dụng console.log để in ra số lương của Duy . 
// b ) Sửa lại tiền lương của Thái là 40000 . 
// c ) Tính tổng tiền lương của Anh , Duy và Thái . 
// d ) Sử dụng console.log để in ra kết như sau : Tổng Lương Tháng 4 của Anh , Duy , Thái là … (ghi kết quả tại dấu …) . 

var luongThang4 = {
Anh:10000,
Duy:20000,
Thai:22222
}
console.log('Lương tháng 4 của Duy:',luongThang4.Duy);
luongThang4.Thai=40000
console.log(luongThang4);
var S= luongThang4.Duy + luongThang4.Anh + luongThang4.Thai;
console.log('Tổng Lương Tháng 4 của Anh , Duy , Thái là:',S);
//Arr
var arr =[1,2,'Nam','Hải',5,8, 'Huy' ,3,6,'Nấm'] ;

// a ) Truy vấn đến các phần tử có ví trí index (vị trí )là 0 ; 3 ;5 và in chúng ra bằng console.log . 
// b ) Ghi đè phần tử có ví trí là 2 ,thành tên của bạn . và truy vấn và in kết quả ra bằng console.log . 
// c ) Ghi đè phần tử có  thứ tự là 2 , thành số 100 . và truy vấn và in kết quả ra bằng console.log . 
// d ) truy vấn phần tử cuối cùng và đầu tiên của Array và  sử dụng console.log in ra kết quả dưới dạng sau : 
// “ Phần tử đầu tiên là … và phần tử cuối cùng là … “
//  điền qua sau khi truy vấn vào dấu  …  .
console.log('các phần tử có ví trí index 0 ; 3 ;5 là :',arr[0],arr[3],arr[5])
arr[2]='Thuần';
arr[1]=100
console.log(arr);
console.log(`Phần tử đầu tiên là ${arr[arr.length -10]} và phần tử cuối cùng là ${arr[arr.length -1]}`);
// Bài 2 : 
// Cho Array sau : 
 var arr2= ['Lâm','Hải', 'Huy', 'Anh', 'Duy'] ;
 

// a ) sử dụng console.log in ra số lượng phần tử có trong Array
// b ) Truy vấn phần tử đầu và phần tử cuối của Array trên và  sử dụng console.log in ra kết quả . 
// c ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả . 
// d) Chỉnh sửa( ghi đè ) phần tử có  thứ tự là 4 thành “ Thái “ .   
// sử dụng console.log in ra kết quả . 
console.log('Tổng số lượng phần tử có trong array la:', arr2.length);
console.log('phần tử cuối trong array la:', arr2[arr2.length -1]);
console.log('phần tử đầu trong array la:', arr2[arr2.length -5]);
[arr2[0], arr2[arr2.length-1]] = [arr2[arr2.length-1], arr2[0]]
arr2[3]='Thái'
console.log(arr2);

// Bài 3 : 
// Cho array sau : 
var  Arr3=[1,3,5,7,[12,11,10],13,9]; 
// a ) Hoán đổi giá trị của phần tử đầu và phần tử cuối lại với nhau  .  
// sử dụng console.log in ra kết quả .
// b) Truy vấn phần tử có ví trí ( vị trí index) là 4 có thứ tự là  2 .
// Sử dụng console.log để in ra kết quả . 
// c  ) Tính tổng tất cả các giá trị của phần tử có vị trí  là 4 . 
// Sử dụng console.log để in ra kết quả . 
// d ) tính Tổng phần tử đầu và phần tử cuối của Arr3 .
// Sử dụng console.log để in ra kết quả .  
[Arr3[0], Arr3[Arr3.length-1]] = [Arr3[Arr3.length-1], Arr3[0]]
console.log('mảng sau hoán dổi:',Arr3);
console.log(' phần tử có ví trí ( vị trí index) là 4 có thứ tự là  2  là :',[Arr3[4][2]]);
var mang = Arr3[4];
function sumArray(mang){
    var sum = 0;
    var i = 0;
    while (i < mang.length){
        sum += mang[i];
        i++;
    }
    return sum;
}
console.log('tổng tất cả các giá trị của phần tử có vị trí  là 4 là:', sumArray(mang));
console.log('Tổng phần tử đầu và phần tử cuối của Arr3 là :', Arr3[0] + Arr3[Arr3.length-1]);
