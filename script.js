const input = document.querySelector("#add");
const  btn = document.querySelector("#btn");
const list = document.querySelector("#list");
// const wrong = document.querySelector(".error")
var el = document.getElementsByTagName('li');

// Add Elements
btn.onclick = function(){
    
    var txt = input.value;
    if(txt ===''){
        alert("Please Enter")
        // wrong.innerHTML="Please Enter Something";
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li,list.childNodes[0]);
    input.value = '';
    }
    
};

//To Check
list.onclick = function(ev){
    if(ev.target.tagName == 'li'){
         ev.target.classList.toggle('checked');
    }
};