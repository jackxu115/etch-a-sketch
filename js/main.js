const sizeBtn = document.querySelector("#sizeBtn")
const blackBtn = document.querySelector("#blackBtn")
const rgbBtn = document.querySelector("#sizeBtn")
const colorBtn = document.querySelector('#colorBtn')
const eraserBtn = document.querySelector("#eraserBtn")
const clearBtn = document.querySelector("#clearBtn")
const size = document.querySelector("#size")
const grid = document.querySelector("#grid")
let defaultColor = 'black'


const div = document.createElement('div')
const input = document.createElement('input')
const p = document.createElement('p')

sizeBtn.addEventListener('mouseover', () => {
    showSizeBar()
    getSizeValue()
    showSizeValue()
})

input.addEventListener('change', () =>{
    showSizeValue()
    grid.innerHTML = ''
    displayGrid(getSizeValue())
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseover', () => draw(defaultColor, item))
    })
})

input.addEventListener('mouseleave', () => removeSizeBar())

const removeSizeBar = () => {
    size.removeChild(div)
}

const setSizeBarAttribute = () => {
    input.setAttribute('id', 'slider')
    input.setAttribute('type', 'range')
    input.setAttribute('style','margin: 0; padding: 0')
    input.setAttribute('min', '1')
    input.setAttribute('max', '100')
    input.setAttribute('value','16')
}

const showSizeBar = () => {
    setSizeBarAttribute()
    size.appendChild(div)
    div.appendChild(input)

}

const getSizeValue = () => {
    const sizeValue = document.querySelector("#slider")
    return sizeValue.value
}

const showSizeValue = () => {
    p.setAttribute('id', 'sizeValue')
    p.setAttribute('style', 'margin: 0')
    p.textContent = getSizeValue()
    div.appendChild(p)

}

const createGridItem = num => {
    const div = document.createElement('div')
    div.setAttribute('class','cell')
    div.setAttribute('style', 'background: #fff; border: 1px solid #000')
    return div
}

const displayGrid = (num) => {
    const rowAttribute = `grid-template-rows: repeat(${num}, 2fr)`
    const columnAttribute = `grid-template-columns: repeat(${num}, 2fr)`
    grid.setAttribute('style', `${rowAttribute};${columnAttribute}`)
    const maxNum = num * num
    let div
    for (let i = 0; i < maxNum; i++ ) {
        div = createGridItem()
        grid.appendChild(div)
    }
}

blackBtn.addEventListener('click', () => defaultColor = "#000")

rgbBtn.addEventListener('click', () => {

})

const setColorPicker = () => {
    input.setAttribute('type', 'color')
    input.setAttribute('id', 'colorItem')
}


colorBtn.addEventListener('click', () => {

})


const draw = (color, item) => {
    item.setAttribute('style', `background: ${color}`)
}


























