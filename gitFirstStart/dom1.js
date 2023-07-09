//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent='Hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText='Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML='<h3>Hello</h3>';

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

var items = document.getElementsByClassName('list-group-item');
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight = 'bold';
    items[i].style.backgroundColor='#f4f4f4';
}