const numberOfVowels = function(data) {
	let vowelCount = 0;
	for(const char of data) {
  	//check if character is a vowel and add it to vowelCount
    switch(char) {
    	case 'a' || 'A' : 
      	vowelCount ++;
        break;
      case 'e' || 'E' :
      	vowelCount ++;
        break;
      case 'i' || 'I' :
      	vowelCount ++;
      	break;
      case 'o' || 'O' :
      	vowelCount ++;
        break;
      case 'u' || 'U' :
      	vowelCount ++;
        break;
      default :
      	break;
    }
  }
return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));