
let size = 8;
for (let i=0; i<=size; i++) {
  let pattern = "";  
  if (i % 2 === 0){
       pattern = " #";
   } else {
       pattern = "# ";
   }
  let counter = 0;
  while (counter <= size/2){
    pattern += pattern;
    counter++;
  }
  console.log(pattern);
}
