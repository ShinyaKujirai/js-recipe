const input = document.getElementById("input-text")
const addButton = document.getElementById("add-button")
const display = document.getElementById("display")

let list = []

if(localstrage["memo"] ){
    list = JSON.parse(localStorage["memo"])
}
console.log(list)

for(let i=0; i<list.length; i++){
    const card = document.createElement("div")
    card.textContent = list[i]
    display.append(card)
}

addButton.onclick = function(){
    const card = document.createElement("div")
    card.textContent = input.value
    display.append(card)
    list.push(input.value)
    localStorage["memo"] = JSON.stringify(list)
    console.log(list)
}