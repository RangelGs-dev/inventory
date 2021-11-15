const products = [
    'Heineken longneck puro malte 330ml',
    'Skol Pilsen lata 269ml'
]

/* Add item */
function newItem() {
    const productList = document.querySelector('.list-items')
    let li = document.createElement('li')
    let span = document.createElement('span')
    let img = document.createElement('img')
    const addItem = document.querySelector('.input-listAdd').value

    if(addItem != '') {
        li.innerText = addItem
    
        productList.appendChild(li)
        li.classList.add('removejs')

        productList.appendChild(span)
        span.appendChild(img)
        img.classList.add('remove')
    } else {
        alert('Por favor, insira uma descrição valida!'); 
    }
    
    document.querySelector('.input-listAdd').value = ''
}

const addBtn = document.querySelector('.addBtn')

function handleKey(event) {
    if(event.key === "Enter") {
        const productList = document.querySelector('.list-items')
        let li = document.createElement('li')
        let span = document.createElement('span')
        let img = document.createElement('img')
        const addItem = document.querySelector('.input-listAdd').value

        if(addItem != '') {
            li.innerText = addItem
        
            productList.appendChild(li)
            li.classList.add('removejs')

            productList.appendChild(span)
            span.appendChild(img)
            img.classList.add('remove')
        } else {
            alert('Por favor, insira uma descrição valida!'); 
        }
        
        document.querySelector('.input-listAdd').value = ''
    }
}

window.addEventListener('keydown', handleKey)


/* Remove item */

const removeProduct = document.getElementsByClassName('removejs')
const removeProductArray = Array.from(removeProduct)
