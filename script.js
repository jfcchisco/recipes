const cardTemplate = document.querySelector("[data-card-template]");
const cardContainer = document.querySelector("[data-cards-container]");
const searchInput = document.querySelector("[data-search]");

let recipes = []

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    console.log(value);
    recipes.forEach(recipe => {
        console.log(recipe.title.toLowerCase());    
        const isVisible = recipe.title.toLowerCase().includes(value);
        recipe.element.classList.toggle("hide", !isVisible);
    })
})


fetch("./recipes.json")
    .then(res => res.json())
    .then(data => {
        data.sort((a, b) => a.title.localeCompare(b.title))
        recipes = data.map(recipe => {

            const cardLink = cardTemplate.content.cloneNode(true).children[0];
            const card = cardLink.querySelector("[data-card]");
            const title = cardLink.querySelector("[data-title]");
            title.textContent = recipe.title;
            //console.log(card);
            const backImage = "background-image: url(" + recipe.image + ");"
            card.setAttribute('style', backImage);
            cardLink.href = recipe.url;
            cardContainer.append(cardLink);
            return { title: recipe.title, url: recipe.url, element: cardLink }
        })
    })