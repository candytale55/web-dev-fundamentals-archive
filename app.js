
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  let squares = Array.from(document.querySelectorAll('.grid div'));
  const ScoreDisplay = document.querySelector('#score');
  const StartBtn = document.querySelector('#start-button');
  const width = 10;
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

  // What tetromino will be drawn:
  let current = theTetrominoes[4][0];
  //console.log(theTetrominoes[0][0]);

  // draw the rotations of the TETROMINOES
  function draw(){
    current.forEach( index => {
      squares[currentPosition + index].classList.add('tetromino');
    })
  } // end function draw()

  draw();
})


/*

const lTetromino = [
  [],[],[],[]
];


  function showAlert() {
    alert('You have been alerted');
  }
  showAlert();
*/
