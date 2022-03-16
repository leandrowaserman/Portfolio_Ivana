const botonMenu = document.querySelector('.boton')
const menu = document.querySelector('.navbarList')

const digitalIndexSer = document.getElementById("img1")
const brandingIndexSer = document.getElementById("img2")
const comunicacionIndexSer = document.getElementById("img3")
const digitalIndexPro = document.getElementById("img4")
const comunicacionIndexPro = document.getElementById("img5")
const brandingIndexPro = document.getElementById("img6")


brandingIndexPro.addEventListener('click', () => {
    localStorage.setItem("projects","branding")
})
digitalIndexPro.addEventListener('click', () => {
    localStorage.setItem("projects","digital")
})
comunicacionIndexPro.addEventListener('click', () => {
    localStorage.setItem("projects","comunicacion")
})
brandingIndexSer.addEventListener('click', () => {
    localStorage.setItem("services","branding")
})
digitalIndexSer.addEventListener('click', () => {
    localStorage.setItem("services","digital")
})
comunicacionIndexSer.addEventListener('click', () => {
    localStorage.setItem("services","comunicacion")
})

botonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_visible')
})