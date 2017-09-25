/***********************************************************************
Write a function `toFeet(distances)` that takes in an array of distance
strings. The given distances will either be in `feet` or `yards`. The
function should return a new array where all the distances are converted
to feet. There are 3 feet in 1 yard.

Examples:

var arr1 = ['10 feet', '3 yards', '5 yards', '3 feet'];
toFeet(arr1); // => [ '10 feet', '9 feet', '15 feet', '3 feet' ]

var arr2 = ['2 yards', '3 feet', '10 yards'];
toFeet(arr2); // => [ '6 feet', '3 feet', '30 feet' ]
***********************************************************************/

function toFeet(distances) {
  var distancesInFeet = [];

  for (var i = 0; i < distances.length; i += 1) {
    var dis = distances[i];
    var parts = dis.split(' ');
    var num = parts[0];
    var unit = parts[1];

    if (parts[1] === 'yards') {
      var newDis = (num * 3) + ' feet';

      distancesInFeet.push(newDis);
    } else {
      distancesInFeet.push(dis);
    }
  }

  return distancesInFeet;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = toFeet;
