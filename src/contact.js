const createContactPage = () => {
    const content = document.querySelector("#content")
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const contactBoard = document.createElement('div');
    contactBoard.classList.add('contact-board');
    
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact-div');

    const contactIcon = document.createElement('img');
    contactIcon.classList.add('contact-icon');
    contactIcon.src = '/dist/imgs/phoneIcon.png';

    const contactPhone = document.createElement('div');
    contactPhone.classList.add('contact-phone');
    contactPhone.textContent = ('299-9812345');
    


    const contactMap = document.createElement('div');
    contactMap.classList.add('contact-map');
    const map = document.createElement('img');
    map.classList.add('map');
    map.src = '/dist/imgs/location.png';
    map.height = '200';

    content.appendChild(pageContent);
    pageContent.appendChild(contactBoard);
    contactBoard.appendChild(contactDiv);
    contactDiv.appendChild(contactIcon);
    contactDiv.appendChild(contactPhone);
    contactBoard.appendChild(contactMap);
    contactMap.appendChild(map);
    
}

export default createContactPage;