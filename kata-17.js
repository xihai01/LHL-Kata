const urlDecode = function (text) {
	//split the text into key-value pair arrays
	let array = text.split('&');
	//create a new object to store the key-values
	let obj = new Object();
	//create a bool to detect equal (equal=true)
	let isEqualSign = false;
	let propStr = '';
	let valueStr = '';
	
	//loop through each key-value pair
	for (let i = 0; i < array.length; i++) {
		for (let k = 0; k < array[i].length; k++) {
			//set isSpace to true and skip this iteration
			if (array[i][k] === "=") {
				isEqualSign = true;
				continue;
			}
			
			if (isEqualSign === true) {
				//convert any %20 into spaces " "
				if (array[i][k] === '%') {
					valueStr += ' ';
					k += 2;
				} else {
					valueStr += array[i][k];
				}
			} else {
				propStr += array[i][k];
			}
		}
		//push propStr and valueStr to object
		obj[propStr] = valueStr;
		//set isSpace to false for next key-value pair
		isEqualSign = false;
		//clear propStr and valueStr
		propStr = '';
		valueStr = '';
	}
	return obj;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);