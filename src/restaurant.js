const createRestaurantHomePage = () => {
    const content = document.querySelector("#content")
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const about = document.createElement('div');
    about.classList.add('about');

    const image = document.createElement('img');
    image.classList.add('home-image');
    image.src = './imgs/VaultBoy.png';

    const titleAbout = document.createElement('div');
    titleAbout.classList.add('titleAbout');
    titleAbout.textContent = 'WELCOME TO THE WASTELAND!';

    const contentAbout = document.createElement('div');
    contentAbout.classList.add('contentAbout');
    contentAbout.textContent = 'We know how hard is to fight for your food out there. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex repellendus enim quam temporibus velit nulla sed commodi illo dicta sapiente! Cum porro cumque aut at. Deserunt error nam vero facilis.';
    

    pageContent.appendChild(about);
    about.appendChild(image);
    about.appendChild(titleAbout);
    about.appendChild(contentAbout);
    content.appendChild(pageContent);
    
}

export default createRestaurantHomePage;