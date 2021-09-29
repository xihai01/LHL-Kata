const instructorWithLongestName = function(instructors) {
	//create a variable to keep track of the index of the object with the longest name
  let largestStringIndex = 0;
	let index = 0;
	for (const obj of instructors) {
  	//compare the length of current string to the one stored in maxStringLength var
    if (obj.name.length > instructors[largestStringIndex].name.length) {
    	largestStringIndex = index; 
    }
    //increment index variable 
    index ++;
  }
  return instructors[largestStringIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));