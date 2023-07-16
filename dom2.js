//GET THE ELEMENTS BY ID//
//var header=document.getElementById('main-header');
//header.style.borderBottom='solid 3px #000';

//var headerh2=document.getElementById('h2-title');
//headerh2.style.fontWeight="bold";
//headerh2.style.color="green";

//GET THE ELEMENTS BY CLASSNAME//
/*
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor ='yellow';
*/

/*var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent='Hello';
items[2].style.fontWeight='bold';
items[2].style.backgroundColor ='Green';
*/
//GIVES ERROR
//items.style.backgroundColor ='#f4f4f4';

var items = document.getElementsByClassName('list-group-item');
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor='#f4f4f4';
}

//GET THE ELEMENTS BY TAGNAME//
// style applying only on single element
/*var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[2]);
li[2].textContent='Hello';
li[2].style.fontWeight='bold';
li[2].style.backgroundColor ='yellow';*/


//Gives error
//li.style.backgroundColor ='#f4f4f4';

//style applying only on All element
var li = document.getElementsByTagName('li');
for(var i=0;i<li.length;i++)
{
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor='#f4f4f4';
}