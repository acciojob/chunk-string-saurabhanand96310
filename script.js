function stringChop(str, size) {
  // your code here
	   if (size <= 0 || str === '') {
        return [];
    }
	let arr=[];
	let s='';
	
	for (let i = 0; i < str.length; i++) {
		s=s+str.charAt(i)
		if(s.length===size){
			arr.push(s);
			s='';
		}
	}
	if (s !== "") {
    arr.push(s);
  }
	return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
