// This file is a Backbone Model (don't worry about what that means)
// It's part of the Board Visualizer
// The only portions you need to work on are the helper functions (below)

(function() {

  window.Board = Backbone.Model.extend({
// console.log(this.Board);
    initialize: function (params) {
      if (_.isUndefined(params) || _.isNull(params)) {
        console.log('Good guess! But to use the Board() constructor, you must pass it an argument in one of the following formats:');
        console.log('\t1. An object. To create an empty board of size n:\n\t\t{n: %c<num>%c} - Where %c<num> %cis the dimension of the (empty) board you wish to instantiate\n\t\t%cEXAMPLE: var board = new Board({n:5})', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: grey;');
        console.log('\t2. An array of arrays (a matrix). To create a populated board of size n:\n\t\t[ [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...], [%c<val>%c,%c<val>%c,%c<val>%c...] ] - Where each %c<val>%c is whatever value you want at that location on the board\n\t\t%cEXAMPLE: var board = new Board([[1,0,0],[0,1,0],[0,0,1]])', 'color: blue;', 'color: black;','color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: blue;', 'color: black;', 'color: grey;');
      } else if (params.hasOwnProperty('n')) {
        this.set(makeEmptyMatrix(this.get('n')));
      } else {
        this.set('n', params.length);
      }
    },

    rows: function() {
      return _(_.range(this.get('n'))).map(function(rowIndex) {
        return this.get(rowIndex);
      }, this);
    },

    togglePiece: function(rowIndex, colIndex) {
      this.get(rowIndex)[colIndex] = + !this.get(rowIndex)[colIndex];
      this.trigger('change');
    },

    _getFirstRowColumnIndexForMajorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex - rowIndex;
    },

    _getFirstRowColumnIndexForMinorDiagonalOn: function(rowIndex, colIndex) {
      return colIndex + rowIndex;
    },

    hasAnyRooksConflicts: function() {
      return this.hasAnyRowConflicts() || this.hasAnyColConflicts();
    },

    hasAnyQueenConflictsOn: function(rowIndex, colIndex) {
      return (
        this.hasRowConflictAt(rowIndex) ||
        this.hasColConflictAt(colIndex) ||
        this.hasMajorDiagonalConflictAt(this._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) ||
        this.hasMinorDiagonalConflictAt(this._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))
      );
    },

    hasAnyQueensConflicts: function() {
      return this.hasAnyRooksConflicts() || this.hasAnyMajorDiagonalConflicts() || this.hasAnyMinorDiagonalConflicts();
    },

    _isInBounds: function(rowIndex, colIndex) {
      return (
        0 <= rowIndex && rowIndex < this.get('n') &&
        0 <= colIndex && colIndex < this.get('n')
      );
    },


/*
         _             _     _
     ___| |_ __ _ _ __| |_  | |__   ___ _ __ ___ _
    / __| __/ _` | '__| __| | '_ \ / _ \ '__/ _ (_)
    \__ \ || (_| | |  | |_  | | | |  __/ | |  __/_
    |___/\__\__,_|_|   \__| |_| |_|\___|_|  \___(_)

 */
    /*=========================================================================
    =                 TODO: fill in these Helper Functions                    =
    =========================================================================*/

    // ROWS - run from left to right
    // --------------------------------------------------------------
    //
    // test if a specific row on this board contains a conflict
      
    
    hasRowConflictAt: function(rowIndex) {
      // if(hasAnyRowConflicts()){


      // }
      //iterate through each row index of our board object, starting at 0
      // for(var i = 0; i < board[rowIndex].length; i++){
      //console.log('edef');
      //   //check to see if any other index contains a value that is not 0
      //     if(board[rowIndex][i] !== 0){
      //       return true;
      //     }
      //     //return true
      // }
      return false; // fixme
    },
    keyVal: [],

    // test if any rows on this board contain conflicts
    hasAnyRowConflicts: function() {
      //iterate through _currentAttributes row
      
      var count = 0;
        for(var i in this._currentAttributes){
          // console.log("cordinates", this._currentAttributes[i]);
          if(typeof this._currentAttributes[i] !== 'number') {
            for(var j = 0; j < this._currentAttributes[i].length; j++){
          // console.log('value', this._currentAttributes[i][j]);
              if(this._currentAttributes[i][j] !== 0){
                count++;
                if(count > 1){
                  return true;
                } 
              }
              }
              count=0;
            }
          }
          return false;
          
      // return found;

      // console.log(this._currentAttributes);
        //iterate through the values inside of the rows
          //if _currentAttributes[i][j] !== 0
      // return false; // fixme
    },



    // COLUMNS - run from top to bottom[
    // --------------------------------------------------------------
    //
    // test if a specific column on this board contains a conflict
    hasColConflictAt: function(colIndex) {
      return false; // fixme
    },

    // test if any columns on this board contain conflicts
    hasAnyColConflicts: function() {
  //console.log('current attribute', this._currentAttributes);
    var k = 0;
    var count = 0;
    for (var i in this._currentAttributes){
      if (typeof this._currentAttributes[i] !== 'number'){
        for (var j=0; j < this._currentAttributes[i].length; j++) {
          if (this._currentAttributes[j][k] !== 0){
            count++;
            if(count > 1){
              return true;
            }
          }
          }
          count = 0;
          k++;
        }
      }
      return false;



            // console.log('reverse',this._currentAttributes[j][k]);
            // console.log('count', count);
      // return false; // fixme
            // console.log('j:', j);
            // console.log('k:', k);
    },



    // Major Diagonals - go from top-left to bottom-right
    // --------------------------------------------------------------
    //
    // test if a specific major diagonal on this board contains a conflict
    hasMajorDiagonalConflictAt: function(majorDiagonalColumnIndexAtFirstRow) {
      return false; // fixme
    },

    // test if any major diagonals on this board contain conflicts
    hasAnyMajorDiagonalConflicts: function() {
      var arr = [];
      for (var i in this._currentAttributes){
        if(typeof this._currentAttributes[i] !== 'number') {
          for (var j=0; j<this._currentAttributes[i].length; j++){
            if(this._currentAttributes[i][j] !==0){
              arr.push(i - j);
              if(_.uniq(arr).length !== arr.length){
                // console.log(arr);
                return true; 
              }
            }
          } 
        }
      }    
      return false; // fixme
    },



    // Minor Diagonals - go from top-right to bottom-left
    // --------------------------------------------------------------
    //
    // test if a specific minor diagonal on this board contains a conflict
    hasMinorDiagonalConflictAt: function(minorDiagonalColumnIndexAtFirstRow) {
      return false; // fixme
    },

    // test if any minor diagonals on this board contain conflicts
    hasAnyMinorDiagonalConflicts: function() {
          var arr = [];
      for (var i in this._currentAttributes){
        if(typeof this._currentAttributes[i] !== 'number') {
          for (var j=0; j<this._currentAttributes[i].length; j++){
            if(this._currentAttributes[i][j] !==0){
              arr.push(i*1 + j);
                //console.log(arr);
              if(_.uniq(arr).length !== arr.length){
                return true; 
              }
            }
          } 
        }
      }    

      return false; // fixme
    }

    /*--------------------  End of Helper Functions  ---------------------*/


  });

  var makeEmptyMatrix = function(n) {
    return _(_.range(n)).map(function() {
      return _(_.range(n)).map(function() {
        return 0;
      });
    });
  };

  //   var board = new Board({n:5});
  // _.extend(board, makeEmptyMatrix(5));
  //   console.log("this is board", makeEmptyMatrix(5));
  //   console.log("this is the real board", board);

}());
