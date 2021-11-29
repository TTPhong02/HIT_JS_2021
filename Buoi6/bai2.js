// Bài 2
// Cho 1 mảng người dùng như dưới
// 1. Tạo menu với các mục xem danh sách, thêm người dùng
// xoá người dùng theo id, cập nhật thông tin ngưỜi dùng theo id
// 2. Thêm 2 người vào mảng ban đầu trước khi làm ý này
// - Thống kê bao nhiêu nam,bao nhiêu người có tuổi lớn hơn 15 tuổi
// - Tính tổng tiền những người có id chẵn
// - Ai nghèo nhất, Ai giàu nhất
// 3. Chuyển hết những người có giới tính male về female

const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
  ];
showUsers();
function showUsers(){
  console.log("Thong tin nguoi dung : ");
  console.log(users);
}
const Users1 = {id: 10, name: "Thanh Phong", age:19, gender: "male", money:1500}
function addUsers(Users1){
  users.push(Users1);
}
addUsers(Users1);
console.log("Thong tin sau khi them");
showUsers();
function deleteUserbyId(){
  for(let i = 0 ; i< users.length; i++){
    if(users[i].id == 10){
      users.splice(i,1);
    }
  }
}
deleteUserbyId();
console.log("Thong tin sau khi xoa ");
showUsers();
const Users2 = {id: 4, name:"Phong Tran" , age: 20, gender: "male", money:1700}
function updateUsersbyId(updateUser){
  for( let i = 0; i<users.length; i++){
    if(users[i].id == updateUser.id ){
      users[i] = Users2;
    }
  }
}
updateUsersbyId(Users2);
console.log("Thong tin sau khi cap nhat: ");
showUsers();
//them 2 nguoi 
const addUsers1 ={id: 7, name:"Thank Fong", age: 6, gender: "female", money: 700 }
const addUsers2 ={id: 6, name:"Thanh Ha", age: 23, gender:"female", money: 2560}
addUsers(addUsers1);
addUsers(addUsers2);

function countGender(){
  let count = 0;
  for(let i =0 ; i < users.length; i++){
    if(users[i].gender === "male"){
      count++;
    }
  }
  console.log(`Tong nguoi co gioi tinh nam la ${count}`);
}
countGender();

function countAge(){
  let count = 0;
  for(let i =0 ; i < users.length; i++){
    if(users[i].age > 15){
      count++;
    }
  }
  console.log(`Tong nguoi co tuoi lon hon 15 la ${count}`);
}
countAge();
function sumMoneybyId(){
  let sum= 0;
  for(let i =0 ; i< users.length; i++){
    if(users[i].id % 2 == 0){
      sum += users[i].money;
    }
  }
  console.log(`Tong tien nguoi dung co Id chan la : ${sum}`);
}
sumMoneybyId();
function maxminMoney(){
  let moneyMax = moneyMin = users[0].money;
  let userMax = userMin = 0;
  for( let i =0 ; i< users.length; i++){
    if(users[i].money > moneyMax){
      moneyMax = users[i].money;
        userMax = i;
    }
    if(users[i].money < moneyMin){
      moneyMin = users[i].money;
        userMin = i;
    }
  }
  console.log(`Nguoi giau nhat`);
  console.log(users[userMax]);
  console.log(`Nguoi ngheo nhat`);
  console.log(users[userMin]);
}
maxminMoney(users);

function changeGender(){
  for( let i =0 ; i< users.length ;i++){
    if(users[i].gender === "male"){
      users[i].gender = "female";
    }
  }
}
changeGender();
console.log("Thong tin sau khi chuyen doi gioi tinh");
showUsers();
