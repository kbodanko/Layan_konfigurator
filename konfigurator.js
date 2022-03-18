let rootElement = document.documentElement;
let hamburger = document.querySelector('#hamburger');
let close = document.querySelector('#close');
let menu = document.querySelector('.menu');
let main = document.querySelector('main');
let nav = document.querySelector('nav');
let menuOptions = document.querySelectorAll('.menu_option');

for (let i = 0; i < menuOptions.length; i++) {
    const element = menuOptions[i];
    element.setAttribute('id', 'menuOption' + [i]);

}


function showMenu() {
    console.log('kk');
    menu.style.transform = 'translateY(0)';
    main.style.filter = 'blur(8px)';
    nav.style.filter = 'blur(8px)';
}
function hideMenu() {
    console.log('kk');
    menu.style.transform = 'translateY(-130vh)';
    main.style.filter = 'blur(0)';
    nav.style.filter = 'blur(0)';
}
close.addEventListener('click', hideMenu);
hamburger.addEventListener('click', showMenu);
window.addEventListener('click', function () {
    console.log(event.target);
});