const brandingEsp = document.querySelector('#branding_esp')
const digitalEsp = document.querySelector('#digital_esp')
const comunicacionEsp = document.querySelector('#comunicacion_esp')
const brandingIng = document.querySelector('#branding_ing')
const digitalIng = document.querySelector('#digital_ing')
const comunicacionIng = document.querySelector('#comunicacion_ing')


function checkStatusPro(){
    const section1 = document.getElementsByClassName('projects_branding')
    const section2 = document.getElementsByClassName('projects_digital')
    const section3 = document.getElementsByClassName('projects_comunicacion')
    if(localStorage.getItem('projects')=="branding"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "block"
            section2[i].style.display = "none"
            section3[i].style.display = "none"
        }
    }else if (localStorage.getItem('projects')=="digital"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "none"
            section2[i].style.display = "block"
            section3[i].style.display = "none"
        }
    }else if(localStorage.getItem('projects')=="comunicacion"){
        for(let i=0;i<section1.length;i++){
            section1[i].style.display = "none"
            section2[i].style.display = "none"
            section3[i].style.display = "block"
        }
    }
}



brandingEsp.addEventListener('mouseover', () => {
    localStorage.setItem("projects","branding")
    checkStatusPro()
})
digitalEsp.addEventListener('mouseover', () => {
    localStorage.setItem("projects","digital")
    checkStatusPro()
})
comunicacionEsp.addEventListener('mouseover', () => {
    localStorage.setItem("projects","comunicacion")
    checkStatusPro()
})
brandingIng.addEventListener('mouseover', () => {
    localStorage.setItem("projects","branding")
    checkStatusPro()
})
digitalIng.addEventListener('mouseover', () => {
    localStorage.setItem("projects","digital")
    checkStatusPro()
})
comunicacionIng.addEventListener('mouseover', () => {
    localStorage.setItem("projects","comunicacion")
    checkStatusPro()
})