
const model = {
    burgerMenu: document.querySelector('.burger-menu-icon'),
    burgerMenuCloser: document.querySelector('.burger-menu-closer'),
    listWrapper: document.querySelector('.page-cover'),
    list: document.querySelector('.header-menu'),

    menuOpen() {
        const blur = document.querySelector('#cover');
        blur.classList.add('page-cover-open');

        this.burgerMenu.classList.add('burger-menu-opened');
        this.burgerMenu.classList.remove('burger-menu-closed');

        this.burgerMenuCloser.classList.add('burger-menu-closed');
        this.burgerMenuCloser.classList.remove('burger-menu-opened');
    },

    menuClose() {
        const blur = document.querySelector('#cover');
        blur.classList.remove('page-cover-open');

        this.burgerMenu.classList.add('burger-menu-closed');
        this.burgerMenu.classList.remove('burger-menu-opened');

        this.burgerMenuCloser.classList.add('burger-menu-opened');
        this.burgerMenuCloser.classList.remove('burger-menu-closed');
    },
}

const view = {
    init() {
        this.render()

        const header = document.querySelector('.header');
        const menuList = document.querySelector('.page-cover ul');
        let menuOpened = false;

        header.addEventListener('click', (event) => {
            if (event.target.classList.contains('burger-menu-icon')) {
                controller.menuOpen()
                menuOpened = true;
            } else if (event.target.classList.contains('burger-menu-closer')) {
                controller.menuClose()
            }
        })

        menuList.addEventListener('click', (event) => {
            if (event.target.classList.contains('header-menu-item')) {
                controller.menuClose()
            }
        })
    },

    render() {
        const navbar = document.querySelector('.header-navigation');
        const blur = document.createElement('div');
        blur.setAttribute('id', 'cover');
        blur.classList.add('page-cover');

        blur.innerHTML = navbar.innerHTML;

        document.body.insertBefore(blur, document.body.lastChild);
    },
}

const controller = {
    menuOpen() {
        model.menuOpen()
    },

    menuClose() {
        model.menuClose()
    },
}

view.init()




