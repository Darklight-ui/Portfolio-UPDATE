const navTogggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__links');


navTogggle.addEventListener('click', () => {
    document.body.classList.toggle('nav__open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav__open')
    })
})