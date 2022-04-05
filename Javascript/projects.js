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
    const digital_sidebar = document.getElementsByClassName('digital_sidebar')
    const branding_sidebar = document.getElementsByClassName('branding_sidebar')
    const comunicacion_sidebar = document.getElementsByClassName('comunicacion_sidebar')
    if(sessionStorage.getItem('projects')=="branding"){
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
    }else if (sessionStorage.getItem('projects')=="digital"){
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
    }else if(sessionStorage.getItem('projects')=="comunicacion"){
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
    sessionStorage.setItem("projects","branding")
    checkStatusPro()
})
digitalEsp.addEventListener('click', () => {
    sessionStorage.setItem("projects","digital")
    checkStatusPro()
})
comunicacionEsp.addEventListener('click', () => {
    sessionStorage.setItem("projects","comunicacion")
    checkStatusPro()
})
brandingIng.addEventListener('click', () => {
    sessionStorage.setItem("projects","branding")
    checkStatusPro()
})
digitalIng.addEventListener('click', () => {
    sessionStorage.setItem("projects","digital")
    checkStatusPro()
})
comunicacionIng.addEventListener('click ', () => {
    sessionStorage.setItem("projects","comunicacion")
    checkStatusPro()
})