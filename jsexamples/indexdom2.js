//mouse event
/*const btn = document.querySelector('.btn');
const ul = document.querySelector('#users');
btn.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(e.target.className);
  
  document.getElementById('my-form').style.background='#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML='<h1>changed</h1>';
  
});
//keybord Event
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input',e=>{
document.querySelector('.container').append(nameInput.value);                                    

});*/


/*btn.addEventListener('mouseover',(e)=>{
  e.preventDefault();
  console.log('click')
  console.log(e.target.className);
  console.log(e)
  document.querySelector('#my-form').style.background='#ccc';
  //document.querySelector('.items').lastElementChild.innerText='Hello';
}); */
  

/*btn.addEventListener('mouseout',(e)=>{
  e.preventDefault();
  console.log('click')
  console.log(e.target.className);
  console.log(e)
  document.querySelector('#my-form').style.background='#ccc';
  //document.querySelector('.items').lastElementChild.innerText='Hello';
});*/
  
  

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
e.preventDefault();
    if(nameInput.value === '' || emailInput.value ==='')
    {
       //alert('pleaseenterallfields');
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
        msg.style.background='red';

        setTimeout(()=>msg.remove(),3000);
    }else{
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        //Add html
        //li.innerHTML=`<strong>${nameInput.value}</strong>e:${emailInput.value}`;
        userList.appendChild(li);

        //clear fields
        nameInput.value='';
        emailInput.value='';
        
    }
}