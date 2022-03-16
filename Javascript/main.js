
<<<<<<< HEAD


=======
let botonIngles = document.getElementById("btn_ingles")
let botonEspañol = document.getElementById("btn_español")
>>>>>>> e20e5ffb8fc7275b1b3b3ef77854bf284f03f1a3

function checkLanguage(){
    const ingles = document.getElementsByClassName("english")
    const español = document.getElementsByClassName("spanish")
    const footerIngles = document.getElementsByClassName("english_footer")
    const footerEspañol = document.getElementsByClassName("spanish_footer")
    if(localStorage.getItem('language')==1){
        for(let i=0;i<español.length;i++){
            español[i].style.display = "block"
            ingles[i].style.display = "none"
        }
        for(let i=0;i<footerEspañol.length;i++){
            footerEspañol[i].style.display = "grid"
            footerIngles[i].style.display = "none"
        }
        
    }else if (localStorage.getItem('language')==2){
        for(let i=0;i<español.length;i++){
            español[i].style.display = "none"
            ingles[i].style.display = "block"
        }
        for(let i=0;i<footerEspañol.length;i++){
            footerEspañol[i].style.display = "none"
            footerIngles[i].style.display = "grid"
        }

    }
}
let botonIngles = document.getElementById("btn_ingles")
let botonEspañol = document.getElementById("btn_español")
botonEspañol.addEventListener('click', () =>{
    localStorage.setItem("language", 1)
    checkLanguage()
})
botonIngles.addEventListener('click', () =>{
    localStorage.setItem("language", 2)
    checkLanguage()
})
