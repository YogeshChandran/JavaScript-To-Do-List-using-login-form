const user= "yogesh"
const password = "3113"

let user = document.getElementById('username');
let password = document.getElementById('password');
const submit = document.getElementById('submit');
const error =  document.getElementById('Wrong');

submit.addEventListener('click',function validate(e)
{

    if(password )
    if(user === user.value && password === password.value)
    {   
        document.location.href = "index.html";
    }

    else{
        error.innerHTML="Enter correct username and password";
    }
    e.preventDefault();

});