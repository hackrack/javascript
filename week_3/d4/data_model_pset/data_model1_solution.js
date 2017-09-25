// ~~~~~~ 1
var students1 = [
  { name : "Anthony" },
  { name : "Winnie" },
  { name : "Pawandeep" }
];

//Write a function that will print the name of all the students
//Example
// printNames(students1)
// Anthony
// Winnie
// Pawandeep

function printNames(students) {
  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    console.log(student.name);
  }
}

printNames(students1); // uncomment when ready to test

// ~~~~~~ 2
var students2 = [
  {
    name : "Anthony",
    id : 0
  }, {
    name : "Winnie",
    id : 1
  }, {
    name : "Pawandeep",
    id : 2
  }
];

//Write a function that will print the name and id of all the stuents
//Example
// printStudents(students2)
// Anthony is student #0
// Winnie is student #1
// Pawandeep is student #2

function printStudents(students) {
  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    console.log(student.name + " is student # " + student.id);
  }
}

printStudents(students2); // uncomment when ready to test

//Alternate solution using for in loop syntax
function printStudents2(students) {
  for (var id in students) {
    console.log(students[id].name + " is student # " + id);
  }
}

//~~~~~3
var students3 = [
  {
    name : "Anthony",
    id : 0,
    grades : [{ id : 0, score : 84},{ id : 1, score : 20},{ id : 2, score : 80}]
  }, {
    name : "Winnie",
    id : 1,
    grades : [{ id : 0, score : 62},{ id : 1, score : 56},{ id : 2, score : 100}]
  }, {
    name : "Pawandeep",
    id : 2,
    grades : [{ id : 0, score : 79},{ id : 1, score : 92},{ id : 2, score : 49}]
  }
];

//Write a function that will print the name of the student and their highest test score
//Example
// printBestGrade(students3)
// Anthony 84
// Winnie 100
// Pawandeep 92

function bestGrade(grades) {
  var best = grades[0].score;
  for (var i = 1; i < grades.length; i += 1) {
    var grade = grades[i];
    if (grade.score > best) { best = grade.score; }
  }
  return best;
}

function printBestGrade(students) {
  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    console.log(student.name, bestGrade(student.grades));
  }
}

printBestGrade(students3); // uncomment when ready to test


//Write a function that will print the name of the student and their average test score
//Example
// printAverageGrade(students3)
// Anthony 61.333333333333336
// Winnie 72.66666666666667
// Pawandeep 73.33333333333333

function averageGrade(grades) {
  var sum = 0;
  for (var i = 0; i < grades.length; i += 1) {
    var grade = grades[i];
    sum += grade.score;
  }
  return sum / grades.length;
}


function printAverageGrade(students) {
  for (var i = 0; i < students.length; i += 1) {
    var student = students[i];
    console.log(student.name, averageGrade(student.grades));
  }
}

printAverageGrade(students3); // uncomment when ready to test

