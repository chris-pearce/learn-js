/**
 * Minesweeper the game
 * http://www.theodinproject.com/javascript-and-jquery/minesweeper
 *
 * Pseudo code:
 * 1. Draw grid: UI & array.
 * 2. Randomly plot 10 mines in the grid & pre-generate numbers
 * 3. Click a cell:
 *    start timer
 *    if (is it a mine) <<<< Mine
 *      game over
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
 *          game over
 *
 * TODO:
 * - Timer
 * - First click can never be a mine.
 * - UI:
 *   - Reset button.
 *   - Loader whilst waiting for the game to load.
 *   - Game over state.
 *   - 3D’afy.
 */


'use strict';

(function(){


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


    // Returns a cells location (X and Y coordinates) on the board by
    // extracting it from the `button` elements `id` attribute which is
    // applied in the `drawTheBoard()` function, you can use this to check if
    // a mine exists in a cell
    provideClickedCellCoords: function provideClickedCellCoords(elem) {
      var cellCoords = elem.id.split('-');
      var cellYCoord = cellCoords[0];
      var cellXCoord = cellCoords[1];
      return {
        cellYCoord: cellYCoord,
        cellXCoord: cellXCoord
      };
    },


    // Clicking a cell in the board to check if a mine exists, if it doesn’t we
    // hand over to the `checkNeighbouringCellsForMines()` function
    checkClickedCellForMine: function checkClickedCellForMine() {
      return function(event) {
        var getCellCoords = MineSweeper.provideClickedCellCoords(event.target);
        var mine = MineSweeper.BOARD_MAP[getCellCoords.cellYCoord][getCellCoords.cellXCoord] == MineSweeper.MINE;
        if (mine) {
          this.classList.add('has-mine');
          this.innerHTML = MineSweeper.MINE;
          MineSweeper.gameOver();
        } else {
          MineSweeper.checkNeighbouringCellsForMines();
        }
      }
    },


    // insertMineIntoCell: function insertMineIntoCell() {

    // },


    gameOver: function gameOver() {
      var container = document.querySelector('.board');
      var boardCell = document.querySelector('.board__cell');
      //var mines = MineSweeper.BOARD_MAP[][] == MineSweeper.MINE;
      container.classList.add('is-game-over');
      boardCell.classList.add('is-game-over');
      // if (mines) {

      // }
    },


    checkNeighbouringCellsForMines: function checkNeighbouringCellsForMines() {

      var getCellCoords = MineSweeper.provideClickedCellCoords(event.target);
      var north = --getCellCoords.cellYCoord; // -1
      var east  = ++getCellCoords.cellXCoord; // +1
      var south = ++getCellCoords.cellYCoord; // +1
      var west  = --getCellCoords.cellXCoord; // -1

      if (north >= 0) {
        if (MineSweeper.BOARD_MAP[north][getCellCoords.cellXCoord] == MineSweeper.MINE) {
          this.innerHTML = "1";
        } else {

        }
      }
    },


    // Draw the board’s UI and create a 2d array of the board (pushed to
    // BOARD_MAP)
    drawTheBoard: function drawTheBoard() {

      // Find the board container
      var container = document.querySelector('.board');

      // Store the number of board rows and cols
      var rowCount = this.BOARD_SIZE.rows;
      var colCount = this.BOARD_SIZE.cols;

      // Loop through the board rows
      for (var i = 0; i < rowCount; i++) {

        // Construct the board row HTML
        var row = document.createElement('div');
        row.setAttribute('id', i);
        row.classList.add('board__row');

        // The board map array that’ll get pushed to the BOARD_MAP `const` array
        var boardMap = [];

        // Loop through the board cells
        for (var j = 0; j < colCount; j++) {

          // Construct the board cell HTML
          var cell = document.createElement('button');
          cell.setAttribute('id', (i + '-' + j));
          cell.classList.add('board__cell');

          // Insert the board cell into the board row
          row.appendChild(cell);

          // Add a click event listener to the board cell `button` that fires
          // off to the `checkClickedCellForMine` function
          cell.addEventListener('click', MineSweeper.checkClickedCellForMine());

          // Push the board’s rows and cells to the `boardMap` array
          boardMap.push('');
        }

        // Push the board into the board map
        MineSweeper.BOARD_MAP.push(boardMap);

        // Insert the rows into the container
        container.appendChild(row);

        // Add a state hook to the board once it’s been drawn (loaded)
        container.classList.add('has-loaded');
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
        //MineSweeper.MINE_MAP = _.uniq(MineSweeper.MINE_MAP);

        // Keep repeating this function until we get the expected number of
        // mines
        MineSweeper.buildMines();
      }
    },


    // Initialise
    init: function() {
      this.drawTheBoard();
      this.buildMines();
    }
  };

  // Bind the program to the `window` object and initialise it
  window.MineSweeper = MineSweeper;
  MineSweeper.init();

  // Console.logs
  console.log("Board map:");
  console.log(MineSweeper.BOARD_MAP);
  console.log("Mine map:");
  console.log(MineSweeper.MINE_MAP);
}());