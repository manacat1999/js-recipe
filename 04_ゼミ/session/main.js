const memoInput=document.getElementById("memo-input")
const addButton=document.getElementById("add-button")
const memoContainer=document.getElementById("memo-container")

addButton.onclick = function() {
    const card = createCard(memoInput.value)
    memoContainer.append(card)

    memoInput.value = ""
}

const createCard = function (text) {
    const card = document.createElement("div")
    card.className = "card"
    const todo = document.createElement("div")
    todo.className = "todo"
    todo.textContent = text
    card.append(todo)
  
    const removeButton = document.createElement("button")
    removeButton.className = "remove-button"
    removeButton.textContent = "削除"
    removeButton.onclick = function () {
      card.remove()
    }
    card.append(removeButton)
  
    return card
  }