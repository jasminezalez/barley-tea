// selectors
// picking the form, use handleSubmitForm function
document.querySelector('form').addEventListener('submit', handleSubmitForm)
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck)

// event handlers
function handleSubmitForm(el) {
    // prevents the page from reloading
    el.preventDefault();
    let input = document.querySelector('input')
    // if an input is actually being passed in
    if (input.value != "") {
        // invoke the helper function
        addTea(input.value)
        // resetting the text box to be empty
        // input.value = ''
    }
}

function handleClickDeleteOrCheck(el) {
    if (el.target.name === 'checkButton') checkTea(el)
    if (el.target.name === 'deleteButton') deleteTea(el)

}


// helper functions
function addTea(tea) {
    // grabbing that parent so it has something to latch on to
    let ul = document.querySelector('ul')
    // creating a child list item
     // looks like we are adding an additional class to the list element
    // can we do li.className
    let li = document.createElement('li').className('tea-list-item')

    // assigning the list item some HTML
    li.innerHTML = `
        <span class="tea-item"> ${tea} </span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
        
    `
    ul.appendChild(li)

}

function checkTea(tea) {
    let item = tea.target.parentNode
    if (item.style.textDecoration == 'line-through') {
        item.style.textDecoration = "none"
    } else {
        item.style.textDecoration = "line-through"
    }

}

function deleteTea(tea) {
    let item = tea.target.parentNode
    item.addEventListener('transitioned', function () {
        item.remove()
    })
    item.classList.add('tea-list-item-fall')

}

