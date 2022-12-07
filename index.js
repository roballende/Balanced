fetch("http://localhost:3000/Foods")
    .then(resp => resp.json())
    .then(foodArray => renderArray(foodArray))
   
//DOM Selector
const foodTitle = document.querySelector(".displayName")
const foodWeight = document.querySelector(".displayWeight")
const foodCalories = document.querySelector(".displayCalorie")
const proteinImage = document.querySelector("#protein-image")
const grainImage = document.querySelector("#grain-image")
const vegetableImage = document.querySelector("#vegetable-image")
//This will show meat, grain, vegetables in table


//Item List
function renderArray(foodArray){
    //Protein Column
    foodArray.forEach(food =>{
        let proteinName = document.createElement("h3")
        proteinName.textContent = food.fields.item_name_meat
        const proteinContainer = document.querySelector(".protein-list")
        proteinContainer.append(proteinName)
        proteinName.addEventListener('click', () => showImage(food))
        proteinName.addEventListener('mouseover', () => showDetails(food))
    })
    //Grain Column
    foodArray.forEach(food =>{
        let grainName = document.createElement("h3")
        grainName.textContent = food.fields.item_name_grain
        const grainContainer = document.querySelector(".grain-list")
        grainContainer.append(grainName)
        grainName.addEventListener('click', () => showImage1(food))
        grainName.addEventListener('mouseover', () => showDetails1(food))
    })
    //Vegetables Column
    foodArray.forEach(food =>{
        let vegetablesName = document.createElement("h3")
        vegetablesName.textContent = food.fields.item_name_vegetables
        const vegetablesContainer = document.querySelector(".vegetables-list")
        vegetablesContainer.append(vegetablesName)
        vegetablesName.addEventListener('click', () => showImage2(food))
        vegetablesName.addEventListener('mouseover', () => showDetails2(food))
    })
}

//Click addEventListener
function showDetails(food){
    foodTitle.textContent = food.fields.item_name_meat
    foodWeight.textContent = food.fields.nf_serving_weight_grams
    foodCalories.textContent = food.fields.nf_calories
}
function showDetails1(food){
    foodTitle.textContent = food.fields.item_name_grain
    foodWeight.textContent = food.fields.nf_serving_weight_grams
    foodCalories.textContent = food.fields.nf_calories
}
function showDetails2(food){
    foodTitle.textContent = food.fields.item_name_vegetables
    foodWeight.textContent = food.fields.nf_serving_weight_grams
    foodCalories.textContent = food.fields.nf_calories
}
//Mouseover addEventListener
function showImage(food){
    proteinImage.src = food.fields.images 
}
function showImage1(food){
    grainImage.src = food.fields.images
}
function showImage2(food){
    vegetableImage.src = food.fields.images
}

//Delete addEventListener