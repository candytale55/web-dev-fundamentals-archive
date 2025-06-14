/*
Write a JavaScript program to get the integers in range (x, y)
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/

function integersInRange(first, last) {
    console.log("First number: "+first+ " Last number: "+last );
    if (last - first === 2 ) {
        return [first + 1];
    } else {
        let arr = integersInRange(first, last-1);
        arr.push(last-1);
        return arr;
    }
};


console.log(integersInRange(3,8));