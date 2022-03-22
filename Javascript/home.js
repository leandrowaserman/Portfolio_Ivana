const digitalIndexPro1 = document.getElementById("img1")
const brandingIndexPro1 = document.getElementById("img2")
const comunicacionIndexPro1 = document.getElementById("img3")
const digitalIndexPro2 = document.getElementById("img4")
const comunicacionIndexPro2 = document.getElementById("img5")
const brandingIndexPro2 = document.getElementById("img6")


brandingIndexPro1.addEventListener('click', () => {
    localStorage.setItem("projects","branding")
})
digitalIndexPro1.addEventListener('click', () => {
    localStorage.setItem("projects","digital")
})
comunicacionIndexPro1.addEventListener('click', () => {
    localStorage.setItem("projects","comunicacion")
})
brandingIndexPro2.addEventListener('click', () => {
    localStorage.setItem("projects","branding")
})
digitalIndexPro2.addEventListener('click', () => {
    localStorage.setItem("projects","digital")
})
comunicacionIndexPro2.addEventListener('click', () => {
    localStorage.setItem("projects","comunicacion")
})

const digitalIndexSer = document.getElementById("img1")
const brandingIndexSer = document.getElementById("img2")
const comunicacionIndexSer = document.getElementById("img3")
brandingIndexSer.addEventListener('click', () => {
    localStorage.setItem("services","branding")
})
digitalIndexSer.addEventListener('click', () => {
    localStorage.setItem("services","digital")
})
comunicacionIndexSer.addEventListener('click', () => {
    localStorage.setItem("services","comunicacion")
})