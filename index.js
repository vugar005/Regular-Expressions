// Import stylesheets
import './style.css';

// Write RegEx!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1> Regular Expressions </h1>`;

const regex1 = /JS/;
const textInput = 'Front End JS developer';

console.log(regex1.test(textInput));

// exec returns array (pattern, index, input)
console.log(regex1.exec(textInput));

// match
// We can use string match to test RegEx
// It returns same data as exec on regex1

console.log(textInput.match(regex1));

// search
// returns index of matched pattern
console.log(textInput.search(regex1));

// replace
// replace text with some other text
// Ex: 'hello there' to 'hi there'
// returns new string. Does not modify original string
console.log(textInput.replace(regex1, 'Angular'));

// split
// Splits text input into parts. First part before patten matched
// second part after pattern matched
console.log(textInput.split(regex1));
