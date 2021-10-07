const organizeInstructors = function (instructors) {
  //create a new object to hold the final result
  let courseObject = new Object();

  //for each object in array
  for (const obj of instructors) {
    //add a property for the course if it doesn't exist in courseObject
    if (!(courseObject.hasOwnProperty(obj.course))) {
      courseObject[obj.course] = [];
      courseObject[obj.course].push(obj.name);
    } else {
      //push name to the end of the course array 
      courseObject[obj.course].push(obj.name);
    }
  }
  return courseObject;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));