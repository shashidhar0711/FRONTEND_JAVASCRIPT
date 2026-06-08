const students = [
  { name: "Alice", score: 92 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 60 },
  { name: "Sumit", score: 97 },
  { name: "Mrinal", score: 10 },
];

// "A" (90-100)
// "B" (75-89)
// "C" (below 75)

// Interview Question of a startup - coditation System

// Return an object like:
// {
//   A: ["Alice" , 'Sumit'],
//   B: ["Bob"],
//   C: ["Charlie", "Mrinal"]
// }

function categorizeStudents(studentList) {
    // form the output format
    // iterate the studentlist
    // get the score and compare with grades 
    // based on grade, add into associate grade array
    
    const result = {A:[], B:[], C:[]}

    for(let i = 0; i < studentList.length; i ++) {
        if(studentList[i].score >= 90) {
            result.A.push(studentList[i].name)
        } else if(studentList[i].score >= 75) {
            result.B.push(studentList[i].name)
        } else  {
            result.C.push(studentList[i].name)
        }
    }

    return result


}

console.log(categorizeStudents(students));