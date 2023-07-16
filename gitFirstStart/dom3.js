//Query Selector

/*var input =document.querySelector('input');
input.value='Hello World';

var submit =document.querySelector('input[type="submit"]');
submit.value="SEND";

var item = document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color ='coral';
secondItem.style.backgroundColor='green';

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility='hidden'; */

//QUERySELECTOR ALL //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent='Hello';

/*var odd=document.querySelectorAll('li:nth-Child(odd)');
var even=document.querySelectorAll('li:nth-Child(even)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='#f4f4f4';
    even[i].style.backgroundColor ='#ccc';
    
}
*/
var x = document.getElementById("items").querySelectorAll(".list-group-item");
for (i = 0; i < x.length; i++) {
  x[1].style.color = "green";
  x[1].style.fontWeight = 'bold';
} 

var odd=document.querySelectorAll('li:nth-Child(odd)');
var even=document.querySelectorAll('li:nth-Child(even)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
    even[i].style.backgroundColor ='#ccc';
    
}