const burgerMenu = document.querySelector('.burger-menu-icon');
const burgerMenuCloser = document.querySelector('.burger-menu-closer');

const model = {
    list: [
        {id: Date.now(), content: 'Home', link: '#home'},
        {id: Date.now(), content: 'Episodes', link: '#episodes'},
        {id: Date.now(), content: 'About', link: '#about'},
        {id: Date.now(), content: 'Contact', link: '#contact'},
    ]
}

burgerMenu.addEventListener('click', (event) => {
    const header = document.querySelector('.header');

    const blur = document.createElement('div')
    const listContainer = document.createElement('div');
    listContainer.classList.add('list-container');
    const list = createList()

    listContainer.append(list)



    blur.setAttribute('id', 'cover');
    blur.classList.add('page-cover');
    header.classList.add('header-burger-menu');

    burgerMenu.classList.add('burger-menu-opened');
    burgerMenu.classList.remove('burger-menu-closed');

    burgerMenuCloser.classList.add('burger-menu-closed');
    burgerMenuCloser.classList.remove('burger-menu-opened');

    document.body.insertBefore(blur, document.body.lastChild);
    document.body.insertBefore(listContainer, document.body.lastChild);
})

burgerMenuCloser.addEventListener('click', (event) => {
    const blur  = document.getElementById('cover');
    const header = document.querySelector('.header');
    const burgerList = document.querySelector('.list-container');

    burgerList.remove()
    blur.remove()
    header.classList.remove('header-burger-menu');

    burgerMenu.classList.add('burger-menu-closed');
    burgerMenu.classList.remove('burger-menu-opened');


    burgerMenuCloser.classList.add('burger-menu-opened');
    burgerMenuCloser.classList.remove('burger-menu-closed');
})

function createList() {
    const list = document.createElement('ul');
    list.classList.add('burger-menu-list');

    model.list.forEach((item) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = item.content;
        link.setAttribute('href', item.link);

        listItem.append(link);
        list.append(listItem);
    })

    list.addEventListener('click', (event) => {
        const blur  = document.getElementById('cover');
        const header = document.querySelector('.header');
        const burgerList = document.querySelector('.list-container');

        burgerList.remove()
        blur.remove()
        header.classList.remove('header-burger-menu');

        // потом создать MVC структуру и вынести эту функцию
        burgerMenu.classList.add('burger-menu-closed');
        burgerMenu.classList.remove('burger-menu-opened');

        burgerMenuCloser.classList.add('burger-menu-opened');
        burgerMenuCloser.classList.remove('burger-menu-closed');
    })

    return list;
}