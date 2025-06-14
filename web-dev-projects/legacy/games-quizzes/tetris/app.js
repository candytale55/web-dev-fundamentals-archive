
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  const width = 10;
  let nextRandom = 0;
//  console.log(squares)

  // TETROMINOES
  const lTetromino = [
    [1, width+1, width*2+1, 2],  // 1, 11, 21, 2
    [width, width+1, width+2, width*2+2], // 10, 11, 12, 22
    [1, width+1, width*2+1, width*2 ], // 1, 11, 21, 20
    [width, width*2, width*2+1, width*2+2] // 10, 20, 21, 22
  ];

  const zTetromino = [
    [width*2, width*2+1, width+1, width+2], // 20, 21, 11, 12
    [0, width, width+1, width*2+1], // 0, 10, 11, 21
    [width*2, width*2+1, width+1, width+2], // repeats
    [0, width, width+1, width*2+1] // repeats
  ];

  const tTetromino = [
    [width, width+1, 1, width+2], // 10, 11, 1, 12
    [1, width+1, width*2+1, width+2], // 1, 11, 21, 12
    [width, width+1, width*2+1, width+2], // 10, 11, 21, 12
    [width, 1, width+1, width*2+1] // 10, 1, 11, 21
  ];

  const oTetromino = [
    [0, 1, width, width+1], // 0, 1, 10, 11
    [0, 1, width, width+1], // repeats
    [0, 1, width, width+1], // repeats
    [0, 1, width, width+1]  // repeats
  ];

  const iTetromino = [
    [1, width+1, width*2+1, width*3+1], // 1, 11, 21, 31
    [width, width+1, width+2, width+3], // 10, 11, 12, 13
    [1, width+1, width*2+1, width*3+1], // repeats
    [width, width+1, width+2, width+3]  // repeats
  ];

  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

  // Where we start drawing TETROMINOES
  let currentPosition = 4;
  let currentRotation = 0;

  let random = Math.floor((Math.random() * theTetrominoes.length));

  // What tetromino will be drawn:
  let current = theTetrominoes[random][currentRotation];
  //console.log(theTetrominoes[0][0]);

  // draw the rotations of the TETROMINOES
  function draw(){
    current.forEach( index => {
      squares[currentPosition + index].classList.add('tetromino');
    })
  } // end function draw()

  // undraw the TETROMINOES
  function undraw(){
    current.forEach( index => {
      squares[currentPosition + index].classList.remove('tetromino');
    })
  } // end undraw()


  // make the tetrominos move down every second.
  timerId = setInterval(moveDown, 1000);

  // Assign functions to keyCodes. e stands for "event". To get keyCodes try keyCode.info
  function control(e){
    if (e.keyCode === 37) {
      moveLeft();
    } else if (e.keyCode === 38) { //up arrow
      rotate();
    } else if (e.keyCode === 39){
      moveRight();
    } else if (e.keyCode === 40) { // down arrow
      //moveDown() but faster
    }
  } //end control(e)
  document.addEventListener('keyup', control); // (event, function)

  function moveDown(){
    undraw();
    currentPosition += width;
    draw();
    freeze(); // including it here, it checks every second.
  }

  function freeze(){
    if(current.some( index => squares[currentPosition + index + width].classList.contains('taken'))){
      current.forEach( index => squares[currentPosition + index].classList.add('taken'));
      // start a new tetromino falling
      random = nextRandom;
      nextRandom = Math.floor(Math.random() * theTetrominoes.length);
      current = theTetrominoes[random][currentRotation];
      currentPosition = 4;
      draw();
      displayShape();
    }
  } // end freeze()

  // RULES THAT SETS THE LIMITS OF THE MOVEMENT FOR TETROMINOES
  // The tetrominoes shouldn't go farther left
  function moveLeft(){
    undraw();
    const isAtLeftEdge = current.some( index => (currentPosition + index) % width === 0); //divided by 10 has no remainder = it is at index 10,20,30, etc.
    if(!isAtLeftEdge) currentPosition -=1;
    if(current.some(index => squares [currentPosition + index].classList.contains('taken'))){
    currentPosition +=1;} // if some of the squares goes into a space with class "taken" it will go back one space and therefore it seems it didn't move.
    draw();
  } // end moveLeft()

  // The tetrominoes move right, except for the edge or blockages by other tetrominoes
  function moveRight(){
    undraw();
    const isAtRightEdge = current.some( index => (currentPosition + index) % width === width-1); // if the remainder is equal to the width -1 then it is at the right edge ()
    if (!isAtRightEdge) currentPosition += 1;

    if( current.some (index => squares[ currentPosition + index].classList.contains('taken'))) {
      currentPosition -=1;
    }
    draw();
  } // end moveRight()


    // ROTATE THE TETROMINOES
    function rotate() {
      undraw();
      currentRotation ++; // moves through the index of rotations.
      if (currentRotation === current.length) {
        currentRotation = 0;
      }
      current = theTetrominoes[random][currentRotation];
      draw();
    } // rotate()


    // Show the next tetromino in the mini-grid
    const displaySquares = document.querySelectorAll('.mini-grid div');
    const displayWidth = 4;
    let displayIndex = 0;

    // Array with tetrominoes without rotations
    const upNextTetrominoes = [
      [1, width+1, width*2+1, 2], // lTetromino
      [0, width, width+1, width*2+1], //zTetromino
      [1, width, width+1, width+2], //tTetromino
      [0, 1, width, width+1], // oTetromino
      [1, width+1, width*2+1, width*3+1], // iTetromino
    ];

    // function that displays the shape
    function displayShape() {
      displaySquares.forEach(square => {
        square.classList.remove('tetromino');
      }); // remove any trace of tetromino from the grid
      upNextTetrominoes[nextRandom].forEach(index => {
        displaySquares[displayIndex + index].classList.add('tetromino');
      });
    }

})
