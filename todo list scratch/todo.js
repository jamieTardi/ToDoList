let ul = document.querySelector("ul")
let li = document.getElementsByTagName("li")
let submitBtn = document.getElementById("submitBtn")
let userInput = document.getElementById("userInput")
var todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray));

let storage = JSON.parse(localStorage.getItem('todos'))

function inputLength() {
    return userInput.value.length
}

function listLength() {
    return item.length
}




//list creating the list element
displayList = () => {
    todosArray.push(userInput.value)
    localStorage.setItem('todos', JSON.stringify(todosArray))
    let li = document.createElement("li")
    li.appendChild(document.createTextNode(userInput.value))
    ul.appendChild(li)
    userInput.value = ""
    
    


    function taskComplete() {
        li.classList.toggle("done")
    }
    li.addEventListener("click", taskComplete)

    //Add Delete Button
    let deleteBtn = document.createElement("button")
    deleteBtn.innerHTML = '<i class="fas fa-dumpster"></i>'
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", deleteListItem)
    //

    //add class delete. this is added in the CSS....
    function deleteListItem() {
        li.classList.add("delete")
    }
    //Add Done Button
    let doneBtn = document.createElement("button")
    doneBtn.innerHTML = '<i class="fas fa-th-list"></i>'
    li.appendChild(doneBtn)
    doneBtn.addEventListener("click", addDone)
    //
//Added in CSS again for this.
    function addDone() {
        li.classlist.add("done")
    }

   
}
// // for(let i = 0; i < storage.length; i++){
//     // displayList(todosArray[i]);
// }


//adding a item to a list with warnings
addListItem = () => {

    if (inputLength() == 0) {
        alert("Please enter a item for the list.")
    } else if (inputLength() >= 32) {
        alert("Please enter less characters.")
    } else {
        displayList()
    }

}



//event listners for enter key and mouse click
enterKey = (e) => {
    if (e.keyCode === 13) {
        addListItem()
    }
}
document.addEventListener("keyup", enterKey)

submitBtn.addEventListener("click", addListItem)

