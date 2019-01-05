function reverseString(str){

	var value_split = str.split("");
	var result = "";

	for (var i = value_split.length - 1; i >= 0; i--) {
		result += value_split[i];
	}
	if(result.length > 0){
		document.getElementById('lblResult1').innerHTML = "Hello, " + result + "!";	
	}


}