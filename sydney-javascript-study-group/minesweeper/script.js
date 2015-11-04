/**
 * Minesweeper the game
 * http://www.theodinproject.com/javascript-and-jquery/minesweeper
 *
 * Checks:
 *   Empty cell (cluster)
 *   Mine
 *   Number
 *
 * Neighbours = top / top-left / top-right
 *              left / right
 *              bottom / bottom-left / bottom-right
 *
 * 1. Draw grid: UI & array.
 * 2. Randomly plot 10 mines in the grid & pre-generate numbers
 * 3. Click a cell:
 *    if (is it a mine)
 *      gameover
 *    else (check neighbours for mines)
 *      if (mine tally > 0)
 *        render mine tally
 *      else (check outer neighbours)
 *        if blank (not a mine or touching a mine)
 *          look one cell to the left
 *            check neighbours
 *              if mine tally > 0
 *                render mine tally
 *                go back to original cell
 *              if also blank look left again
 *                if mine tally > 0
 *                render mine tally
 *          look one cell to the bottom
 *          look one cell to the right
 *          look one cell up
 */


var MineSweeper = {


  // Constants
  TURN: 1,
  GRID: [],


  // Draw the grid: array & UI
  drawGrid: function() {
    var container = $('.container');

    for (var i = 0; i < 9; i++) {

      var row = $('<div class="row">');
      var cell = [];

      for (var j = 0; j < 9; j++) {
        if (j == 5) {
          cell.push("cell");
        }
        row.append($('<div class="box_' + i + j + '">'));
      }

      this.GRID.push(cell);
      container.append(row);
    }
    console.log(this.GRID);
  },


  // Plot mines
  plotMines: function() {

  },


  // Play the game
  playGame: function() {
    $(".container div").on('click', function(){

      var $box = $(this);

      // Append a class when clicked
      $(this).addClass("is-active");

      // Check if a box is empty
      if ($box.html().length === 0) {

        // Alternate between turns
        if (TicTacToe.TURN % 2 === 0) {
          $box.text("X");
        } else {
          $box.text("O");
        }

        // Add more turns
        TicTacToe.TURN++;
      }
    });

  },

  // Initialise
  init: function() {
    this.drawGrid();
    this.playGame();
  }

};


MineSweeper.init();