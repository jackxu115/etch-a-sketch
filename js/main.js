const sizeBtn = document.querySelector("#sizeBtn")
const size = document.querySelector("#size")

const sizeBar = document.createElement('div')
const sizeBarInput = document.createElement('input')
const sizeTag = document.createElement('p')

sizeBtn.addEventListener('mouseover', () => {
    showSizeBar()
    getSizeValue()
    showSizeValue()
    createGridItem(3)
})

sizeBarInput.addEventListener('change', () =>{
    showSizeValue()
})

sizeBarInput.addEventListener('mouseleave', () => removeSizeBar())

const removeSizeBar = () => {
    size.removeChild(sizeBar)
}

const setSizeBarAttribute = () => {
    sizeBarInput.setAttribute('id', 'slider')
    sizeBarInput.setAttribute('type', 'range')
    sizeBarInput.setAttribute('style','margin: 0; padding: 0')
    sizeBarInput.setAttribute('min', '1')
    sizeBarInput.setAttribute('max', '100')
    sizeBarInput.setAttribute('value','16')
}

const showSizeBar = () => {
    setSizeBarAttribute()
    size.appendChild(sizeBar)
    sizeBar.appendChild(sizeBarInput)

}

const getSizeValue = () => {
    const sizeValue = document.querySelector("#slider")
    return sizeValue.value
}

const showSizeValue = () => {
    sizeTag.setAttribute('id', 'sizeValue')
    sizeTag.setAttribute('style', 'margin: 0')
    sizeTag.textContent = getSizeValue()
    sizeBar.appendChild(sizeTag)

}

const createGridItem = num => {
    const maxNum = num * num
    const gridItem = new Array(maxNum).fill('<div class="cell"></div>')
    console.log(gridItem[0])
}





















