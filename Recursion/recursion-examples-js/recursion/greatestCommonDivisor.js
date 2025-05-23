/* JavaScript program to find the greatest common divisor (gcd) of two positive numbers. */

function gcd( num1, num2){
    console.log("GCD de "+ num1 + " y " + num2 + " = ")
    if ( ! num2 ){
        return num1;
    } else {
        console.log (num1, num2);
        return gcd(num2, num1 % num2);
    }
}

console.log(gcd(2154, 458));