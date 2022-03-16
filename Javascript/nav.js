const botonMenu = document.querySelector('.boton')
const menu = document.querySelector('.navbarList')

botonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu_visible')
})