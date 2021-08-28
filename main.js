const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn__burguer');
const nav = document.querySelector('.nav');
const navbar = document.querySelector('.nav__navbar');
const menuitems = document.querySelectorAll('.nav__navbar__item')


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add('open');
        nav.classList.add('open');
        navbar.classList.add('open');
        menuitems.forEach(item => item.classList.add('open'));
        showMenu=true;
    } else {
        hamburguer.classList.remove('open');
        nav.classList.remove('open');
        navbar.classList.remove('open');
        menuitems.forEach(item => item.classList.remove('open'));
        showMenu=false;
    }

}