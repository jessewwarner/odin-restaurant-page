export default function createHomePage(){
    const mainWrapper = document.querySelector('.main-wrapper');
    mainWrapper.textContent = '';

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-content');
    homeDiv.textContent = "Indulge in an exquisite culinary experience at Fancy Restaurant. Our chefs are dedicated to crafting mouthwatering dishes that blend flavors to perfection. From the freshest ingredients to the finest presentation, every detail is carefully considered. Join us for a gastronomic journey that promises to delight your taste buds and leave you with a memorable dining experience. Welcome to a world where good food meets great moments."
    mainWrapper.appendChild(homeDiv);

    console.log("Stuff")
}