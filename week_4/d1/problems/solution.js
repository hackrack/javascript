function moreDotLessDash(str) {
  var dotCount = 0;
  var dashCount = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (char === '.') {
      dotCount += 1;
    } else if (char === '-') {
      dashCount += 1;
    }
  }

  return (dotCount > dashCount);
}

function moreDotLessDash2(str) {
  return str.split('.').length > str.split('-').length;
}

function isSorted(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]) {
      return false;
    }
  }

  return true;
}

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


function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i  <= Math.sqrt(num); i += 1) {
    if (num % i === 0){
      return false
    }
  }

  return true;
}

function smallestPrime(array) {
  var smallest = null;

  for (var i = 0; i < array.length; i += 1) {
    var num = array[i];

    if (isPrime(num) && (num < smallest || smallest === null)) {
      smallest = num;
    }
  }

  return smallest;
}
