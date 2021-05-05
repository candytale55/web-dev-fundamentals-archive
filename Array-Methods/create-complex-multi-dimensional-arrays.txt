/*
One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array can very quickly become very complex data structure, known as a multi-dimensional, or nested array. 
*/


/*
variable _myNestedArray_ is an array.  Modify _myNestedArray_ using any combination of strings, numbers, and booleans for data elements so that it has exactly five levels of depth (the outer-most array is level 1). Somewhere on the third level, include the string "deep", on the fourth level, include the string "deeper", and on the fifth level, include the string "deepest".
*/

let myNestedArray = [ 
  'first level','unshift', false, 1, 2, 3, 'complex', 'nested',   
  ['second-level','loop', 'shift', 6, 7, 1000, 'method', 
  ['third-level','concat', false, true, 'spread', 'array', 'deep', 
  ['fourth-level','mutate', 1327.98, 'splice', 'slice', 'push', 'deeper',
  ['fifth-level','iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth','deepest']]]]
];


console.log("First level:")
let firstLevelArr = myNestedArray[0];
console.log(firstLevelArr);
console.log("")

console.log("Second level:");
let secondLevelArr = myNestedArray[myNestedArray.length-1]
console.log(secondLevelArr);
/*
[ 'second-level',
  'loop',
  'shift',
  6,
  7,
  1000,
  'method',
  [ 'third-level',
    'concat',
    false,
    true,
    'spread',
    'array',
    'deep',
    [ 'fourth-level',
      'mutate',
      1327.98,
      'splice',
      'slice',
      'push',
      'deeper',
      [Object] ] ] ]
 */
console.log("")

console.log("Third level:");
let thirdLevelArr = secondLevelArr[secondLevelArr.length-1];
console.log(thirdLevelArr);
/*
[ 'third-level',
  'concat',
  false,
  true,
  'spread',
  'array',
  'deep',
  [ 'fourth-level',
    'mutate',
    1327.98,
    'splice',
    'slice',
    'push',
    'deeper',
    [ 'fifth-level',
      'iterate',
      1.3849,
      7,
      '8.4876',
      'arbitrary',
      'depth',
      'deepest' ] ] ]
*/
console.log("")

console.log("Fourth level:");
let fourthLevelArr = thirdLevelArr[thirdLevelArr.length-1]
console.log(fourthLevelArr);
/*
[ 'fourth-level',
  'mutate',
  1327.98,
  'splice',
  'slice',
  'push',
  'deeper',
  [ 'fifth-level',
    'iterate',
    1.3849,
    7,
    '8.4876',
    'arbitrary',
    'depth',
    'deepest' ] ]
*/
console.log("")

console.log("Fifth level:");
let fifthLevelArr = fourthLevelArr[fourthLevelArr.length-1]
console.log(fifthLevelArr);
/*
[ 'fifth-level',
  'iterate',
  1.3849,
  7,
  '8.4876',
  'arbitrary',
  'depth',
  'deepest' ]*/
console.log("")
