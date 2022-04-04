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
let valueWrapper = document.querySelector('.value_wrapper');
let cont11inerConfig = document.querySelector('.cont1iner_config');
let header = document.querySelector('.nav_header_main_wrapper');
let h2value = document.querySelector('.h2_button_value_wrapper');
let choosedProductsName = document.querySelector('h2');
valueWrapper.addEventListener('click', showBasket);
let summaryButton = document.querySelector('.summary_button');
summaryButton.addEventListener('click', showBasket);
window.addEventListener('resize', function () {
    if (swiperWrapper.style.transform !== 'translate(0px)') {
        windowResizeAdjust();
    }
});

for (let i = 0; i < productCards.length; i++) {
    const productCard = productCards[i];
    productCard.addEventListener('click', showProductsOptions);

}
let basket = document.querySelector('.summary_basket');
let products = document.querySelector('.products');
let choosedProducts = document.querySelector('.choosed_products_wrapper');
let swiperWrapper = document.querySelector('.swiper_aligned_wrapper');
swiperWrapper.style.transform = 'translate(0)';
function showBasket() {
    console.log('showBasket');
    products.style.transform = 'translate(-100vw)';
    // products.style.position = 'absolute';
    // choosedProducts.style.position = 'absolute';
    choosedProducts.style.transform = 'translate(-200vw)';
    choosedProductsName.textContent = 'podsumowanie';
    basket.style.transform = 'translate(0)';
    basket.style.position = 'relative';
    // swiper.style.position = 'absolute';
    swiperWrapper.style.transform = 'translate(-100vw)';
    windowResizeAdjust();

}
let mql1500px = window.matchMedia('(min-width: 1500px)');
let mql700px = window.matchMedia('(max-width: 700px)');
function windowResizeAdjust() {
    if (mql1500px.matches) {
        h2value.style.transform = 'translateY(-26rem)';
        main.style.transform = 'translateY(-26rem)';
    } else if (mql700px.matches) {
        h2value.style.transform = 'translateY(-10rem)';
        main.style.transform = 'translateY(-10rem)';
    }
    else {
        h2value.style.transform = 'translateY(-17rem)';
        main.style.transform = 'translateY(-17rem)';
    }
}
function showProductsOptions() {
    console.log('showProductsOptions');
    console.log('slide');
    products.style.transform = 'translate(-150vw)';
    // products.style.position = 'absolute';
    // main.style.minHeight = '100vh';
    backIcon.style.visibility = 'visible';
    if (mql700px.matches) {
        choosedProducts.style.transform = 'translate(-87vw)';
    } else {
        choosedProducts.style.transform = 'translate(-90vw)';
    }
    choosedProducts.style.position = 'relative';
    // products.style.position = 'absolute';
    basket.style.transform = 'translate(100vw)';
    // swiper.style.position = 'absolute';
    swiperWrapper.style.transform = 'translate(-100vw, -100vw)';
    // setTimeout(() => {
    //     swiperWrapper.style.display = 'none';
    // }, 500);
    // products.style.display = 'none';
    // document.querySelector('.swiper').style.display = 'none';
    choosedProducts.style.display = 'flex';

    choosedProductsName.textContent = 'procesory';
    windowResizeAdjust();
}
backIcon.addEventListener('click', showProducts);
function showProducts() {
    console.log('showProducts');
    // swiperWrapper.style.position = 'relative';
    swiperWrapper.style.transform = 'translate(0)';
    console.log('slide');
    products.style.transform = 'translate(0, 0)';
    products.style.position = 'relative';
    // main.style.maxHeight = '100vh';
    choosedProducts.style.transform = 'translate(100vw)';
    // choosedProducts.style.position = 'absolute';
    // choosedProducts.style.display = 'none';
    // products.style.display = 'grid';
    // document.querySelector('.swiper').style.display = 'flex';
    backIcon.style.visibility = 'hidden';
    basket.style.transform = 'translate(100vw, -100vw)';
    // h2.textContent = 'procesory';
    h2value.style.transform = 'translateY(0)';
    choosedProductsName.textContent = 'konfigurator';

    main.style.transform = 'translateY(0)';
    // basket.style.position = 'absolute';



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
    header.style.filter = 'blur(8px)';
}
function hideMenu() {
    console.log('kk');
    menu.style.transform = 'translateY(-130vh)';
    header.style.filter = 'blur(0)';
}
close.addEventListener('click', hideMenu);
hamburger.addEventListener('click', showMenu);
window.addEventListener('click', function () {
    console.log(event.target);
});
// var scrollEventHandler = function () {
//     window.scroll(0, window.pageYOffset);
// };

// window.addEventListener("scroll", scrollEventHandler, false);