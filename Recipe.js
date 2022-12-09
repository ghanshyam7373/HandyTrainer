// Recipe js
const recipeCard = (imgUrl, RecipeLabel, dietLabel, Ingredients, Calories, Energy, Fat, Carbs, Fiber, Sugars, Protein) => {
    let divCard = document.createElement('div');
    divCard.classList.add('Card');
    let divCardBody = document.createElement('div');
    divCardBody.classList.add('Card-body');
    let divCardHead = document.createElement('div');
    divCardHead.classList.add('Card-head');
    let imageUrl = document.createElement('img');
    imageUrl.setAttribute('src', imgUrl);
    imageUrl.classList.add('Card-img-top');
    let divRecipeHead = document.createElement('div');
    divRecipeHead.classList.add('Recipehead');

    let h2 = document.createElement('h2');
    h2.setAttribute('id', 'RecipeLabel');
    h2.textContent = RecipeLabel;
    let dietLabelpara = document.createElement('p');
    dietLabelpara.setAttribute('id', 'dietLabel');
    if (dietLabel) {
        dietLabelpara.textContent = `(` + dietLabel + `)`;
    }
    else {
        dietLabelpara.textContent = dietLabel;
    }
    let p1 = document.createElement('p');
    p1.className = "card-text mb-auto";
    let span1 = document.createElement('span');
    span1.classList.add('DataSpan');
    span1.setAttribute('id', 'Ingredients');
    span1.textContent = Ingredients;
    p1.textContent = `Ingredients: `;
    p1.appendChild(span1);
    divRecipeHead.appendChild(h2);
    divRecipeHead.appendChild(dietLabelpara);
    divRecipeHead.appendChild(p1);
    divCardHead.appendChild(imageUrl);
    divCardHead.appendChild(divRecipeHead);

    let p2 = document.createElement('p');
    p2.className = "card-text mb-auto";
    let span2 = document.createElement('span');
    span2.classList.add('DataSpan');
    span2.setAttribute('id', 'Calories');
    span2.textContent = Calories;
    p2.textContent = `Calories: `;
    p2.appendChild(span2);

    let p3 = document.createElement('p');
    p3.className = "card-text mb-auto";
    let span3 = document.createElement('span');
    span3.classList.add('DataSpan');
    span3.setAttribute('id', 'Energy');
    span3.textContent = Energy;
    p3.textContent = `Energy: `;
    p3.appendChild(span3);

    let p4 = document.createElement('p');
    p4.className = "card-text mb-auto";
    let span4 = document.createElement('span');
    span4.classList.add('DataSpan');
    span4.setAttribute('id', 'Fat');
    span4.textContent = Fat;
    p4.textContent = `Fat: `;
    p4.appendChild(span4);

    let p5 = document.createElement('p');
    p5.className = "card-text mb-auto";
    let span5 = document.createElement('span');
    span5.classList.add('DataSpan');
    span5.setAttribute('id', 'Carbs');
    span5.textContent = Carbs;
    p5.textContent = `Carbs: `;
    p5.appendChild(span5);

    let p6 = document.createElement('p');
    p6.className = "card-text mb-auto";
    let span6 = document.createElement('span');
    span6.classList.add('DataSpan');
    span6.setAttribute('id', 'Fiber');
    span6.textContent = Fiber;
    p6.textContent = `Fiber: `;
    p6.appendChild(span6);

    let p7 = document.createElement('p');
    p7.className = "card-text mb-auto";
    let span7 = document.createElement('span');
    span7.classList.add('DataSpan');
    span7.setAttribute('id', 'Sugars');
    span7.textContent = Sugars;
    p7.textContent = `Sugars: `;
    p7.appendChild(span7);

    let p8 = document.createElement('p');
    p8.className = "card-text mb-auto";
    let span8 = document.createElement('span');
    span8.classList.add('DataSpan');
    span8.setAttribute('id', 'Protein');
    span8.textContent = Protein;
    p8.textContent = `Protein: `;
    p8.appendChild(span8);

    divCardBody.appendChild(p2);
    divCardBody.appendChild(p3);
    divCardBody.appendChild(p4);
    divCardBody.appendChild(p5);
    divCardBody.appendChild(p6);
    divCardBody.appendChild(p7);
    divCardBody.appendChild(p8);
    divCard.appendChild(divCardHead);
    divCard.appendChild(divCardBody);
    divCard.setAttribute('data-aos','zoom-in')

    return divCard;
}

const DataNot = () =>{
    let DataDiv = document.createElement('div');
    DataDiv.classList.add('DataNotDiv');
    let h3 = document.createElement('h3');
    h3.setAttribute('id','DataNot');
    h3.textContent = "Data Not Found. Check you input!";
    DataDiv.appendChild(h3);

    return DataDiv;
}

