let rootElement = document.documentElement;
let hamburger = document.querySelector('#hamburger');
let close = document.querySelector('#close');
let menu = document.querySelector('.menu');
let main = document.querySelector('main');
let nav = document.querySelector('nav');
let menuOptions = document.querySelectorAll('.menu_option');
let filtersWrapper = document.querySelector('.filters_products_wrapper');
let filtersHeader = document.querySelector('.choosed_products_filters_header');
let filtersBody = document.querySelector('.filters');
let isDropDown = false;
let productCards = document.querySelectorAll('.product_card');
let backIcon = document.querySelector('.back_icon_wrapper');
let priceWrapper = document.querySelector('.price_wrapper');

priceWrapper.addEventListener('click', showBasket);

for (let i = 0; i < productCards.length; i++) {
    const productCard = productCards[i];
    productCard.addEventListener('click', showProductsOptions);

}
let basket = document.querySelector('.summary_basket');
let products = document.querySelector('.products');
let choosedProducts = document.querySelector('.choosed_products_wrapper');
function showBasket() {
    products.style.transform = 'translate(-200vw)';
    choosedProducts.style.transform = 'translate(-100vw)';
    basket.style.transform = 'translate(0)';

}
function showProductsOptions() {
    console.log('slide');
    products.style.transform = 'translate(-100vw)';
    // main.style.minHeight = '100vh';
    backIcon.style.visibility = 'visible';
    choosedProducts.style.transform = 'translate(0)';
    basket.style.transform = 'translate(200vw)';
    // products.style.display = 'none';
    // document.querySelector('.swiper').style.display = 'none';
    choosedProducts.style.display = 'flex';
}
backIcon.addEventListener('click', showProducts);
function showProducts() {
    console.log('slide');
    products.style.transform = 'translate(0)';
    // main.style.maxHeight = '100vh';
    choosedProducts.style.transform = 'translate(100vw)';
    // choosedProducts.style.display = 'none';
    products.style.display = 'grid';
    // document.querySelector('.swiper').style.display = 'flex';
    backIcon.style.visibility = 'hidden';
    basket.style.transform = 'translate(200vw)';



}



dropDownFilters = function () {
    if (isDropDown === false) {
        filtersBody.style.height = 'auto';
        filtersBody.style.transform = 'translate(0)';
        filtersWrapper.style.margin = ' 1rem 0';

        console.log('flex');
    } else {
        filtersBody.style.height = '0';
        filtersBody.style.transform = 'translate(-2.5rem)';
        filtersWrapper.style.margin = '0';
        console.log('none');
    }
    isDropDown = !isDropDown;
};

// filtersHeader.addEventListener('click', dropDownFilters);
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