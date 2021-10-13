const squareCode = function (message) {
	let messageArray = message.split('');
	let charArray = [];
	for (const char of messageArray) {
		if (char === ' ') continue;
		charArray.push(char);
	}
	
	//compute the square root of the length message
	let sqrt = Math.ceil(Math.sqrt(charArray.length));
	
	//create innerArray variable
	//create outeArray variable
	//create a counter to keep track of col position
	let innerArray = []
	let outerArray = [];
	let charPos = 1;
	
	//loop through each character
	for (const char of charArray) {
		//push character into innerArray
		innerArray.push(char);
		if (charPos === sqrt) {
			//push innerArray into outerArray
			outerArray.push(innerArray);
			//reset innerArray to empty
			innerArray = [];
			//reset charPos to zero
			charPos = 0;
		}
		//increment charPos by 1
		charPos += 1;
	}
	
	//push the last word in innerArray to outerArray if needed
	if (innerArray.length !== 0) {
		//fill the end with zero's
		for (let i = innerArray.length; i < sqrt; i ++) {
			innerArray.push(' ');
		}
		//push innerArray to end of outerArray
		outerArray.push(innerArray);
	}
	
	//create a string to hold encrypted message
	let string = '';
	let subString = '';
	//loop sqrt times
	for (let i = 0; i < sqrt; i++) {
		//loop over outerArray
		for (const elm of outerArray) {
			//add character to string
			if (!(elm[i] === ' ')) subString += elm[i];
		}
		//add a space to string after every line
		//if (!(subString[Subtring.length - 1] === ' ')) string += ' ';
		if (i !== sqrt - 1) {
			string = string + subString + ' ';
		} else {
			string += subString;
		}
		//clear subString
		subString = '';
	}
	return string;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));