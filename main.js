const burgerMenu = document.querySelector('.burger-menu-icon');
const burgerMenuCloser = document.querySelector('.burger-menu-closer');

burgerMenu.addEventListener('click', (event) => {
    // const blur  = document.getElementById('cover');
    const header = document.querySelector('.header');

    const blur = document.createElement('div')

    blur.setAttribute('id', 'cover');
    blur.classList.add('page-cover');
    header.classList.add('header-burger-menu');

    burgerMenu.classList.add('burger-menu-opened');
    burgerMenu.classList.remove('burger-menu-closed');

    burgerMenuCloser.classList.add('burger-menu-closed');
    burgerMenuCloser.classList.remove('burger-menu-opened');

    document.body.insertBefore(blur, document.body.lastChild);
})

burgerMenuCloser.addEventListener('click', (event) => {
    const blur  = document.getElementById('cover');
    const header = document.querySelector('.header');

    blur.remove()
    header.classList.remove('header-burger-menu');

    burgerMenu.classList.add('burger-menu-closed');
    burgerMenu.classList.remove('burger-menu-opened');


    burgerMenuCloser.classList.add('burger-menu-opened');
    burgerMenuCloser.classList.remove('burger-menu-closed');
})

