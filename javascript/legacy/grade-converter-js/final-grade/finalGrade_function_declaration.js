
//as a function declaration:
function finalGrade(midterm, final, homework) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}


console.log(finalGrade(95,89,90)); // A
console.log(finalGrade(90,87,90)); // B
console.log(finalGrade(59,87,90)); // C
console.log(finalGrade(59,87,60)); // D
console.log(finalGrade(59,57,60)); // F
