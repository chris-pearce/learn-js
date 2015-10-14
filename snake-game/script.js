var SnakeGame = {

  // Initialise
  init: function() {
    this.drawGrid();
  },

  // Draw the grid
  drawGrid: function() {
    var container = $('.container');

    for(var i = 0; i < 20; i++) {
      var row = $('<div class="row">');
      container.append(row);
      for(var j = 0; j < 20; j++) {
        row.append($('<div class="box">'));
      }
    }
  }
};

// Initialise functions
SnakeGame.init();