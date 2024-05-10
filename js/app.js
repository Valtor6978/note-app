//--------   All required variables =>

let $ = document

let input = $.getElementById("input-field")
let btnSave = $.querySelector("#btn-save")
let btnDelete = $.querySelector("#btn-delete")
let colors = $.querySelectorAll(".color-box")
let notes = $.querySelector("#listed")

//--------   Change the color of the notes =>

colors.forEach( function (x) {
    x.addEventListener("click" , function () {
        let bgColor = x.style.backgroundColor
        input.style.backgroundColor = bgColor
    } )
})

//--------   Events =>

btnSave.addEventListener("click" , function () {
    let newNoteDiv = $.createElement("div")
    newNoteDiv.className = "card shadow-sm rounded"
    newNoteDiv.style.backgroundColor = input.style.backgroundColor

    let newNoteParagraph = $.createElement("p")
    newNoteParagraph.className = "card-text p-3"
    newNoteParagraph.innerHTML = input.value

    newNoteDiv.append(newNoteParagraph)
    notes.append(newNoteDiv)

    newNoteDiv.addEventListener("click" , function (event) {
        event.target.parentElement.remove()
    } )
})

input.addEventListener("keydown" , function (event) {
    if (event.which === 13) {
        let newNoteDiv = $.createElement("div")
        newNoteDiv.className = "card shadow-sm rounded"
        newNoteDiv.style.backgroundColor = input.style.backgroundColor
    
        let newNoteParagraph = $.createElement("p")
        newNoteParagraph.className = "card-text p-3"
        newNoteParagraph.innerHTML = input.value
    
        newNoteDiv.append(newNoteParagraph)
        notes.append(newNoteDiv)

        newNoteDiv.addEventListener("click" , function (event) {
            event.target.parentElement.remove()
        } )
    }
})

btnDelete.addEventListener("click" ,function () {
    input.value = ""
})






