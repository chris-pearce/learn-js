/**
 * We’ve seen that `%` (the remainder operator) can be used to test whether a
 * number is even or odd by using `% 2` to check whether it’s divisible by two.
 * Here’s another way to define whether a positive whole number is even or odd:
 *
 * Zero is even.
 * One is odd.
 * For any other number N, its evenness is the same as N - 2.
 *
 * Define a recursive function `isEven` corresponding to this description. The
 * function should accept a number parameter and return a Boolean.
 *
 * Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way
 * to fix this?
 *
 * http://eloquentjavascript.net/03_functions.html#h_TcUD2vzyMe
 */

'use strict';

(function() {

    var isEven = function (val) {
        if (val === 0) {
            return true;
        } else if (val === 1) {
            return false;
        } else if (val < 0) {
            return isEven(-val);
        } else {
            return isEven(val - 2);
        }
    };

    console.log(isEven(-13));

})();