const getDietRecipe = (item1, item2) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '12fd4790e1mshdd9e9bed5f94427p130f9djsn259398c99e21',
            'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
        }
    };
    if (item1 !== "" && item2 !== "") {
        fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=` + item1 + `&r=` + item2, options)
            .then(response => response.json())
            .then(response => {
                document.getElementById('recipeCards').innerHTML = "";
                for (let i = 0; i < 10; i++) {
                    let hits = response.hits[i].recipe;
                    let ing = "";
                    for (let j = 0; j < hits.ingredientLines.length; j++) {
                        if(ing !== "")
                            ing = ing + ', ' + hits.ingredientLines[j];
                        else
                            ing = hits.ingredientLines[j];
                    }
                    if (hits.dietLabels[0]) {
                        document.getElementById('recipeCards').appendChild(recipeCard(hits.image, hits.label, hits.dietLabels[0], ing, hits.calories.toFixed(2), hits.totalNutrients.ENERC_KCAL.quantity.toFixed(2), hits.totalNutrients.FAT.quantity.toFixed(2), hits.totalNutrients.CHOCDF.quantity.toFixed(2), hits.totalNutrients.FIBTG.quantity.toFixed(2), hits.totalNutrients.SUGAR.quantity.toFixed(2), hits.totalNutrients.PROCNT.quantity.toFixed(2)));

                        
                        document.getElementById('recipeCards').appendChild(document.createElement('hr'));
                    }
                    else {
                        document.getElementById('recipeCards').appendChild(recipeCard(hits.image, hits.label, hits.dietLabels[0], ing, hits.calories.toFixed(2), hits.totalNutrients.ENERC_KCAL.quantity.toFixed(2), hits.totalNutrients.FAT.quantity.toFixed(2), hits.totalNutrients.CHOCDF.quantity.toFixed(2), hits.totalNutrients.FIBTG.quantity.toFixed(2), hits.totalNutrients.SUGAR.quantity.toFixed(2), hits.totalNutrients.PROCNT.quantity.toFixed(2)));
                        document.getElementById('recipeCards').appendChild(document.createElement('hr'));
                    }
                }
            })
            .catch(err => {
                document.getElementById('recipeCards').append(DataNot());
            });
    }
    if (item1 !== "" && item2 === "") {
        fetch(`https://edamam-recipe-search.p.rapidapi.com/search?q=` + item1, options)
            .then(response => response.json())
            .then(response => {
                document.getElementById('recipeCards').innerHTML = "";
                for (let i = 0; i < 10; i++) {
                    let hits = response.hits[i].recipe;
                    let ing = "";
                    for (let j = 0; j < hits.ingredientLines.length; j++) {
                        if(ing !== "")
                            ing = ing + ', ' + hits.ingredientLines[j];
                        else
                            ing = hits.ingredientLines[j];
                    }
                    if (hits.dietLabels[0]) {
                        document.getElementById('recipeCards').appendChild(recipeCard(hits.image, hits.label, hits.dietLabels[0], ing, hits.calories.toFixed(2), hits.totalNutrients.ENERC_KCAL.quantity.toFixed(2), hits.totalNutrients.FAT.quantity.toFixed(2), hits.totalNutrients.CHOCDF.quantity.toFixed(2), hits.totalNutrients.FIBTG.quantity.toFixed(2), hits.totalNutrients.SUGAR.quantity.toFixed(2), hits.totalNutrients.PROCNT.quantity.toFixed(2)));
                        document.getElementById('recipeCards').appendChild(document.createElement('hr'));
                    }
                    else {
                        document.getElementById('recipeCards').appendChild(recipeCard(hits.image, hits.label, hits.dietLabels[0], ing, hits.calories.toFixed(2), hits.totalNutrients.ENERC_KCAL.quantity.toFixed(2), hits.totalNutrients.FAT.quantity.toFixed(2), hits.totalNutrients.CHOCDF.quantity.toFixed(2), hits.totalNutrients.FIBTG.quantity.toFixed(2), hits.totalNutrients.SUGAR.quantity.toFixed(2), hits.totalNutrients.PROCNT.quantity.toFixed(2)));
                        document.getElementById('recipeCards').appendChild(document.createElement('hr'));
                    }
                }
            })
            .catch(err => {
                document.getElementById('recipeCards').innerHTML = "";
                document.getElementById('recipeCards').append(DataNot());
            });
    }
}

document.getElementById('RecipeGen').addEventListener('click', () => {
    let item1 = document.getElementById('itemRecipe1').value;
    let item2 = document.getElementById('itemRecipe2').value;
    getDietRecipe(item1, item2);
})