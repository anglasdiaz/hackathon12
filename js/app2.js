const todoList = document.querySelector('.todoList');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
todoList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
    if (e.target.id === 'add') {
        obtenerInfo();
    }
    if (e.target.id === 'btnRemove') {
        e.target.parentElement.remove();
    }
})

function obtenerInfo() {
    let input = document.querySelector('#todoInput').value;
    addItems(input);
}
function addItems(data) {
    let li = document.createElement('li');
    let button = document.createElement('button');
    button.id = 'btnRemove';
    button.innerText = 'x';
    li.append(data);
    li.append(button);
    ul.append(li);
    document.querySelector('#todoInput').value = '';

}