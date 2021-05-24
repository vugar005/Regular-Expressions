// Import stylesheets
import './style.css';

// Write RegEx!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1> Regular Expressions </h1>`;

const regex1 = /JS/;
const textInput = 'Front End JS developer expert ';

//console.log(regex1.test(textInput));

// exec returns array (pattern, index, input). Retuns first match
// console.log(regex1.exec(textInput));

// match
// We can use string match to test RegEx
// It returns same data as exec on regex1

// console.log(textInput.match(regex1));

// search
// returns index of matched pattern
// console.log(textInput.search(regex1));

// replace
// replace text with some other text
// Ex: 'hello there' to 'hi there'
// returns new string. Does not modify original string
// console.log(textInput.replace(regex1, 'Angular'));

// split
// Splits text input into parts. First part before patten matched
// second part after pattern matched
// console.log(textInput.split(regex1));

// Methods
/** /\s/  match for empty spaces */

// ---------------------------------------------

// Section 2: Regular Expresson flags
// g global, finds all matches. Othwesie stops after first match.
// i case insensitive. Case does not matter
// m multi-line match. Beginning and ending characters.

// console.log(textInput.match(/t\s/g)); // match for letter t + spacing globally.
// console.log(textInput.match(/f/gi)); // match for letter f + spacing globally and without case sensitive.

// EXEC is different from match. EXEC starts from last index.

// const textInput2 = 'JS JS JS';
// const regex2 = /JS/g;
// console.log(regex2.exec(textInput2));

// ---------------------------------------------

// Section 3. Regular Expression Metacharacters
// ^$.*+?=!:|\/()[]{}

// I) Wildcard(.) which matches any character, except newline (\n)
// below will match beautiful and beauty
console.log(/b.a/.test('how is that beautiful the beauty word'));

console.log(/b.a/.test('beauty'));
// II) Escpaing characters
// Assume you have text 'this could be amazing word.'  Here we want to match d. If we use /d./ this will match both in could and in word. To avoid that we can escapte metacharacters by using \. So
// it would be /d\./ which means escape default . behavior

// Control characters
// \t tab  Ex: match 'h t' is by /h\tt\
// \v vertical tab
// \n newline /h\n\t/ match 'h' follwing by newline + t
// \r carriage return

// III) Character sets 
// EX: to match both gray and grey /gr[ae]y/
// Note: metacharacters does not as metacharacters in character set
// Ex: [a.] the . does not mean here any but rather exactly . char
// Exception hypen(-) such as [1-4] match all between 1 and 4

// Range [1-4] , [a-e]
// Ex: [1-4a-zA-z] match anything which is either number 1-4 or a-z

// Exluding characters ^(cara symbol)

