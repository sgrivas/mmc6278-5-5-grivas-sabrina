var form=document.querySelector('#add-todo');
var ulEl=document.querySelector('#todo-list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    var input=document.querySelector('form > input');
    if (!(input.value == '' || input.value >= 0)){
        var liButtonEl=document.createElement('button');
        var liEl=document.createElement("li");
        liButtonEl.appendChild(document.createTextNode(input.value))
        liEl.appendChild(liButtonEl);
        ulEl.appendChild(liEl);
        input.value='';
    }
})
ulEl.addEventListener('click', function(e){ 
    if(e.target.id == '') {
        e.target.style.textDecoration='line-through';
        e.target.id='done';
	} else{
        e.target.parentElement.remove();
    }
})





