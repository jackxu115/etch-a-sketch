const sizeBtn = document.querySelector("#sizeBtn")
const blackBtn = document.querySelector("#blackBtn")
const rgbBtn = document.querySelector("#rgbBtn")
const colorBtn = document.querySelector("#colorBtn")
const eraserBtn = document.querySelector("#eraserBtn")
const clearBtn = document.querySelector("#clearBtn")
const size = document.querySelector("#size")
const color = document.querySelector("#color")
const grid = document.querySelector("#grid")

let input
let div
let p
let inputColor
let divColor
let sizeValue = '16'
let colorValue = '#000000'

sizeBtn.addEventListener('click', () => {
    showSizeBar()
})

const setSizeBarAttribute = () => {
    input = document.createElement('input')
    input.setAttribute('id', 'slider')
    input.setAttribute('type', 'range')
    input.setAttribute('style', 'margin: 0; padding: 0')
    input.setAttribute('min', '1')
    input.setAttribute('max', '100')
    input.setAttribute('value', sizeValue)
}

const showSizeBar = () => {
    setSizeBarAttribute()
    div = document.createElement('div')
    p = document.createElement('p')
    div.setAttribute('id', 'sizeDiv')
    p.setAttribute('id', 'sizeValue')
    p.setAttribute('style', 'margin: 0')
    size.appendChild(div)
    div.appendChild(input)
    const sizeDiv = document.querySelector("#sizeDiv")
    const sizeBar = document.getElementById("slider")
    sizeValue = document.getElementById("slider").value
    p.textContent = sizeValue
    div.appendChild(p)
    sizeBar.addEventListener('input', () => {
        sizeValue = document.getElementById("slider").value
        p.textContent = sizeValue
        grid.innerHTML = ''
        displayGrid(document.getElementById(("slider")).value)
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
    const colorArray = new Array(6).fill("0")
    const colorHex = new Array(16).fill("0")
    for (let i = 0; i < 10; i++) {
        colorHex[i] = String.fromCharCode(48+i)
    }
    for (let i = 10; i < 16; i++) {
        colorHex[i] = String.fromCharCode(87+i)
    }
    console.log(colorHex)
    console.log(Math.floor(Math.random()*16))
    document.querySelectorAll('.cell').forEach(item => {
        for (let i = 0; i < 6; i++) {
            colorArray[i] = colorHex[Math.floor(Math.random()*16)]
        }
        const color = "#".concat(colorArray.join(""))
        console.log(color)
        item.addEventListener('mouseover', event => {
            event.target.style.background = color
        })
    })
})

const setColorPicker = () => {
    inputColor = document.createElement('input')
    inputColor.setAttribute('type', 'color')
    inputColor.setAttribute('id', 'colorItem')
    inputColor.setAttribute('value',colorValue)
}

colorBtn.addEventListener('click', () => {
    setColorPicker()
    divColor = document.createElement('div')
    divColor.setAttribute('id', 'colorDiv')
    color.appendChild(divColor)
    divColor.appendChild(inputColor)
    const colorDivId = document.querySelector("#colorDiv")
    const colorItem = document.querySelector("#colorItem")
    colorItem.addEventListener('input', () => {
        colorValue = colorItem.value
        document.querySelectorAll('.cell').forEach(item => {
            item.addEventListener('mouseover', event => event.target.style.background = colorItem.value)
        })
    })
    colorItem.addEventListener('mouseleave', () => colorDivId.remove())
})

eraserBtn.addEventListener('click', () => {
   document.querySelectorAll('.cell').forEach(item => {
       item.addEventListener('mouseover', event => event.target.style.background = '#fff')
   })
})

clearBtn.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach( item => {
        item.addEventListener('mouseover', event => event.target.style.background = '#000')
        item.setAttribute('style', 'background: #fff; border: 1px solid #000')
    })
})

const defaultGrid = () => {
    displayGrid(16)
    document.querySelectorAll('.cell').forEach(item => {
        item.addEventListener('mouseover', (event) => event.target.style.background = 'black')
    })
}

defaultGrid()

























