
const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem() {
    todoInputEl.addEventListener("keypress", function (event) {
        if (event.keyCode === 13) {
            let newListItem = createListItem(todoInputEl.value);
            // todoListEl.appendChild(newListItem); //adds new item to end of list
            todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
            todoInputEl.value = "";
        }
    })
}

function createListItem(text) {
    const newListElement = document.createElement("li");
    newListElement.textContent = text;
    newListElement.classList.add("todo__item");

    const deleteIcon = document.createElement("span");
    deleteIcon.textContent = "X";
    deleteIcon.classList.add("todo__delete");
    newListElement.appendChild(deleteIcon);

    return newListElement;
}

function toggleDone() {
    todoListEl.addEventListener("click", function (event) { // handler in parentEL as it always exists whereas list items are dynamic
        if (event.target.classList.contains("todo__item")) {
            event.target.classList.toggle("done"); //for that specific list item toggle done
        }
    })

}

function deleteItem() {
    todoListEl.addEventListener("click", function (event) {
        if (event.target.classList.contains("todo__delete")) {
            event.target.parentNode.remove();
        }
    })
}

toggleDone();
addListItem();
deleteItem();





// OWN work




// inside createlistitem function:
// const editItemSpan = document.createElement("span");
// editItemSpan.textContent = '\u{270E}';
// editItemSpan.setAttribute("class", "todo__edit");
// newListEl.appendChild(editItemSpan);

// function editItem() {
//     if (event.target.classList.contains("todo__edit")) { //if what u click on has the class of todo__edit
//     event.target.parentNode.remove(); //removes the todo__item
//     }
// }

//doesn't work for dynamic items due to event bubbling/propogation
// function completedItem() {
//     for (let items of todoItemEls) {
//         items.addEventListener("click", function() {
//             items.classList.toggle("done");
//         })
//     }
// }

// const editInput = document.createElement("input");
// editInput.type="text";
// listItem.appendChild(editInput);