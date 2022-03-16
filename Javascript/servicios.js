const branding = document.querySelector('#branding')
const digital = document.querySelector('#digital')
const comunicacion = document.querySelector('#comunicacion')
const section1 = document.querySelector('.sectionServicios')
const section2 = document.querySelector('.sectionServicios2')
const section3 = document.querySelector('.sectionServicios3')

function checkStatus(){
    if(localStorage.getItem('services')=="branding"){
        section1.style.display="block"
        section2.style.display="none"
        section3.style.display="none"
    }else if (localStorage.getItem('services')=="digital"){
        section1.style.display="none"
        section2.style.display="block"
        section3.style.display="none"
    }else if(localStorage.getItem('services')=="comunicacion"){
        section1.style.display="none"
        section2.style.display="none"
        section3.style.display="block"
    }
}



branding.addEventListener('mouseover', () => {
    localStorage.setItem("services","branding")
    checkStatus()
})
digital.addEventListener('mouseover', () => {
    localStorage.setItem("services","digital")
    checkStatus()
})
comunicacion.addEventListener('mouseover', () => {
    localStorage.setItem("services","comunicacion")
    checkStatus()
})






