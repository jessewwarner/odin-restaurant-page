import '/src/css/style.css'
import createLandingPage from './landing';
import createHomePage from './home';
import createContactPage from './contact';

createLandingPage();
createHomePage();

const tabs = document.querySelectorAll('.tab');
const home = document.querySelector('.home');
const menu = document.querySelector('.menu');
const contact = document.querySelector('.contact');

home.onclick = function(){
    createHomePage();
    tabs.forEach(element => {
        element.classList.remove('selected');
    });
    home.classList.add('selected');
};
//menu.onclick = createMenuPage;
contact.onclick = function(){
    createContactPage();
    tabs.forEach(element => {
        element.classList.remove('selected');
    });
    contact.classList.add('selected');
};
