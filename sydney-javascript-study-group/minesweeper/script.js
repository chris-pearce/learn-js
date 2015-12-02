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


  /**
   * Helper functions.
   */

  // Create Handler function
  function createHandler(i, j, cell) {
    return function(e) {
      if (MineSweeper.BOARD_MAP[i][j] == MineSweeper.MINE) {
        cell.classList.add('is-mine');
        cell.innerHTML = MineSweeper.MINE;
      }
    }
  }

  function controlAnimation() {
    var container = document.querySelector('.board');
  }


  /**
   * The `MineSweeper` game object.
   */

  var MineSweeper = {


    // Constants
    BOARD_SIZE: {
      rows: 9, // Y
      cols: 9  // X
    },
    BOARD_MAP:  [],
    MINE_MAP:   [],
    MINE_COUNT: 10,
    MINE:       "*",
    FLAG:       "/",


    // Draw the board’s UI and create a 2d array of the board (pushed to
    // BOARD_MAP)
    drawTheBoard: function drawTheBoard() {

      // Find the board container
      var container = document.querySelector('.board');

      // Store the number of board rows and cols
      var rows = this.BOARD_SIZE.rows;
      var cols = this.BOARD_SIZE.cols;

      // Loop through the board rows
      for (var i = 0; i < rows; i++) {

        // Construct the board row HTML
        var row = document.createElement('div');
        row.setAttribute('id', i);
        row.classList.add('board__row');

        // The board array that’ll get pushed to the BOARD_MAP array
        var cellMap = [];

        // Loop through the board cells
        for (var j = 0; j < cols; j++) {

          // Construct the board cell HTML
          var cell = document.createElement('button');
          cell.setAttribute('id', (i + "-" + j));
          cell.classList.add('board__cell');

          // Insert the board cell into the board row
          row.appendChild(cell);

          // Add a click event listener to the board cell and pass the cells x
          // and y coordinates and the cell itself to the `createHandler`
          // helper function
          cell.addEventListener('click', createHandler(i, j, cell));

          // Push the board’s rows and cells to the `cellMap` array
          cellMap.push("");
        }

        // Push the board into the board map
        MineSweeper.BOARD_MAP.push(cellMap);

        // Insert the rows into the container
        container.appendChild(row);
      }
    },


    // Build mines
    buildMines: function buildMines() {
      // Make sure we don’t build too many mines by counting down to zero by
      // subtracting one from the mine count each time the mine map array is
      // populated
      var count = MineSweeper.MINE_COUNT - MineSweeper.MINE_MAP.length;
      if (count > 0) {

        // Loop through the mine count each time generating two random numbers
        // used for each mines “x” and “y” board coordinates then push a mine
        // into the mine map array *and* plot a mine into the board map array
        for (var i = 0; i < count; i++) {
          var randomX = Math.round(Math.random() * (MineSweeper.BOARD_SIZE.cols - 1));
          var randomY = Math.round(Math.random() * (MineSweeper.BOARD_SIZE.rows - 1));
          MineSweeper.BOARD_MAP[randomX][randomY] = MineSweeper.MINE;
          MineSweeper.MINE_MAP.push(randomX + "-" + randomY);
        }

        // Using the lodash lib make sure we prevent duplicate mine coordinates
        // from occurring
        MineSweeper.MINE_MAP = _.uniq(MineSweeper.MINE_MAP);

        // Keep repeating this function until we get the expected number of
        // mines
        MineSweeper.buildMines();
      }
    },

    // Plot the numbers on the board
    // N.B. NOT BEING USED ATM & MAY NEVER BE??
    plotNumbers: function plotNumbers() {

      // Extract x and y coords by getting the 1st and 3rd numbers from the
      // string
      var mineMap  = MineSweeper.MINE_MAP[0].split("-");
      var mineMapY = mineMap[0];
      var mineMapX = mineMap[1];
      // Plot the adjacent neighbours
      var north = --mineMapY;
      var east  = ++mineMapX;
      var south = ++mineMapY;
      var west  = --mineMapX;

      if (north >= 0) {
        var y = north;
        var x = east;
        MineSweeper.BOARD_MAP[y][x] = "1";
      }
    },

    // Initialise
    init: function() {
      this.drawTheBoard();
      this.buildMines();
      //this.plotNumbers();
    }
  };

  // Bind the program to the `window` object and initialise it
  window.MineSweeper = MineSweeper;
  MineSweeper.init();

  // Render the Board & Mine map arrays to the console
  console.log("Board map:");
  console.log(MineSweeper.BOARD_MAP);
  console.log("Mine map:");
  console.log(MineSweeper.MINE_MAP);
}());