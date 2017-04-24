### censor

```js
// Write a function `censor(sentence, curseWords)` that censors the given sentence by
// replacing the vowels in curse words with "*". Assume no punctuation.
// Use Array.prototype.forEach.
//
// Examples:
//
// var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
// result1; //=> "D*rn you Harold you son of a g*n"
//
// var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
// result2; //=> "Schn*k*ys I dont give a d*ddly sq**t"
```

### isogramMatcher

```js
// An isogram is a word with only unique, non-repeating letters.
// Given two isograms of the same length, return an array with two numbers
// indicating matches: the first number is the number of letters matched in both
// words at the same position, and the second is the number of letters matched in
// both words but not in the same position.
//
// Examples:
//
// isogramMatcher("an", "at"); //=> [1, 0]
// isogramMatcher("or", "go"); //=> [0, 1]
// isogramMatcher("cat", "tap"); //=> [1, 1]
// isogramMatcher("home", "dome"); //=> [3, 0]
// isogramMatcher("ultrasonic", "ostracized"); //=> [3, 4]
// isogramMatcher("unpredictably", "hydromagnetic"); //=> [1, 8]
```
