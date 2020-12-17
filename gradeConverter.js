/*
The purpose of this function is to take a number grade (1-100), defined by the variable grade, and to return the appropriate letter grade (A, B, C, D, or F).
    90 or higher gets an “A”
    80 - 89 gets a “B”
    70 - 79 gets a “C”
    65 - 69 gets a “D”
    Anything below a 65 gets an “F”
*/

function gradeConverter(grade){
    if (grade >= 90){
        return "A";  
    } 
    else if ( grade >= 80) {
        return "B";
    } 
    else if (grade >= 70 && grade <=79){
        return "C";
    }      
    else if (grade >= 65 && grade <=69){
        return "D";
    }
    else {
        return "F"
    }
}


// This should print an "A"      
console.log("Grade is 92 = " + gradeConverter(92));

// This should print a "C"
console.log("Grade is 70 = " + gradeConverter(70));

// This should print an "F"
console.log("Grade is 61 = " + gradeConverter(61));
