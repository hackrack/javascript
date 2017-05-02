// version 1
function catBuilder(name, color, toys) {
  var cat = {
    name: name,
    color: color,
    toys: toys
  };

  return cat;
}

// version 2
function catBuilder(name, color, toys) {
  var cat = {};

  cat.name = name;
  cat.color = color;
  cat.toys = toys;
  
  return cat;
}


function printObject(obj) {
  for (var key in obj) {
    console.log(key + ' - ' + obj[key]);
  }
}


function getFullname(person) {
  var name = person.firstName + ' ' + person.lastName;
  return name;
}

function valuePair(obj1, obj2, key) {
  var val1 = obj1[key];
  var val2 = obj2[key];
  var arr = [val1, val2];

  return arr;
}

function doesKeyExist(obj, key) {
  return obj[key] !== undefined;
}

function adults(people) {
  var names = [];

  for (var i = 0; i < people.length; i += 1) {
    var person = people[i];
    if (person.age >= 18) {
      names.push(person.name);
    }
  }

  return names;
}

function hasFavoriteFood(obj, food) {
  if (obj.favoriteFoods.indexOf(food) > -1) {
    return true;
  } else {
    return false;
  }
}

function hasFavoriteFood2(obj, food) {
  return obj.favoriteFoods.indexOf(food) > -1;
}

function countScores(people) {
  var scoresObj = {};

  for (var i = 0; i < people.length; i += 1) {
    var personObj = people[i];
    var name = personObj.name;
    var score = personObj.score;

    if (scoresObj[name]) {
      scoresObj[name] += score;
    } else {
      scoresObj[name] = score;
    }
  }
  return scoresObj;
}


// debugged
var cat = {
  sound : "Meowr",
  purr : function() {
    return (this.sound + "..." + this.sound);
  }
}

cat.purr() === "Meowr...Meowr";
