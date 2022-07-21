const sizeBtn = document.querySelector("#sizeBtn")
const blackBtn = document.querySelector("#blackBtn")
const rgbBtn = document.querySelector("#sizeBtn")
const colorBtn = document.querySelector("#colorBtn")
const eraserBtn = document.querySelector("#eraserBtn")
const clearBtn = document.querySelector("#clearBtn")
const size = document.querySelector("#size")
const color = document.querySelector("#color")
const grid = document.querySelector("#grid")
let defaultColor = 'black'

const div = document.createElement('div')
const input = document.createElement('input')
const p = document.createElement('p')

sizeBtn.addEventListener('mouseover', () => {
    showSizeBar()
})

const setSizeBarAttribute = () => {
    input.setAttribute('id', 'slider')
    input.setAttribute('type', 'range')
    input.setAttribute('style', 'margin: 0; padding: 0')
    input.setAttribute('min', '1')
    input.setAttribute('max', '100')
    input.setAttribute('value', '16')
}

const showSizeBar = () => {
    setSizeBarAttribute()
    div.setAttribute('id', 'sizeDiv')
    p.setAttribute('id', 'sizeValue')
    p.setAttribute('style', 'margin: 0')
    size.appendChild(div)
    div.appendChild(input)
    const sizeDiv = document.querySelector("#sizeDiv")
    const sizeBar = document.querySelector("#slider")
    p.textContent = sizeBar.value
    div.appendChild(p)
    sizeBar.addEventListener('input', () => {
        p.textContent = sizeBar.value
        grid.innerHTML = ''
        displayGrid(sizeBar.value)
        document.querySelectorAll('.cell').forEach(item => {
            item.addEventListener('mouseover', (event) => event.target.style.background = 'black')
        })
    })
    sizeBar.addEventListener('mouseleave', () => sizeDiv.remove())
}

const createGridItem = () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'cell')
    div.setAttribute('style', 'background: #fff; border: 1px solid #000')
    return div
}

const displayGrid = (num) => {
    const rowAttribute = `grid-template-rows: repeat(${num}, 2fr)`
    const columnAttribute = `grid-template-columns: repeat(${num}, 2fr)`
    grid.setAttribute('style', `${rowAttribute};${columnAttribute}`)
    const maxNum = num * num
    let div
    for (let i = 0; i < maxNum; i++) {
        div = createGridItem()
        grid.appendChild(div)
    }
}

blackBtn.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseover', (event) => event.target.style.background = 'black')
    })
})

rgbBtn.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseover', event => event.target.style.background = '#a83258')
    })
})

const setColorPicker = () => {
    input.setAttribute('type', 'color')
    input.setAttribute('id', 'colorItem')
}

colorBtn.addEventListener('click', () => {
    setColorPicker()
    div.setAttribute('id', 'colorDiv')
    color.appendChild(div)
    div.appendChild(input)
    const colorDiv = document.querySelector("#colorDiv")
    const colorItem = document.querySelector("#colorItem")

    colorItem.addEventListener('input', () => {
        document.querySelectorAll('.cell').forEach(item => {
            item.addEventListener('mouseover', event => event.target.style.background = colorItem.value)
        })
    })

    colorItem.addEventListener('mouseleave', () => colorDiv.remove())

})

const defaultGrid = () => {
    displayGrid(16)
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseover', (event) => event.target.style.background = 'black')
    })
}

defaultGrid()

























