/***********************************************************************
Write a recursive function `multiply(a, b)` that takes in two numbers
and returns their product. You may not use the multiplication operation `*` in
your solution :). Do this recursively, without loops. You may
assume that `a` and `b` are nonnegative numbers.

Hint 1: use `if (a === 0)` as the base case
Hint 2: how can you frame a multiplication in terms of a repeated
addition?

Example:

multiply(3, 5); // => 15
multiply(6, 4); // => 24
multiply(0, 100); // => 0
***********************************************************************/

function multiply(a, b) {
  if (a === 0) {
    return 0;
  }

  var answer = b + multiply(a - 1, b);
  return answer;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = multiply;
