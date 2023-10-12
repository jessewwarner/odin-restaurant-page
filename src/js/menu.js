export default function createMenuPage(){
    const mainWrapper = document.querySelector('.main-wrapper');
    mainWrapper.textContent = '';

    const recipes = document.createElement('div');
    recipes.classList.add('recipes');

    for (let i = 0; i < 4; i++){
        const recipe = document.createElement('div');
        recipe.classList.add('recipe');
        recipe.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, tenetur.'
        recipes.appendChild(recipe);
    }

    mainWrapper.appendChild(recipes);
}