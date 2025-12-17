if (document.body.offsetWidth < 1140) {
    const model = {
        burgerMenu: document.querySelector('.burger-menu-icon'),
        burgerMenuCloser: document.querySelector('.burger-menu-closer'),
        listWrapper: document.querySelector('.header-navigation'),
        list: document.querySelector('.header-menu'),

        menuOpen() {
            const blur = document.querySelector('#cover');
            blur.classList.add('page-cover-open');

            this.burgerMenu.classList.add('burger-menu-opened');
            this.burgerMenu.classList.remove('burger-menu-closed');

            this.burgerMenuCloser.classList.add('burger-menu-closed');
            this.burgerMenuCloser.classList.remove('burger-menu-opened');

            this.listWrapper.classList.add('list-container');
        },

        menuClose() {
            const blur = document.querySelector('#cover');
            blur.classList.remove('page-cover-open');

            this.burgerMenu.classList.add('burger-menu-closed');
            this.burgerMenu.classList.remove('burger-menu-opened');

            this.burgerMenuCloser.classList.add('burger-menu-opened');
            this.burgerMenuCloser.classList.remove('burger-menu-closed');

            this.listWrapper.classList.remove('list-container');
        },
    }

    const view = {
        init() {
            const header = document.querySelector('.header');
            const menuList = document.querySelector('.header-menu');
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
                if (event.target.classList.contains('header-menu-item') && menuOpened === true) {
                    controller.menuClose()
                }
            })

            this.render()
        },

        render() {
            const blur = model.listWrapper;
            blur.setAttribute('id', 'cover');
            blur.classList.add('page-cover');

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

}



