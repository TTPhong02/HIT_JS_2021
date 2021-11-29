// Bài 1
// Cho 1 mảng sau
// Đếm số lần xuất hiện của các số
// Ví dụ
// const nums = [1,1,2]
// Output:
// Số 1 xuất hiện 2 lần
// Số 2 xuất hiện 1 lần

//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];


function countNumber(num){
    num.sort();
    let count = 1;
    for( let i = 0 ; i < num.length; i++){
        if(num[i] == num[i+1])
            count++;
        else{
            console.log(`phan tu ${num[i]} xuat hien ${count} lan`);
            count = 1 ;
        }
    }
}
console.log("Kiem tra Case 1");
countNumber(nums);
console.log("Kiem tra Case 2");
countNumber(nums1);
console.log("Kiem tra Case 3");
countNumber(nums2);
