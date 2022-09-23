/* 
  Looping a Triangle
  
  Write a loop that makes 7 calls to console.log to output the following triangle:
  ________________________________________________________________________________
  #
  ##
  ###
  ####
  #####
  ######
  #######
  
  _________________________________________________________________________________
  
*/

  let triangle = '#'
  while (triangle.length <= 7) {
    console.log(traingle);
    triangle += '#';
  }



/*
  FizzBuzz
  
  Write a program that uses conosle.log to print all the numbers from 1 to 100, with two exceptions. 
  For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5, print "Buzz" instead.
  Then, modify your program to print "FizzBuzz"  for numebrs that are divisible by both 3 and 5.
  
*/
  
  // for loop
  
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
       console.log("Fizz");
    } else if (i % 5 === 0) {
       console.log("Buzz");
    } else {
       console.log(i);
    }
  };
  
  _________________________________________________________________________________
  
  // while loop
  
  let count = 0
  
  while (count < 100) {
    count ++;
    
    if (count % 3 === 0 && count % 5 === 0) {
      console.log("FizzBuzz");
    } else if (count % 3 === 0) {
      console.log("Fizz");
    } else if (count % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(count);
    }
  };
  
  _________________________________________________________________________________
  
  do while loop
  
  let step = 1;
  
  do {
    if (step % 3 === 0 && step % 5 === 0) {
      console.log("FizzBuzz");
    } else if (step % 3 === 0) {
      console.log("Fizz");
    } else if (step % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(step);
    }
    step++;
  }
  
  while (step < 101);
  
_________________________________________________________________________________

/*
  Chessboard
  
  Write a program that creates a string that represents a 8x8 grid, using new-line characters to seperate lines.
  At each position of the grid there is either a space or a # character.  
  the characters should form a chessboard.
  Passing this string to console.log should show something like this:
  _________________________________________________________________________________
   # # # #
  # # # # 
   # # # #
  # # # #
   # # # # 
  # # # #
   # # # #
  # # # #
  _________________________________________________________________________________
  When you have a program that generates this pattern, define a binding size = 8 snd change the program so that it works for any size, 
  outputting a grid of the given width and height.
  
*/

  // create a "size" variable, set it equal tyo 8.
  let size = 8;
  // create an empty string "result".
  let result = "";

  // create a loop to create rows, create a loop to create columns
  let row = 1;
  while (row <= size) {
    let column = 1;
    while (column <= size) {
      // if (column + row) is even.
      if ((column + row) % 2 === 0) {
        // result adds an empty space
        result += " ";
      } else {
        // result adds "#" character
        result += "#";
      }
      column++;
    }
    // create new line character.
    result += "\n";
    row++;
  }

  console.log(result);
