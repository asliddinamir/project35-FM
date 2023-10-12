const toggler = document.querySelector('.toggler')

toggler.addEventListener('click', () => {
    toggler.classList.toggle('right')
    document.body.classList.toggle('light_mode')
})