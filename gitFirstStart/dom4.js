//GET THE ELEMENTS BY ID//
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';


//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);
// //parentElement
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);*/

//childNodes
//console.log(itemList.childNodes);
// //children
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';*/

//FirstChild
//console.log(itemList.firstChild);
// //FirstElementChild
/*console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';*/

//lastChild
//console.log(itemList.lastChild);
// //lastElementChild
/*console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';*/

//nextSibling
console.log(itemList.nextSibling);
////nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
////previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement
var newDiv=document.createElement('div');

//Add class
//newDiv.className='hello';

//Add id
//newDiv.id='hello 1';

//Add Attribute
//newDiv.setAttribute('title','Hello Div');

//Create text node
//Printing Hello above the Item Lister
var newDivText = document.createTextNode('Hello');
//Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
newDiv.style.color='Brown';
container.insertBefore(newDiv,h1);


//Printing Hello above the item1
var newNode = document.createElement("li");
var textNode = document.createTextNode("Hello");
newNode.appendChild(textNode);
newNode.style.fontWeight='bold';
newNode.style.color='red';
var list = document.getElementById("items");
list.insertBefore(newNode, list.children[0]);