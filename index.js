var rs = require('readline-sync');

//Goals for Project are as follows:
// Prompt for users name
// Prompts for users favorite hobby
// Ask user if they have any more hobbies
// Store a list of the users hobbies
// Print all hobbies from list at the end


// Prompt for users name
var userName = rs.question('Hi there, what is your name? ');
console.log('Hello, ' + userName + '. It is very nice to meet you!');
// Prompts for users favorite hobby
var favHobby = rs.question(userName + ', what is your favorite hobby? ')
// Add hobbies to a list
var hobbies = [];
hobbies.push(favHobby);
// Ask user if they have any more hobbies
var moreHobbies = rs.questionInt('How many other hobbies do you have, ' + userName + '? ');
// Ask question of other hobbies and push response to hobbies
if (moreHobbies > 0) {
  var counter = 0;
  while (counter < moreHobbies) {
    var input = rs.prompt();
    hobbies.push(input);
    counter++;
  if (counter < moreHobbies) {
    console.log('--That is awesome! ' + input + ' is super cool! What is the other ' + (moreHobbies - counter) + '? ');
  } else {
    console.log('I wish I could ' + hobbies + '... but alas, I am not real.')
  }
  }
};
