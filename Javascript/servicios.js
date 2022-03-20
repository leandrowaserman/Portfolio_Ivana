const brandingEsp = document.querySelector('#branding_esp')
const digitalEsp = document.querySelector('#digital_esp')
const comunicacionEsp = document.querySelector('#comunicacion_esp')
const brandingIng = document.querySelector('#branding_ing')
const digitalIng = document.querySelector('#digital_ing')
const comunicacionIng = document.querySelector('#comunicacion_ing')



function checkStatus(){
    const section1 = document.getElementsByClassName('sectionServicios')
    const section2 = document.getElementsByClassName('sectionServicios2')
    const section3 = document.getElementsByClassName('sectionServicios3')
    if(localStorage.getItem('services')=="branding"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "block"
            section2[i].style.display = "none"
            section3[i].style.display = "none"
        }
    }else if (localStorage.getItem('services')=="digital"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "none"
            section2[i].style.display = "block"
            section3[i].style.display = "none"
        }
    }else if(localStorage.getItem('services')=="comunicacion"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "none"
            section2[i].style.display = "none"
            section3[i].style.display = "block"
        }
    }
}



brandingEsp.addEventListener('mouseover', () => {
    localStorage.setItem("services","branding")
    checkStatus()
})
digitalEsp.addEventListener('mouseover', () => {
    localStorage.setItem("services","digital")
    checkStatus()
})
comunicacionEsp.addEventListener('mouseover', () => {
    localStorage.setItem("services","comunicacion")
    checkStatus()
})
brandingIng.addEventListener('mouseover', () => {
    localStorage.setItem("services","branding")
    checkStatus()
})
digitalIng.addEventListener('mouseover', () => {
    localStorage.setItem("services","digital")
    checkStatus()
})
comunicacionIng.addEventListener('mouseover', () => {
    localStorage.setItem("services","comunicacion")
    checkStatus()
})


const botonBrandingEsp = document.querySelector('.boton_branding')
const botonDigitalEsp = document.querySelector('.boton_digital')
const botonComunicacionEsp = document.querySelector('.boton_comunicacion')
const botonBrandingIng = document.querySelector('.boton_branding_ing')
const botonDigitalIng = document.querySelector('.boton_digital_ing')
const botonComunicacionIng = document.querySelector('.boton_comunicacion_ing')

botonBrandingEsp.addEventListener('click', () => {
    localStorage.setItem("projects","branding")
})
botonDigitalEsp.addEventListener('click', () => {
    localStorage.setItem("projects","digital")
})
botonComunicacionEsp.addEventListener('click', () => {
    localStorage.setItem("projects","comunicacion")
})
botonBrandingIng.addEventListener('click', () => {
    localStorage.setItem("projects","branding")
})
botonDigitalIng.addEventListener('click', () => {
    localStorage.setItem("projects","digital")
})
botonComunicacionIng.addEventListener('click', () => {
    localStorage.setItem("projects","comunicacion")
})