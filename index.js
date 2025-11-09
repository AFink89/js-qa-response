var rs = require('readline-sync');

//Goals for Project are as follows:
// Prompt for users name
// Prompts for users favorite hobby
// Ask user if they have any more hobbies
// Store a list of the users hobbies
// Print all hobbies from list at the end


// Prompt for users name
var userName = rs.question('Hi there, what is your name?');
console.log('Hello, ' + userName + '. It is very nice to meet you!');