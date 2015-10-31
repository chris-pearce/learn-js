/**
 * Write a loop that makes seven calls to console.log to output the following
 * triangle:

    #
    ##
    ###
    ####
    #####
    ######
    #######

 *
 * It may be useful to know that you can find the length of a string by
 * writing .length after it.
 *
 * http://eloquentjavascript.net/02_program_structure.html#h_umoXp9u0e7
 */

var loopingATriange = function() {

  var hash = "#";

  for (var i = 0; i < 6; i++) {
    console.log(hash);
    hash = hash + "#";
  }
};

loopingATriange();