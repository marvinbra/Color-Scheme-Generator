const getSchemeBtn = document.getElementById("get-scheme")
const nmbDisplay =  document.querySelector(".nmb-display")
const colorInput = document.getElementById("input-color")
const colors = document.querySelector(".color")
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
        console.log(color.hex.value)
        nmbDisplay.textContent = `${colorInput.value}`
        colors.style.backgroundColor = `${colorInput.value}`
    })
}
