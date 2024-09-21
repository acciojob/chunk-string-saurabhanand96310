// function stringChop(str, size) {
//   // your code here
// 	   if (size <= 0 || str === '') {
//         return [];
//     }
// 	let arr=[];
// 	let s='';
	
// 	for (let i = 0; i < str.length; i++) {
// 		s=s+str.charAt(i)
// 		if(s.length===size){
// 			arr.push(s);
// 			s='';
// 		}
// 	}
// 	if (s !== "") {
//     arr.push(s);
//   }
// 	return arr;
// }

// // Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));

const arr = [1, 2, 3, 4, 1, 0, 2, 2];
 
const divide = (arr, n) => {
  const result = [];
  let currentSubArray = [];
  let currentSum = 0;
 
  for(const num of arr) {
    if (currentSum + num > n){
      result.push(currentSubArray);
      currentSubArray = [];
      currentSum = 0;
    }
    currentSubArray.push(num);
    currentSum += num;
  }
 
  if (currentSubArray.length > 0) {
    result.push(currentSubArray);
  }
 
  return result;
}
 
const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
