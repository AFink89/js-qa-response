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
console.log(hobbies);
