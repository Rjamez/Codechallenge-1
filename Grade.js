// For the Grading system for the students
// We should first create a Function to get student grade based on marks
function getGrade() {
    // Prompt the user to input marks
    let marks = prompt("Enter student marks (0-100):");

    // Convert the input to a number
    marks = Number(marks);

    // Check if the input is valid (between 0 and 100)
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Please enter a valid number between 0 and 100.");
        return; // Exit the function if input is invalid
    }

    // Determine the grade based on marks
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {  
        grade = "B";
    } else if (marks >= 41) {   
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Provide the output for the grades submitted using alert
    alert(`The grade is: ${grade}`);
}

// Call the function to see if the guidelines have full effect on the function
getGrade();
