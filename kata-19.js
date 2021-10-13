let whiteQueen = [0, 5]; //actual index values [row, col]
let blackQueen = [5, 0];

const generateBoard = function (whiteQueen, blackQueen) {
  //create outer array (row)
  let outerArray = new Array();
  //create innerArray of size 8 (col)
  let innerArray;
  //generate the chessboard
  for (let i = 0; i < 8; i++) {
    innerArray = new Array();
    for (let j = 0; j < 8; j++) {
    innerArray.push(0);
    }
    outerArray.push(innerArray);
  }

  //place the whiteQueen and blackQueen on our board 
  outerArray[whiteQueen[0]][whiteQueen[1]] = 1; 
  outerArray[blackQueen[0]][blackQueen[1]] = 1;
  return outerArray; 
}

const queenThreat = function (board) {
  //return true if both pieces are in the same row or col
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) return true;

  //get the initial row and col of whiteQueen piece (attacking piece)
  const row = whiteQueen[0];
  const col = whiteQueen[1];
  //check the diagonal paths
  for (let i = 1; i < 8; i++) {
    //check diagonals above
    if (row - i >= 0) {
      if (col - i >= 0 && board[row - i][col - i] === 1) return true;
      if (col + i <= 7 && board[row - i][col + i] === 1) return true;
    }
    //check diagonals below
    if (row + i <= 7) {
      if (col - i >= 0 && board[row + i][col - i] === 1) return true;
      if (col + i <= 7 && board[row + i][col + i] === 1) return true;
    }
  }
  return false;
}

//case 1:
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

//case 2:
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));