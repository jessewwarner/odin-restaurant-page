export default function createContactPage(){
    const mainWrapper = document.querySelector('.main-wrapper');
    mainWrapper.textContent = '';

    const contact = {
        name: "Jesse Warner",
        phone: "555-555-3456",
        email: "jessewarner@xyz.com",
        address: "4567 Fancy St, Restaurant City FL, 33933",
    }
    
    for(let key in contact){
        const div = document.createElement('div');
        div.classList.add('contact-info');
        div.textContent = `${key.toUpperCase()}: ${contact[key]}`;
        mainWrapper.appendChild(div);
    }
}