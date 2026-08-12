function addTask() {
  let text = document.getElementById("task").value
  if (text === "") return
  let li = document.createElement("li")
  li.textContent = text
  document.getElementById("todo").appendChild(li)
  document.getElementById("task").value = ""
}

function addTaskTop() {
  let text = document.getElementById("task").value
  if (text === "") return
  let li = document.createElement("li")
  li.textContent = text
  document.getElementById("todo").insertBefore(li, document.getElementById("todo").firstChild)
  document.getElementById("task").value = ""
}

function duplicateLast() {
  let list = document.getElementById("todo")
  if (list.lastChild) {
    let copy = list.lastChild.cloneNode(true)
    list.insertBefore(copy, list.firstChild)
  }
}

function removeLast() {
  let list = document.getElementById("todo")
  if (list.lastChild) {
    list.removeChild(list.lastChild)
  }
}

function deleteall(){
    let list = document.getElementById("todo")
    while (list.firstChild) {
        list.removeChild(list.firstChild)
        
    }
    }
