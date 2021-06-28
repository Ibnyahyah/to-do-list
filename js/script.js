const button = document.querySelector(".btn");
const toDoList = document.querySelector('.toDo');
const toDo_nr = document.querySelector('#toDo_nr b');
const nameInput = document.querySelector('.name-input');

const items = toDoList.children;


button.addEventListener("click", function(e){
    e.preventDefault();
    // adding class
    const newItem = document.createElement('li');
    // create element
    newItem.classList.add('item')
    // adding text
    // newItem.innerText = `item ${items.length + 1}`;
    newItem.innerText = nameInput.value;
    if (nameInput.value == '' || nameInput.value == ' ') {
        alert("Please write something");

    } else {
        toDoList.appendChild(newItem);
    toDo_nr.innerText = items.length;
    }
    // INPUT DELETING FUNCTION
    nameInput.value = "";
    
    // create element and attach event listener
    newItem.addEventListener("click", deleteItems);
});
// DELETING FUNCTION
function deleteItems(e){
    e.stopPropagation();
    e.target.remove();
}