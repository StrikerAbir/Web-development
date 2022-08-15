let count = 0;
let for_clear = 1;

document.getElementById('submit').addEventListener('click', function () {
    count++;
    
    const input = document.getElementById('input');
    inputText = input.value;

    const content = document.getElementById('content');
    // create new content
    const tr = document.createElement('tr');
    tr.setAttribute('class','tr-class');
    tr.innerHTML = `
        <th scope="row">${count}</th>
        <td>${inputText}</td>
        <td><button class="delete">Delete</button>
        <button class="done">Done</button>
        </td>
    `
    content.appendChild(tr);
    input.value = '';

    // clear button
    if (for_clear == 1) {
        const clearHere = document.getElementById('table-container');
        const button = document.createElement('button');
        button.setAttribute('id', 'clearall');
        button.innerText = 'Clear all';
        clearHere.appendChild(button);
        for_clear--;
    }    

    // remove tr by clicking delete
    const deleteButton = document.getElementsByClassName('delete');
    for (const dlt of deleteButton) {
        dlt.addEventListener('click', function (event) {
            const todoContent = event.target.parentNode.parentNode;
            todoContent.style.display = 'none';
        })
    }
    // line through by clicking done button
    const doneButton = document.getElementsByClassName('done');
    for (const done of doneButton) {
        done.addEventListener('click', function (event) {
            const todoContent = event.target.parentNode.parentNode;
            todoContent.style.textDecoration = 'line-through';
            // remove delete
            event.target.parentNode.firstChild.style.display = 'none'

        })
    }
    // clear all 
    document.getElementById('clearall').addEventListener('click', function () {
        const content = document.getElementById('content');
        content.style.display = 'none';
    })
})

