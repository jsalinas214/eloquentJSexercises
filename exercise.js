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
  
*/

  
