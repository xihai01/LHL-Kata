const conditionalSum = function(values, condition) {
	let evenTotal = 0;
  let oddTotal = 0;
	if(values.length === 0) return 0;
  //for each number, check against condition
  for (const num of values) {
  	if (num % 2 === 0) {
    	evenTotal += num;
    } else {
    	oddTotal += num;
    }
  }
  return condition === 'even' ? evenTotal : oddTotal;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));