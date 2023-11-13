console.log('Everything up and running!')
 
// 1: Select the H1 by the name tag. This will return an HTML collection, so print out the first element:
const headings = document.getElementsByTagName('h1');
console.log(headings[0]);
 
// 2: Select the paragraph by its id
const paragraph = document.getElementById('main-text');
console.log(paragraph);
 
// 3: Select the list items by their class names
const items = document.getElementsByClassName('list-item');
console.log(items);