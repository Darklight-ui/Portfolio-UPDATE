const navTogggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelectorAll('.nav__links');
window.addEventListener('scroll', show__left);
window.addEventListener('scroll', show__right);


navTogggle.addEventListener('click', () => {
    document.body.classList.toggle('nav__open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav__open')
    })
})

function show__left(){
    var show = document.querySelectorAll('.show__left');
    for (var i = 0; i < show.length; i++){
        var showHeight = window.innerHeight;
        var showLeft = show[i].getBoundingClientRect().top;
        var showPoint = 150;

        if (showLeft < showHeight - showPoint){
            show[i].classList.add('active');
        }
        else{
            show[i].classList.remove('active');
        }
    }
}

function show__right(){
    var show = document.querySelectorAll('.show__right');
    for (var i = 0; i < show.length; i++){
        var showHeight = window.innerHeight;
        var showLeft = show[i].getBoundingClientRect().top;
        var showPoint = 150;

        if (showLeft < showHeight - showPoint){
            show[i].classList.add('active');
        }
        else{
            show[i].classList.remove('active');
        }
    }
}
