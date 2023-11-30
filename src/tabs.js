import createRestaurantHomePage from "./restaurant";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const createTabs = () => {
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    header.classList.add('header');
    const nav = document.createElement('nav');
    nav.classList.add('navbtns');

    const image = document.createElement('img');
    image.classList.add('nav-logo');
    image.src = '/dist/imgs/Fallout_logo.svg.png';
    image.height = '100';

    //create three divs
    const div1 = document.createElement('button');
    const div2 = document.createElement('button');
    const div3 = document.createElement('button');

    //set ids for the divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');

    //set classe for the divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //set text content for the tabs
    div1.textContent = 'Home';
    div2.textContent = 'Menu';
    div3.textContent = 'Contact';

    header.appendChild(image);
    header.appendChild(nav);

    //Append the divs to the content div
    nav.appendChild(div1);
    nav.appendChild(div2);
    nav.appendChild(div3);

    content.appendChild(header);

    //creat event listeners for each tab
    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    })

    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })

    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    })
} 

function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if (pageContent) {
        content.removeChild(pageContent);
    }
}

export default createTabs;