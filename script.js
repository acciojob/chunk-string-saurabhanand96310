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

function stringChop(str, size) {
 if(str === null){
	 return ""
 }
	let arr = str.split("")
	let result = []
	while(arr.length >0){
		result.push(arr.splice(0,size).join(""))
	}
return result 
}
 
// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
