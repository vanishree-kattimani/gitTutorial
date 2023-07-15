const myForm=document.querySelector('#my-form');
var username=document.getElementById('name');
var emailId=document.getElementById('email');
const msg=document.querySelector('.msg');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
e.preventDefault();
const name=e.target.username.values;
const email=e.target.emailId.values;
localStorage.setItem('name','name');
localStorage.setItem('email','email');

//clear fields
//nameInput.value='';
//emailInput.value='';
}        
   /* if(nameInput.value === '' || emailInput.value ==='')
    {
       //alert('pleaseenterallfields');
        msg.classList.add('error');
        msg.innerHTML='please enter all fields';
        msg.style.background='red';

        setTimeout(()=>msg.remove(),3000);
    }else
    {
        const name=e.target.name.values;
        const email=e.target.email.values;
        localStorage.setItem('name','name');
        localStorage.setItem('email','email');
        
        //clear fields
        nameInput.value='';
        emailInput.value='';

        
        
    }*/
    //localStorage.getItem(name);
    //localStorage.getItem(email);
