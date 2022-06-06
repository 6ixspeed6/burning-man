const burgIcon = document.querySelector('.menu__icon')
const burgMenu = document.querySelector('.menu__list')
const burgOverflow = document.querySelector('body')   

burgIcon.addEventListener('click', () => {
   burgIcon.classList.toggle('active')
   burgMenu.classList.toggle('active')
   burgOverflow.classList.toggle('lock')
})