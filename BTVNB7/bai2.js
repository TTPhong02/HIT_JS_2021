let digits1 = [1,2,3];
let digits2 = [0];
let digits3 = [9];
const plusValue = (arr) =>{
    return(Number(arr.join('')) +1 ).toString().split('');
}
console.log(plusValue(digits1));
console.log(plusValue(digits2));
console.log(plusValue(digits3));