/*
Write a JavaScript program to check whether a number is even or not.
*/

function isEven(num){
    if( num < 0) {
        num = Math.abs(num);
    }   
    if (num === 0){
        return true;
    }
    if (num ===1){
        return false;
    } 
    else {
        num = num - 2;
        //console.log(num);
        return isEven(num);
    }
};

console.log("isEven(648)? " + isEven(648));
console.log("isEven(-648)? " + isEven(-648));
console.log("isEven(0)? " + isEven(0));
console.log("isEven(649)? " + isEven(649));