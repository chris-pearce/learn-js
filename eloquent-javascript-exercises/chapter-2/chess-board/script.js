/**
 * Write a program that creates a string that represents an 8×8 grid, using
 * newline characters to separate lines. At each position of the grid there is
 * either a space or a “#” character. The characters should form a chess board.
 *
 * Passing this string to console.log should show something like this:
 *
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
     # # # #
    # # # #
 *
 * When you have a program that generates this pattern, define a variable size
 * = 8 and change the program so that it works for any size, outputting a grid
 * of the given width and height.
 *
 * http://eloquentjavascript.net/02_program_structure.html#h_5Hz2kiaaXp
 */


var chessBoard = function() {

  var hash          = "#";
  var space         = " ";
  var lineBreak     = "\n";
  var gridSize      = 8;
  var chars         = "";

  for (var i = 0; i < gridSize; i++) {
    if (i % 2 === 0) {
        for (var j = 0; j < gridSize; j++) {
            if (j % 2 === 0) {
                chars = chars + hash;
            } else {
                chars = chars + space;
            }
        }
    } else {
        for (var j = 0; j < gridSize; j++) {
            if (j % 2 === 0) {
                chars = chars + space;
            } else {
                chars = chars + hash;
            }
        }
    }
    chars = chars + lineBreak;
  }

  console.log(chars);

};


var chessBoardAlt = function() {

  var gridSize      = 8;
  var chars         = "";

  for (var i = 0; i < gridSize; i++) {
    for (var j = 0; j < gridSize; j++) {
        if ((i + j) % 2 === 0) {
            chars = chars + "#";
        } else {
            chars = chars + " ";
        }
    }
    chars = chars + "\n";
  }

  console.log(chars);

};

chessBoardAlt();