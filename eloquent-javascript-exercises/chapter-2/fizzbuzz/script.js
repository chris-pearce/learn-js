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