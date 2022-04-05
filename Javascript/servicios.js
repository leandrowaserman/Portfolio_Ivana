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
    const digital_sidebar = document.getElementsByClassName('digital_sidebar')
    const branding_sidebar = document.getElementsByClassName('branding_sidebar')
    const comunicacion_sidebar = document.getElementsByClassName('comunicacion_sidebar')
    if(sessionStorage.getItem('services')=="branding"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "block"
            section2[i].style.display = "none"
            section3[i].style.display = "none"
        }
        for(let i=0; i<branding_sidebar.length;i++){
            branding_sidebar[i].classList.add("sidebar_active")
            digital_sidebar[i].classList.remove("sidebar_active")
            comunicacion_sidebar[i].classList.remove("sidebar_active")
        }
    }else if (sessionStorage.getItem('services')=="digital"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "none"
            section2[i].style.display = "block"
            section3[i].style.display = "none"
        }
        for(let i=0; i<branding_sidebar.length;i++){
            branding_sidebar[i].classList.remove("sidebar_active")
            digital_sidebar[i].classList.add("sidebar_active")
            comunicacion_sidebar[i].classList.remove("sidebar_active")
        }
    }else if(sessionStorage.getItem('services')=="comunicacion"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "none"
            section2[i].style.display = "none"
            section3[i].style.display = "block"
        }
        for(let i=0; i<branding_sidebar.length;i++){
            branding_sidebar[i].classList.remove("sidebar_active")
            digital_sidebar[i].classList.remove("sidebar_active")
            comunicacion_sidebar[i].classList.add("sidebar_active")
        }
    }
}



brandingEsp.addEventListener('click', () => {
    sessionStorage.setItem("services","branding")
    checkStatus()
})
digitalEsp.addEventListener('click', () => {
    sessionStorage.setItem("services","digital")
    checkStatus()
})
comunicacionEsp.addEventListener('click', () => {
    sessionStorage.setItem("services","comunicacion")
    checkStatus()
})
brandingIng.addEventListener('click', () => {
    sessionStorage.setItem("services","branding")
    checkStatus()
})
digitalIng.addEventListener('click', () => {
    sessionStorage.setItem("services","digital")
    checkStatus()
})
comunicacionIng.addEventListener('click', () => {
    sessionStorage.setItem("services","comunicacion")
    checkStatus()
})


const botonBrandingEsp = document.querySelector('.boton_branding')
const botonDigitalEsp = document.querySelector('.boton_digital')
const botonComunicacionEsp = document.querySelector('.boton_comunicacion')
const botonBrandingIng = document.querySelector('.boton_branding_ing')
const botonDigitalIng = document.querySelector('.boton_digital_ing')
const botonComunicacionIng = document.querySelector('.boton_comunicacion_ing')

botonBrandingEsp.addEventListener('click', () => {
    sessionStorage.setItem("projects","branding")
})
botonDigitalEsp.addEventListener('click', () => {
    sessionStorage.setItem("projects","digital")
})
botonComunicacionEsp.addEventListener('click', () => {
    sessionStorage.setItem("projects","comunicacion")
})
botonBrandingIng.addEventListener('click', () => {
    sessionStorage.setItem("projects","branding")
})
botonDigitalIng.addEventListener('click', () => {
    sessionStorage.setItem("projects","digital")
})
botonComunicacionIng.addEventListener('click', () => {
    sessionStorage.setItem("projects","comunicacion")
})