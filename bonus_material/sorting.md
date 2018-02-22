## Introduction to Sorting Algorithms

Like we learned in the data modeling section, we often have flexibility when it
comes to structuring data. As programmers, we should choose to organize the data
in a way that is useful. A common way to organize data is to **sort** it. For example,
words of a dictionary are sorted in alphabetical order. Sorted data is valuable
because it can make "looking up" entries efficient. Can you imagine searching for
definitions in a dictionary that isn't sorted alphabetically?!?  

In this bonus section we'll learn some algorithms to sort numbers. However,
these algorithms can also be applied to sort other data like strings. An [algorithm][algorithm]
is a sequence of actions to take. We'll be using sorting algorithms as a sequence of steps
we can follow to organize numbers in increasing (or decreasing order). Our goal in
this section will be to take an array of numbers and modify that array so that it's
elements are in ascending order.

### Bubble Sort Algorithm

The Bubble Sort algorithm gets its name because it behaves as if the large numbers
float to the top of the array. See the wikipedia page on [Bubble Sort][bubble-sort]
and check out the visualization of how it behaves!

### How does a pass of Bubble Sort work?

Before we explore Bubble Sort in nitty-gritty JavaScript detail, lets visualize it
conceptually! Bubble sort works by performing multiple *passes* to move elements
closer to their final positions. A single pass will iterate through the entire array once.

A pass works by scanning the array from left to right, two elements at a time, and
checking if they are ordered correctly. To be ordered correctly the first element
must be less than or equal to the second. If the two elements are not ordered properly,
then we swap them to correct their order. Afterwards, we scan the next two numbers
and continue repeat this process until we have gone through the entire array.

Let's see one pass of bubble sort on the array `[2, 8, 5, 2, 6]`. On each step,
the elements currently being scanned are in **bold**.

> [**2**, **8**, 5, 2, 6] - ordered, so leave them alone
> [2, **8**, **5**, 2, 6] - not ordered, so swap
> [2, 5, **8**, **2**, 6] - not ordered, so swap
> [2, 5, 2, **8**, **6**] - not ordered, so swap
> [2, 5, 2, 6, 8]         - our first pass is complete

By the end of this pass we have correctly placed `8` by "bubbling it up" to the end of
the array. From this point we would continue doing passes on the array until everything
is in sorted order.

### How do we know when we are done Bubble Sorting?

During Bubble Sort, we can tell if the array is in sorted order by checking if we made
a swap during the previous pass performed. If a swap was not performed during
the previous pass, then the array must be totally sorted and we can stop the algorithm.

You're probably wondering why that makes sense. Recall that a pass of Bubble Sort
checks if any adjacent elements are **out of order** and swaps them if they are.
If we don't make any swaps during a pass, then everything must be **in order**,
so our job is done. Let that marinate for a bit.

### Swapping Elements

Like we saw in the previous example, Bubble Sort manipulates the array by swapping
the position of two elements. To implement Bubble Sort in JS, we'll need to perform this
operation, so let's build a helper function. A key detail in this function
is that we need an extra variable to store one of the elements since we will
be overwriting them in the array:

```js
function swap(array, idx1, idx2) {
  var temp = array[idx1];     // save a copy of the first ele
  array[idx1] = array[idx2];  // overwrite the first ele with the second ele
  array[idx2] = temp;         // overwrite the second ele with the first ele copy
}
```

Note that the swap function does not create or return a new array. It mutates the
original array:

```js
var arr1 = [2, 8, 5, 2, 6];
swap(arr1, 1, 2);
arr1; // => [ 2, 5, 8, 2, 6 ]
```

### Bubble Sort JS Implementation

Using `swap` and our newfound understanding of Bubble Sort, let's code! Take a look
at the snippet below and try to understand how it corresponds to our conceptual
understanding of the algorithm. Scroll down to the commented version when you get stuck.

```js
function bubbleSort(array) {
  var swapped = true;

  while(swapped) {
    swapped = false;

    for (var i = 0; i < array.length - 1; i++) {  
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      }
    }
  }

  return array;
}
```

```js
function bubbleSort(array) {
  var swapped = true; // this var will be used to track whether or not we made
                      // made a swap on the previous pass. If we did not make any
                      // swap on the previous pass, then the array must already be sorted

  // this while will keep doing passes if a swap was made on the previous pass
  while(swapped) {
    swapped = false;  // reset to swap to false

    // this for will perform a single pass
    for (var i = 0; i < array.length; i++) {  
      if (array[i] > array[i+1]) {  // if the two eles are not ordered...

        swap(array, i, i+1);          // swap them.

        swapped = true;               // since we made a swap, remember that we did so
                                      // b/c we should perform another pass after this one
      }
    }
  }

  return array;
}
```

### Other Sorting Algorithms

Bubble Sort is just one of many sorting algorithms. Other relatively simply sorting
algorithms include [Insertion Sort][insertion-sort] and [Selection Sort][selection-sort].
These algorithms differ in their strategy and so not all algorithms are created equal.
Some may be faster or offer other efficiencies. Analyzing the efficiency of programs will
be a topic covered in your full immersive bootcamps, so no need to wrack our brains
on it now. For a preview of things to come, check out this [cool visualization][sort-visualizations]
of different sorting algorithms. Notice how Bubble Sort is among the slowest performing algorithms.
You'll learn that there are some terribly clever sorting algorithms out there, but
we'll fight those battles for another day.


[algorithm]: https://en.wikipedia.org/wiki/Algorithm
[bubble-sort]: https://en.wikipedia.org/wiki/Bubble_sort#Analysis
[insertion-sort]: https://en.wikipedia.org/wiki/Insertion_sort
[selection-sort]: https://en.wikipedia.org/wiki/Selection_sort
[sort-visualizations]: https://www.youtube.com/watch?v=ZZuD6iUe3Pc
