// GLOBAL letIABLES


let recipes = [
    [
        'garlic_noodles',
        'Easy Garlic Noodles',
        'garlic noodles pasta fideos asian homemade joshua',
    ],
    [
        'cheese_potato',
        'Cheese Potato Bread',
        'cheese potato bread baked oven pan papa',
    ],
    [
        'pan_de_bono',
        'Pan de bono',
        'pan de bono colombia bread baked oven'
    ],
    [
        'orange_chicken',
        'Orange Chicken',
        'orange chicken pollo joshua asian'
    ],
]



window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    var search = urlParams.get('search');
    console.log("Search: " + search);

    if(search == null) {
        search = "";
    }

    let input = document.getElementById("search");
    

    getRecipes(search);
    input.value = search;

    input.addEventListener('input', function(evt) {
        getRecipes(input.value);
    });
    
    
}

function getRecipes(value) {
    

    console.log(value);

    let recDiv = document.getElementById('recipeList');

    //Remove all results first
    while(recDiv.hasChildNodes()) {
        recDiv.removeChild(recDiv.firstChild);
    }

    //Filter out by value
    let filterRecipes = [];

    if(value == "") {
        
        filterRecipes = recipes;
    }
    else {
        for (let recipe of recipes) {
            if(recipe[2].match(value)) {
                filterRecipes.push(recipe);
            }
        }
    }

    //console.log(filterRecipes);

    //Then start adding search results
    for (let recipe of filterRecipes) {
        let link = document.createElement('a');
        let page = './pages/' + recipe[0] + '.html';
        link.setAttribute('href', page);

        let firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'col-lg-3 col-md-4 col-sm-6 col-12 tile');
        
        let image = document.createElement('img');
        let source = './img/' + recipe[0] + '.jpg';
        image.src = source;
        image.setAttribute('style', 'width: 700px; object-fit: cover;');
        
        let secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'centered');

        let par = document.createElement('p');
        par.setAttribute('class', 'text-center tile-text');
        par.innerHTML = recipe[1];
        
        secondDiv.appendChild(par);
        firstDiv.appendChild(image);
        firstDiv.appendChild(secondDiv);
        link.appendChild(firstDiv);
        recDiv.appendChild(link);
    }
}

