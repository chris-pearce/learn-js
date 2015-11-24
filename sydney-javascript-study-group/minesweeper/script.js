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
 *    start timer
 *    if (is it a mine) <<<< Mine
 *      gameover
 *        prevent interacting with the board
 *        stop timer
 *    else (check neighbours for mines)
 *      if (mine number > 0)  <<<< Number
 *        render mine number
 *      else (check outer neighbours) <<<< Empty cell (cluster)
 *        if (not a mine or touching a mine)
 *          look one cell to the left
 *            check neighbours
 *              if (mine number > 0)
 *                render mine number
 *                go back to original cell
 *              if also blank look left again
 *                if (mine number > 0)
 *                  render mine number
 *          look one cell to the bottom
 *          look one cell to the right
 *          look one cell up
 *        else
 *          gameover
 *
 * [0,0][0,1][0,2][0,3][0,4][0,5][0,6][0,7][0,8]
 * [1,0][1,1][1,2][1,3][1,4][1,5][1,6][1,7][1,8]
 * [2,0][2,1][2,2][2,3][2,4][2,5][2,6][2,7][2,8]
 * [3,0][3,1][3,2][3,3][3,4][3,5][3,6][3,7][3,8]
 * [4,0][4,1][4,2][4,3][4,4][4,5][4,6][4,7][4,8]
 * [5,0][5,1][5,2][5,3][5,4][5,5][5,6][5,7][5,8]
 * [6,0][6,1][6,2][6,3][6,4][6,5][6,6][6,7][6,8]
 * [7,0][7,1][7,2][7,3][7,4][7,5][7,6][7,7][7,8]
 * [8,0][8,1][8,2][8,3][8,4][8,5][8,6][8,7][8,8]
 */
'use strict';

(function(){
  var MineSweeper = {

    // Consts
    BOARD_SIZE: {
      rows: 9, // Y
      cols: 9  // X
    },
    BOARD_MAP: [],
    MINE_MAP: [],
    MINE_COUNT: 10,
    MINE: "*",
    FLAG: "/",

    // Draw the board as markup
    drawTheBoard: function drawTheBoard() {

      // Find the board container
      var container = document.querySelector('.board');

      // Number of board rows and cols
      var rows = this.BOARD_SIZE.rows;
      var cols = this.BOARD_SIZE.cols;

      // Row loop
      for (var i = 0; i < rows; i++) {

        // Construct the row HTML
        var row = document.createElement('div');
        row.setAttribute('id', i);
        row.classList.add('board__row');

        // Cell array
        var cellMap = [];

        // Cell loop
        for (var j = 0; j < cols; j++) {

          // Construct the cell HTML
          var cell = document.createElement('button');
          cell.setAttribute('id', ("cell-" + i + "-" + j));
          cell.classList.add('board__cell');

          // Insert the cell into the row
          row.appendChild(cell);

          // Add cell count to cell array
          cellMap.push("");
        }

        MineSweeper.BOARD_MAP.push(cellMap);
        container.appendChild(row);
      }

      console.log(MineSweeper.BOARD_MAP);
    },

    // Build mines
    buildMines: function buildMines() {
      var count = MineSweeper.MINE_COUNT - MineSweeper.MINE_MAP.length;

      // Make sure we don't exceed number of mines
      if (count > 0) {

        for (var i = 0; i < count; i++) {
          var randomX = Math.round(Math.random() * (MineSweeper.BOARD_SIZE.cols - 1));
          var randomY = Math.round(Math.random() * (MineSweeper.BOARD_SIZE.rows - 1));
          MineSweeper.BOARD_MAP[randomX][randomY] = MineSweeper.MINE;
          MineSweeper.MINE_MAP.push("#cell-" + randomX + "-" + randomY);
        }

        MineSweeper.MINE_MAP = _.uniq(MineSweeper.MINE_MAP);
        MineSweeper.buildMines();
        console.log(MineSweeper.MINE_MAP);

        var elem = document.querySelector(MineSweeper.MINE_MAP[0]);
        elem.innerHTML = MineSweeper.MINE;
      }
    },

    // Initialise
    init: function() {
      this.drawTheBoard();
      this.buildMines();
    }
  };

  window.MineSweeper = MineSweeper;
  MineSweeper.init();
}());