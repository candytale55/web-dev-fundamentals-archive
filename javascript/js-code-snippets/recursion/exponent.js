/*
Write a JavaScript program to compute the exponent of a number.
Note : The exponent of a number says how many times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
*/

function exponent(base, exp){
    if (exp === 0){
        return 1;
    } else {
        console.log("exp: " + exp);
        return base * exponent(base, exp-1)
    }
};

console.log("base: 4, exp: 2 ="+ exponent(4,2));

console.log("base: 2, exp: 8 ="+ exponent(2,8));