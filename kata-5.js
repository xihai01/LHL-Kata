const urlEncode = function(text) {
	//trim off whitespace from ends of text
  text = text.trim();
  //create a new array to store encoded text
  let arr = [];
  
  //check each character in text and change the spaces to a %20
  for (const char of text) {
  	if (char === ' ') {
    	arr.push('%20');
    } else {
    	arr.push(char);
    }
  }
  return arr.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));