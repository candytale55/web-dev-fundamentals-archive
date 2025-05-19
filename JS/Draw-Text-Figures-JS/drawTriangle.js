// Half a triangle

let triangleHeight = 8; // Is 1 less that the actual height since x starts in 1.
let x=1;
while (x < triangleHeight) {
  let line = "";
  for (let i=0; i < x; i++){
    line += "#"
  }
  console.log(line);
  x++;
}
