var form=document.querySelector('#add-todo');

form.addEventListener('submit', function(e){
    e.preventDefault();
    var input=document.querySelector('form > input');
    var liEl = document.createElement("li");
    var ulEl=document.querySelector('#todo-list');
    var liButtonEl=document.createElement('button');
    if (!(input.value == '' || input.value >= 0)){
        liButtonEl.appendChild(document.createTextNode(input.value))
        liEl.appendChild(liButtonEl);
        ulEl.appendChild(liEl);
        input.value=''
    }
})

liEl.addEventListener('click', function(e){
    liEl.style.textDecoration='line-through';
    if (liEl.style.textDecoration='line-through') {
        liEl.remove();
    }
})

