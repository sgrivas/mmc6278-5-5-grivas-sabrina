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
    if(e.target.tagName == 'BUTTON') {
		e.target.parentElement.style.textDecoration='line-through'
        e.target.id='done'
	}
})

ulEl.addEventListener('click', function(e){
    if (e.target.id='done') {
        e.target.parentElement.remove();
    }
})

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     var input=document.querySelector('form > input');
//     if (!(input.value == '' || input.value >= 0)){
//         todoList.push(input.value)

//         for (let index = 0; index < todoList.length; index++) {
//             var liButtonEl=document.createElement('button');
//             var liEl=document.createElement("li");
//             liButtonEl.appendChild(document.createTextNode(input.value))
//             liEl.appendChild(liButtonEl); 
//             ulEl.appendChild(liEl);
//             input.value='';
//         }
//     }
// })
