/***********************************************************************
Write a recursive function `power(base, exp)` that takes in two numbers,
a base and exponent. The function should return `base` raised to `exp`
power.

For example, power(2, 5) is 2 raised to the 5th power,
which is 2 * 2 * 2 * 2 * 2 = 32

Hint: use `if (exp <= 0)...` as the base case.

Check today's recursive notes if you need help.

Examples:

power(2, 5); // => 32
power(2, 10); // => 1024
power(9, 2); // => 81
power(9, 3); // => 729
power(11, 0); // => 1
power(11, 1); // => 11
***********************************************************************/

function power(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * power(base, exp - 1);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = power;
