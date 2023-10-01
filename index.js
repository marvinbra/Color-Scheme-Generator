const getSchemeBtn = document.getElementById("get-scheme")
const nmbDisplay =  document.querySelector(".nmb-display")
const colorInput = document.getElementById("input-color")
const colors = document.querySelector(".color")

getSchemeBtn.addEventListener("click", () => {
    console.log(colorInput.value)
    nmbDisplay.textContent = `${colorInput.value}`
    colors.style.backgroundColor = `${colorInput.value}`
    console.log(nmbDisplay)
})