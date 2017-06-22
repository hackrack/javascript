## Introduction to Sorting  





[Bubble Sort][bubble-sort]


```js
var arr1 = [12, 3, 10, 8, 5, 2, 15, 12]
bubbleSort(arr1); // => [ 2, 3, 5, 8, 10, 12, 12, 15 ]
var arr2 = [5, -3, 6, 3, 2];
bubbleSort(arr2); // => [ -3, 2, 3, 5, 6 ]
```

```js
function swap(array, idx1, idx2) {
  var temp = array[idx1];
  array[idx1] = array[idx2];
  array[idx2] = temp;
}

function bubbleSort(array) {
  var swapped = true;

  while(swapped) {
    swapped = false;

    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i+1]) {
        swap(array, i, i+1);
        swapped = true;
      }
    }
  }

  return array;
}
```


[bubble-sort]: https://en.wikipedia.org/wiki/Bubble_sort
