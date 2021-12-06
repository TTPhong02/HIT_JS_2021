const case1 = "tranduong";
const case2 = "hitclubhiuhiu";
const case3 = "aabb";


const countChar = (str) => {
  let count = 0;
  let res = str.split('');
  res.forEach((value,index) => {
      if(str.lastIndexOf(value) === str.indexOf(value)) {
          count++;
      }
      if(count === 1) console.log(index);
  });
  if(count === 0) {
      console.log(-1);
  }
}
 
countChar(case1);
countChar(case2);
countChar(case3);