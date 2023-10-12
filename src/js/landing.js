function createHeader(){
    const header = document.createElement('header');

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = "Fancy Steakhouse";

    const home = document.createElement('div');
    home.classList.add('tab', 'home');
    home.textContent = 'Home';

    const menu = document.createElement('div');
    menu.classList.add('tab', 'menu');
    menu.textContent = 'Menu';

    const contact = document.createElement('div');
    contact.classList.add('tab', 'contact');
    contact.textContent = 'Contact';

    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);

    header.appendChild(title);
    header.appendChild(tabs);

    return header;
}

function createFooter(){
    const footer = document.createElement('footer');
    const copyright = document.createElement('div');
    copyright.classList.add('copyright');
    copyright.textContent = 'Copyright \u00A9 Jesse Warner 2023';
    footer.appendChild(copyright)
    return footer;
}

function createContent(){
    const content = document.createElement('div');
    content.id = 'content';
    return content;
}

export function createLandingPage(){
    document.body.appendChild(createHeader());
    document.body.appendChild(createContent());
    document.body.appendChild(createFooter());
}