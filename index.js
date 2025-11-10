var rs = require('readline-sync');

//Goals for Project are as follows:
// Prompt for users name
// Prompts for users favorite hobby
// Ask user if they have any more hobbies
// Store a list of the users hobbies
// Print all hobbies from list at the end

var hobbies = [];
var areYouSure = false;
var moreHobbies = 0;

function getHobbyCount() {
  moreHobbies = rs.questionInt('How many other hobbies do you have? ')
};

function addHobbies(numHobbies) {
  var counter = 0;
  while (counter < numHobbies) {
    var input = rs.prompt();
    hobbies.push(input);
    counter++;

    if (counter < numHobbies) {
      console.log('Hey! ' + hobbies + ' is pretty cool! What\'s the other hobby? ')
    } else {
      console.log('I wish I could ' + hobbies + '... alas, I am not even real!')
    }
  }
}

// Prompt for users name
var userName = rs.question('Hi there, what is your name? ');
console.log('Hello, ' + userName + '. It is very nice to meet you!');
// Prompts for users favorite hobby
var favHobby = rs.question(userName + ', what is your favorite hobby? ')

hobbies.push(favHobby);
getHobbyCount();

// Ask question of other hobbies and push response to hobbies
if (moreHobbies > 0) {
  console.log('Cool, what other hobbies do you like? ');
  addHobbies(moreHobbies);
} else {
  areYouSure = rs.keyInYN('Are you sure that ' + hobbies[0] + ' is everything you enjoy doing? ')
}

if (!areYouSure && hobbies.length <= 1) {
  getHobbyCount();
  console.log('Cool, what are they?');
  addHobbies(moreHobbies);
} else if (areYouSure) {
  console.log(hobbies + ' are all very cool, good for you! ');
}