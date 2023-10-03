const getSchemeBtn = document.getElementById("get-scheme")
const hexList =  document.querySelectorAll(".nmb-display")
const colorList = document.querySelectorAll(".color")
const colorInput = document.getElementById("input-color")
let newColor

getSchemeBtn.addEventListener("click", () => {
    
    const hexValue = colorInput.value.slice(1)
    
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}`)
    .then(res => res.json())
    .then(data => {
        newColor = data.colors
        render()
    })
    
})

function render() {
    newColor.forEach( (color) => {
        const index = newColor.indexOf(color)
        const hexVal = color.hex.value
        hexList[index].textContent = `${hexVal}`
        colorList[index].style.backgroundColor = `${hexVal}`
    })
}
