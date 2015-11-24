/**
 * The previous chapter introduced the standard function `Math.min` that
 * returns its smallest argument. We can do that ourselves now. Write a
 * function `min` that takes two arguments and returns their minimum.
 *
 * http://eloquentjavascript.net/03_functions.html#h_XTmO7z7MPq
 */
'use strict';

(function() {

    var min = function min(valOne, valTwo) {
        if (valOne < valTwo) {
            return valOne;
        } else {
            return valTwo;
        }
    };

    console.log(min(9, -10));

})();