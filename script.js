const data = (localStorage.getItem('descriptionItems')) ? JSON.parse(localStorage.getItem('descriptionItems')):{
    completed: []
}

const removeSvg = '<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="24" height="24"viewBox="0 0 24 24"style=" fill:#ffff;"><path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path></svg>'

populatingWithData()

/* Add item */
document.querySelector('.addBtn').addEventListener('click', function() {
    const value = document.querySelector('.input-listAdd').value
    
    if(value) {
        addItem(value)
    } else {
        alert('Por favor, insira uma descrição valida!'); 
    }
})


function handleKey(event) {
    const value = this.value
    if((event.key === 'Enter' || event.key === 'NumpadEnter') && value) {
        addItem(value)
    }
}

document.querySelector('.input-listAdd').addEventListener('keydown', handleKey)


function addItem(value) {
    addItemToDOM(value)

    data.completed.push(value)
    dataUpdateCompleted()

    document.querySelector('.input-listAdd').value = ''
}

function populatingWithData() {
    if(!data.completed.length) return
    for(let i = 0; i < data.completed.length; i++) {
            let value = data.completed[i]
            addItemToDOM(value)
        }
}

function removeItem() {
    let item = this.previousElementSibling
    let parent = this.parentElement
    parent.removeChild(this)
    parent.removeChild(item)
    data.completed.splice(data.completed.indexOf(item.innerText), 1)

    dataUpdateCompleted()
}


function dataUpdateCompleted() {
    localStorage.setItem('descriptionItems', JSON.stringify(data))
}

/* Adicionando itens à dom */
function addItemToDOM(text) {
    const productList = document.querySelector('.list-items')
    let li = document.createElement('li')
    let span = document.createElement('span')    

    li.innerText = text
    productList.appendChild(li)
    li.classList.add('removeItem')
    
    productList.appendChild(span)
    span.classList.add('removeSpan')
    let button = document.createElement('button')
    span.appendChild(button)
    button.innerHTML = removeSvg
    button.classList.add('remove')


    /* adicionando evento de clique para remoção de item */
    span.addEventListener('click', removeItem)
}