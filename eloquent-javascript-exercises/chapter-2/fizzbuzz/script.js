/**
 * Write a program that uses console.log to print all the numbers from 1 to
 * 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead
 * of the number, and for numbers divisible by 5 (and not 3), print "Buzz"
 * instead.
 *
 * When you have that working, modify your program to print "FizzBuzz", for
 * numbers that are divisible by both 3 and 5 (and still print "Fizz" or
 * "Buzz" for numbers divisible by only one of those).
 *
 * http://eloquentjavascript.net/02_program_structure.html#h_rebKE3gdjV
 */


var fizzBuzz = function() {

  var number = 1;

  for (var i = 0; i < 100; i++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(number);
    }
    number++;
  }

};

fizzBuzz();