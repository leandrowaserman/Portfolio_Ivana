const brandingPro = document.querySelector('#branding')
const digitalPro = document.querySelector('#digital')
const comunicacionPro = document.querySelector('#comunicacion')
const sectionPro1 = document.querySelector('.projects_branding')
const sectionPro2 = document.querySelector('.projects_digital')
const sectionPro3 = document.querySelector('.projects_comunicacion')

function checkStatusPro(){
    if(localStorage.getItem('projects')=="branding"){
        sectionPro1.style.display="block"
        sectionPro2.style.display="none"
        sectionPro3.style.display="none"
    }else if (localStorage.getItem('projects')=="digital"){
        sectionPro1.style.display="none"
        sectionPro2.style.display="block"
        sectionPro3.style.display="none"
    }else if(localStorage.getItem('projects')=="comunicacion"){
        sectionPro1.style.display="none"
        sectionPro2.style.display="none"
        sectionPro3.style.display="block"
    }
}



brandingPro.addEventListener('mouseover', () => {
    localStorage.setItem("projects","branding")
    checkStatusPro()
})
digitalPro.addEventListener('mouseover', () => {
    localStorage.setItem("projects","digital")
    checkStatusPro()
})
comunicacionPro.addEventListener('mouseover', () => {
    localStorage.setItem("projects","comunicacion")
    checkStatusPro()
})