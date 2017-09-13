### pigLatinize

```js
// Write a function `pigLatinize(word)` that translates a single word into its pig
// latin equivalent. The rules for the translation are as follows:
//
// 1) For words that begin with a non-vowel, all letters before the initial
// vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
//   Examples
//   "pig" → "igpay"
//   "banana" → "ananabay"
//   "trash" → "ashtray
//
// 2) For words that begin with vowel sounds, just adds "yay" to the end
//   Examples
//   "eat" → "eatyay"
//   "omelet" → "omeletyay"
//   "are" → "areyay"
//
// Note: y should not be considered a vowel
//
// Examples:
//
// pigLatinize("teacher"); // => "eachertay"
// pigLatinize("trash"); // => "ashtray"
// pigLatinize("eat"); // => "eatyay"
// pigLatinize("orange"); // => "orangeyay"
```

### inPigLatin

```js
// Write a function `inPigLatin(sentence)` that translates an entire sentence into
// pig latin. Any words that were capitalized in the input sentence should be also
// capitalized in the new sentence. Use the `pigLatinize(word)` function you created earlier.
//
// Examples:
//
// inPigLatin("Shmanthony is the best teacher"); // => 'Anthonyshmay isyay ethay estbay eachertay'
// inPigLatin("let us Dance"); // => 'etlay usyay Anceday'
// inPigLatin("this is the time of my life"); // => 'isthay isyay ethay imetay ofyay myay ifelay'
```

### maxPairProduct

```js
// Write a function `maxPairProduct(array)` that takes in an array of numbers and
// returns the largest product of any pair of numbers from the array.  
//
// Examples:
//
// maxPairProduct([5, 7, 6, 9, 3]); // => 63
// maxPairProduct([4, 2, 5, 6]); // => 30
```
