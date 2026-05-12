//Interview Questions on Array Methods(reduce,map,filter) and JavaScript Objects

// create an array of objects representing students with their names and scores and get the 
// below output with opitimed solution
//1. Filter the students who passed teh exams with more than 36 marks
// 2.Update Pass students names to upper case
//3. Total score of all the students who passed the exams

const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 30 },
    { name: "Charlie", score: 45 },
    { name: "David", score: 75 },
    { name: "Eve", score: 90 }
];

// Step 1: Filter the students who passed the exams with more than 36 marks
const passedStudents = students.filter(student => student.score > 36);
console.log("Passed Students:", passedStudents); // Output: [{ name: "Alice", score: 85 }, { name: "Charlie", score: 45 }, { name: "David", score: 75 }, { name: "Eve", score: 90 }]
// Step 2: Update Pass students names to upper case
const passedStudentsUpperCase = passedStudents.map(student => {
    return { name: student.name.toUpperCase(), score: student.score };    
});
console.log("Passed Students with Upper Case Names:", passedStudentsUpperCase);

// Step 3: Calculate the total score of all the students who passed the exams
const totalScore = passedStudents.reduce((sum, student) => sum + student.score, 0);     
console.log("Total Score of Passed Students:", totalScore); 
