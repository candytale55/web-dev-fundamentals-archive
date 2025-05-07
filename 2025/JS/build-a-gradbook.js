
// OLD VERSION

// ! Reduce() worked, but the exercise required a for loop.  
function getAverage(scores) {
  let sum = 0;  
  for (const score of scores) {
    sum += score;
  }
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Returns boolean. True if the score is different than "F", false if it isn't.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// The average is for the total scores of all the students. The Grade is just for the individual student.
// ! The problem required to use concatenation for the messages.
function studentMsg(totalScores, studentScore) {
  if(hasPassingGrade(studentScore)){
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.";
  } else{
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.";
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 97));
// "Class average: 71.7. Your grade: A. You passed the course.""
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 42));
//Class average: 71.7. Your grade: F. You failed the course.










// NEW VERSION - 

function getAverage(arr){
  return arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue, 0,) / arr.length;
}

//console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); 

function getGrade(score){
  let scoreInLetter;
  if (score > 100){
      scoreInLetter = "Invalid Grade";
    } else if (score === 100){
      scoreInLetter = "A+";
    } else if (score <= 99 && score >= 90){
      scoreInLetter = "A";
    } else if (score <= 89 && score >= 80){
      scoreInLetter = "B";
    } else if (score <= 79 && score >= 70){
      scoreInLetter = "C";
    } else if (score <= 69 && score >= 60){
      scoreInLetter = "D";
    } else if (score <= 59 && score >= 0){
      scoreInLetter = "F";
    } else {
      return "There's a mistake. Give me a valid score"
    }
  return scoreInLetter;
}

//console.log(getGrade("jfdks"));
//! Puedes pasarle calificaciones mayores de 100 u otras letras y no detecta los errores. Pero así pasa los requerimientos. 

function hasPassingGrade(score){
  let isPassingGrade;
  if (getGrade(score)!=="F"){
    isPassingGrade = true;
  } else isPassingGrade = false;
  return isPassingGrade;
}

//console.log(hasPassingGrade("F"));


//! Las calificaciones y los promedios no se corresponden. Pueden tener un promedio de 50.8 y pasar con "A+"
function studentMsg(arrScores, score){
  if (hasPassingGrade(score)){
    return `Class average: ${getAverage(arrScores)}. Your grade: ${getGrade(score)}. You passed the course.`
  }
  else if (!hasPassingGrade(score)){
    return `Class average: ${getAverage(arrScores)}. Your grade: ${getGrade(score)}. You failed the course.`
  }
  
}

console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
