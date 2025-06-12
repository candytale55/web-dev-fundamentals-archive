/*
howOld() has two number parameters, age and year, and 
returns how old someone who is currently that age was 
(or will be) during that year. It indicates if you will
be that age or if you already have that age, or if the 
year is before they were born, how many years have passed 
since.
*/

const howOld = (age, year) => {
    // function uses the current year:
    let dateToday = new Date();
    let thisYear = dateToday.getFullYear();
  
    const yearDifference = year - thisYear
    const newAge = age + yearDifference
    if (newAge < 0) {
        return `The year ${year} was ${-newAge} years before you were born`
    } else if (newAge > age) {
        return `You will be ${newAge} in the year ${year}`
    } else {
        return `You were ${newAge} in the year ${year}`
    }
}; 

//Testing:
console.log(howOld(40, 2056));
console.log(howOld(40, 1956));
console.log(howOld(40, 2021));
console.log(howOld(40, 2020));
console.log(howOld(40, 2019));
