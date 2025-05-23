
const truthyOrFalsy = value => value ? true : false ;


//  Testing
console.log(truthyOrFalsy(null)) //  false
console.log(truthyOrFalsy(NaN))  //  false
console.log(truthyOrFalsy(0))    //  false
console.log(truthyOrFalsy(""))        //  false
console.log(truthyOrFalsy(undefined)) //  false
console.log(truthyOrFalsy(false))     //  false


console.log(truthyOrFalsy("any string")) //  true
console.log(truthyOrFalsy(1))      //  true
console.log(truthyOrFalsy(-1))     //  true
console.log(truthyOrFalsy(" "))    //  true
console.log(truthyOrFalsy(true))   //  true


