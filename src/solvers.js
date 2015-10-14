/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findSolution = function(row, n, board, validator, callback){

  //if all rows exhausted
  if (row === n) {
    //increment solution
    callback();
    //stop
    return;
  }
  //iterate over possible decisions
  for (var i = 0; i < n; i++) {
    //place a piece
    board.togglePiece(row, i);
    // conditional that prevents from happening if conflict
    if(!board[validator]()){
      // recurse into remaining problems
      findSolution(row+1, n, board, validator, callback);
      //unplace piece
    }
      board.togglePiece(row, i);
  }
  
};


window.findNRooksSolution = function(n) {
  var solution = new makeEmptyMatrix(n);  //fixme
  for(var i = n; i > 0; i--){

    solution[n - i][n - i] = 1;
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
return  solution;
  };


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount; //fixme
  var factorial = function(x){
    // if(x < 0){
    //   return - 1;
    // } else if(x === 0){
    //   return 1;
    // }
    solutionCount = x;
    while(x-- > 2){
      solutionCount *= x;
      // x--;
    }
    return solutionCount;
    };
    solutionCount = factorial(n);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n}); //fixme
  var solution = board.rows();
  // var recurse = function (){
  //     recurse();
  //   }
  // };

  // if(n === 1 ){
  //   solution[0][0] = 1;
  // } else if(n > 1) {
  //   var i = 0;
  //   var j = 1;
  //   for(var k = n; k >= 0; k--){
  //     solution[i][j] = 1;
  //     if(j < n - 2){
  //       i++;
  //       j += 2;
  //     } else {
  //       i++;
  //       j = 0;
  //     }

  findSolution(0, n, board, "hasAnyQueensConflicts", function(){
    solution = _.map(board.rows(), function(row){
      return row.slice();
    });
  });
      // console.log('i, j, solution', i,j, solution);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
    //}
    // recurse();
 // }
  return solution;

};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

    // debugger;
  var solutionCount = 0; //fixme
  var board = new Board({n:n});


//returning 0 when n is 1, 
//should be returning 1


    // debugger;
      console.log('solutionCount',solutionCount)
findSolution(0, n, board, "hasAnyQueensConflicts", function(){
  solutionCount++;});


// console.log('this is our board', board);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
    




    var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
};
