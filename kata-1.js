//Sum the largest two numbers in an array of length 2 or more.
//- create a variable named maxNum set to first number in array
//- create a variable named secondMaxNum set to 0
//- create a variable named currNum set to 0
//- for each number in the array
//- compare the current number with the number next to it

const sumLargestNumbers = function(data) {
	let maxNum = data[0];
	let secondMaxNum = data[1];
	//return the sum of the number in index 0 and index 1 if array length is 2
	if (data.length === 2) return maxNum + secondMaxNum;
	//check the first two numbers and set appropriately
	if (secondMaxNum > maxNum) {
		maxNum = data[1];
  	secondMaxNum = data[0];
}

//for each number in data, compare with maxNum and secondMaxNum
for(let i = 2; i < data.length; i++) {
	//if current number is less than maxNum and greater than second largest num
  if(data[i] < maxNum) {
  	if(data[i] > secondMaxNum) {
    	secondMaxNum = data[i];
    }
  } else {
  	secondMaxNum = maxNum;
  	maxNum = data[i];
  }
}
//return the sum of maxNum + secondMaxNum
return maxNum + secondMaxNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));