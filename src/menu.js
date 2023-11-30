const createMenuPage = () => {
    const content = document.querySelector("#content")
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const menuBoard = document.createElement('div');
    pageContent.classList.add('menu-board');

    const menu1 = document.createElement('div');
    menu1.classList.add('menu-item');
    const menu1Image = document.createElement('img');
    menu1Image.classList.add('menu-img');
    menu1Image.src = '/dist/imgs/menu/iguanaOnAStick.png';
    menu1Image.height = '200';
    const menu1Name = document.createElement('div');
    menu1Name.classList.add('menu-name');
    menu1Name.textContent = ('IGUANA ON A STICK');
    const menu1Description = document.createElement('div');
    menu1Description.classList.add('menu-description');
    menu1Description.textContent = ('60 Bottle Caps');


    const menu2 = document.createElement('div');
    menu2.classList.add('menu-item');
    const menu2Image = document.createElement('img');
    menu2Image.classList.add('menu-img');
    menu2Image.src = '/dist/imgs/menu/wastelandOmelette.png';
    menu2Image.height = '200';
    const menu2Name = document.createElement('div');
    menu2Name.classList.add('menu-name');
    menu2Name.textContent = ('WASTELAND OMELETTE');
    const menu2Description = document.createElement('div');
    menu2Description.classList.add('menu-description');
    menu2Description.textContent = ('80 Bottle Caps');

    const menu3 = document.createElement('div');
    menu3.classList.add('menu-item');
    const menu3Image = document.createElement('img');
    menu3Image.classList.add('menu-img');
    menu3Image.src = '/dist/imgs/menu/squirrelOnAStick.png';
    menu3Image.height = '200';
    const menu3Name = document.createElement('div');
    menu3Name.classList.add('menu-name');
    menu3Name.textContent = ('SQUIRREL ON A STICK');
    const menu3Description = document.createElement('div');
    menu3Description.classList.add('menu-description');
    menu3Description.textContent = ('60 Bottle Caps');


    content.appendChild(pageContent);
    pageContent.appendChild(menuBoard);

    menuBoard.appendChild(menu1);
    menu1.appendChild(menu1Image);
    menu1.appendChild(menu1Name);
    menu1.appendChild(menu1Description);

    menuBoard.appendChild(menu2);
    menu2.appendChild(menu2Image);
    menu2.appendChild(menu2Name);
    menu2.appendChild(menu2Description);

    menuBoard.appendChild(menu3);
    menu3.appendChild(menu3Image);
    menu3.appendChild(menu3Name);
    menu3.appendChild(menu3Description);

}

export default createMenuPage;