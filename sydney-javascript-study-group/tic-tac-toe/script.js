var TicTacToe = {

  // Constants
  TURN: 1,
  GRID: [],


  // Draw the grid with markup and an array
  drawGrid: function() {
    var container = $('.container');

    for (var i = 0; i < 3; i++) {

      var row = $('<div class="row">');
      var cell = [];

      for (var j = 0; j < 3; j++) {
        row.append($('<div class="box_' + i + j + '">'));
        cell.push("");
      }

      this.GRID.push(cell);
      container.append(row);
    }
    console.log(this.GRID);
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


TicTacToe.init();