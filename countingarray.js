"use strict";

//You should only need two variables, the counter and the array. Only one of them should be a let variable.

let counter = 0;
const array = [];

//You should only need one function, but you might benefit from using the init-loop pattern.
initLoop();

function initLoop() {
  console.log("start the loop");
  startCounting();
}

function startCounting() {
  //Modify the program to insert the counter-value in the beginning of the array

  array.unshift(counter);

  //Modify the program again, to make sure the array doesn’t get longer than nine items.

  if (array.length > 9) {
    array.pop();
  }
  //Make a program that counts (with a timed delay)
  counter++;
  if (array.length < 30) {
    setTimeout(startCounting, 500);
  }
  console.log(array);
}
