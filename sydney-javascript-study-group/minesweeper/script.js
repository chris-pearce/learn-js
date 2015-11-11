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

    TURN: 1,
    BOARD_SIZE: {
      rows: 9,
      cols: 9
    },
    BOARD_MAP: [],
    DIRECTIONS: {
      north:      [-1, 0],
      south:      [1, 0],
      east:       [0, 1],
      west:       [0, -1],
      northwest:  [-1, -1],
      northeast:  [-1, 1],
      southeast:  [1, 1],
      southwest:  [1, -1],
    },

    // Draw the board as markup
    drawTheBoard: function drawTheBoard() {
      var container = document.querySelector('.game__container');
      var list = document.createElement('ol');
      list.classList.add('board');
      var cells = this.BOARD_SIZE.rows * this.BOARD_SIZE.cols;

      for (var i = 0; i < cells; i++) {
        this.BOARD_MAP.push(" ");
        var listItem = document.createElement('li');
        listItem.classList.add('board__item');
        list.appendChild(listItem);
      }

      container.appendChild(list);
      console.log(this.BOARD_MAP);
    },

    // Initialise
    init: function() {
      this.drawTheBoard();
    }
  };

  window.MineSweeper = MineSweeper;
  MineSweeper.init();
}());