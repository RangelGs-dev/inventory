

document.querySelector('.addBtn').addEventListener('click', function() {
    const value = this.value
    
    if(value) {
        addItem(value)
    } else {
        alert('Por favor, insira uma descrição valida!'); 
    }
})


function handleKey(event) {
    console.log(event)
    const value = document.querySelector('.input-listAdd').value
    if((event.key === 'Enter' || event.key === 'NumpadEnter') && value) {
        addItem(value)
    }
}

document.querySelector('.input-listAdd').addEventListener('keydown', handleKey)


function addItem(value) {
    const productList = document.querySelector('.list-items')
    let li = document.createElement('li')
    let span = document.createElement('span')
    let img = document.createElement('img')
    

    li.innerText = value
    productList.appendChild(li)
    
    productList.appendChild(span)
    span.appendChild(img)
    img.classList.add('remove')

    document.querySelector('.input-listAdd').value = ''
}