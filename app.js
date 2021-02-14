const menu= document.querySelector('#mobile-menu');
const menuLinks =document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

//Display mobile menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

//highlight menu when scrolling
//about not working on click -> BUG
const highlightMenu = () => {
    const change= document.querySelector('.highlight');
    const about= document.querySelector('#about-page');
    const projects= document.querySelector('#projects-page');
    const experience= document.querySelector('#experience-page');

    let posScroll = window.scrollY;

    //add highlight to variables
    if(window.innerWidth >960 && posScroll <600) {
        //apenas para desktop e ver pontos passagem c consolelog
        about.classList.add('highlight');
        projects.classList.remove('highlight');//scroll para cima again
        return;
    }else if (window.innerWidth >960 && posScroll <1400){
        projects.classList.add('highlight');
        about.classList.remove('highlight');
        experience.classList.remove('highlight');
        return;
    }else if (window.innerWidth >960 && posScroll <2345){
        experience.classList.add('highlight');
        projects.classList.remove('highlight');
        return;
    }

    if((change && window.innerWidth<960 && posScroll< 600) || change){
        change.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);
