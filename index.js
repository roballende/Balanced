fetch("http://localhost:3000/Foods")
    .then(resp => resp.json())
    .then(foodArray => {
        renderArray(foodArray)
        showImage(foodArray[0])
        showImage(foodArray[5])
        showImage(foodArray[10])
    })

//DOM Selector
const foodTitle = document.querySelector(".displayName")
const foodWeight = document.querySelector(".displayWeight")
const foodCalories = document.querySelector(".displayCalorie")
const proteinImage = document.querySelector("#protein-image")
const grainImage = document.querySelector("#grain-image")
const vegetableImage = document.querySelector("#vegetable-image")
const proteinCalorieCount = document.querySelector("#protein-form")
const grainCalorieCount = document.querySelector("#grain-form")
const vegetablesCalorieCount = document.querySelector("#vegetable-form")
const totalCalorie = document.querySelector("#calorie-holder")
let form = document.querySelector("#dropdown-form")
let mealCalorie = []


    
// Item List
function renderArray(foodArray){
    //Food Column
    foodArray.forEach(food =>{
        if (food.fields.foodtype == "meat"){
            let proteinName = document.createElement("h3")
            proteinName.textContent = food.fields.item_name
            const proteinContainer = document.querySelector(".protein-list")
            proteinContainer.append(proteinName)
            proteinName.addEventListener('click', () => showImage(food))
            proteinName.addEventListener('mouseover', () => showDetails(food))
        }
        else if (food.fields.foodtype == "grain"){
            let grainName = document.createElement("h3")
            grainName.textContent = food.fields.item_name
            const grainContainer = document.querySelector(".grain-list")
            grainContainer.append(grainName)
            grainName.addEventListener('click', () => showImage(food))
            grainName.addEventListener('mouseover', () => showDetails(food))
        }
        else if (food.fields.foodtype == "vegetables"){
            let vegetablesName = document.createElement("h3")
            vegetablesName.textContent = food.fields.item_name
            const vegetablesContainer = document.querySelector(".vegetables-list")
            vegetablesContainer.append(vegetablesName)
            vegetablesName.addEventListener('click', () => showImage(food))
            vegetablesName.addEventListener('mouseover', () => showDetails(food))
        }
    })
}


// Click addEventListener
function showImage(food){
    if (food.fields.foodtype == "meat"){
        proteinImage.src = food.fields.images
        proteinCalorieCount.textContent = food.fields.nf_calories
    }
    else if (food.fields.foodtype == "grain"){
        grainImage.src = food.fields.images 
        grainCalorieCount.textContent = food.fields.nf_calories
    }
    else if (food.fields.foodtype == "vegetables"){
        vegetableImage.src = food.fields.images 
        vegetablesCalorieCount.textContent = food.fields.nf_calories
    }
}


//Mouseover addEventListener
function showDetails(food){
    if (food.fields.foodtype == "meat"){
        foodTitle.textContent = food.fields.item_name
        foodWeight.textContent = food.fields.nf_serving_weight_grams
        foodCalories.textContent = food.fields.nf_calories
    }
    else if (food.fields.foodtype == "grain"){
        foodTitle.textContent = food.fields.item_name
        foodWeight.textContent = food.fields.nf_serving_weight_grams
        foodCalories.textContent = food.fields.nf_calories
    }
    else if (food.fields.foodtype == "vegetables"){
        foodTitle.textContent = food.fields.item_name
        foodWeight.textContent = food.fields.nf_serving_weight_grams
        foodCalories.textContent = food.fields.nf_calories
    }
}


//Total Up 3 kind of food
form.addEventListener('submit', calorieCalculator)
function calorieCalculator(e) {
    e.preventDefault()

    if (e.target.servingsize.value == "Snack"){
        mealCalorie = parseInt(proteinCalorieCount.textContent) + parseInt(grainCalorieCount.textContent) + parseInt(vegetablesCalorieCount.textContent)
    }
    else if (e.target.servingsize.value == "Meal"){
        mealCalorie = ((parseInt(proteinCalorieCount.textContent) + parseInt(grainCalorieCount.textContent) + parseInt(vegetablesCalorieCount.textContent))*2)
    }
    else if (e.target.servingsize.value == "Feast"){
        mealCalorie = ((parseInt(proteinCalorieCount.textContent) + parseInt(grainCalorieCount.textContent) + parseInt(vegetablesCalorieCount.textContent))*3)
    }

    totalCalorie.textContent = mealCalorie
}

//Add New Food ***broken due to nested fields object within food object?***
// possible fix: change database formatting

// const foodForm = document.querySelector('#new-food')
// foodForm.addEventListener('submit', renderNewFood)
// function renderNewFood(e) {
//     e.preventDefault()
//     const newName = document.querySelector('#new-food-name').value
//     const newCalories = document.querySelector('#new-food-calories').value
//     const newImage = document.querySelector('#new-food-image').value
//     const newWeight = document.querySelector('#new-food-weight').value
//     const newFoodType = document.querySelector('#food-type').value
//     fetch('http://localhost:3000/Foods', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//                 item_name: newName,
//                 nf_calories: newCalories,
//                 nf_serving_weight_grams: newWeight,
//                 foodtype: newFoodType,
//                 images: newImage
//         })
//     })
//     .then(resp => resp.json())
//     .then(newFoodType => renderArray([newFoodType]))
//     e.target.reset()
// }


// // Item List
// function renderArray(foodArray){
//     //Protein Column
//     foodArray.forEach(food =>{
//         let proteinName = document.createElement("h3")
//         proteinName.textContent = food.fields.item_name_meat
//         const proteinContainer = document.querySelector(".protein-list")
//         proteinContainer.append(proteinName)
//         proteinName.addEventListener('click', () => showImage(food))
//         proteinName.addEventListener('mouseover', () => showDetails(food))
        
//     })
//     //Grain Column
//     foodArray.forEach(food =>{
//         let grainName = document.createElement("h3")
//         grainName.textContent = food.fields.item_name_grain
//         const grainContainer = document.querySelector(".grain-list")
//         grainContainer.append(grainName)
//         grainName.addEventListener('click', () => showImage1(food))
//         grainName.addEventListener('mouseover', () => showDetails1(food))
//     })
//     //Vegetables Column
//     foodArray.forEach(food =>{
//         let vegetablesName = document.createElement("h3")
//         vegetablesName.textContent = food.fields.item_name_vegetables
//         const vegetablesContainer = document.querySelector(".vegetables-list")
//         vegetablesContainer.append(vegetablesName)
//         vegetablesName.addEventListener('click', () => showImage2(food))
//         vegetablesName.addEventListener('mouseover', () => showDetails2(food))
//     })
// }


// // Click addEventListener
// function showImage(food){
//     proteinImage.src = food.fields.images
//     proteinCalorieCount.textContent = food.fields.nf_calories
// }
// function showImage1(food){
//     grainImage.src = food.fields.images 
//     grainCalorieCount.textContent = food.fields.nf_calories
// }
// function showImage2(food){
//     vegetableImage.src = food.fields.images 
//     vegetablesCalorieCount.textContent = food.fields.nf_calories
// }


// //Mouseover addEventListener
// function showDetails(food){
//     foodTitle.textContent = food.fields.item_name_meat
//     foodWeight.textContent = food.fields.nf_serving_weight_grams
//     foodCalories.textContent = food.fields.nf_calories
// }
// function showDetails1(food){
//     foodTitle.textContent = food.fields.item_name_grain
//     foodWeight.textContent = food.fields.nf_serving_weight_grams
//     foodCalories.textContent = food.fields.nf_calories
// }
// function showDetails2(food){
//     foodTitle.textContent = food.fields.item_name_vegetables
//     foodWeight.textContent = food.fields.nf_serving_weight_grams
//     foodCalories.textContent = food.fields.nf_calories
// }


// //Total Up 3 kind of food
// form.addEventListener('submit', calorieCalculator)
// function calorieCalculator(e) {
//     e.preventDefault()

//     if (e.target.servingsize.value == "Snack"){
//     mealCalorie = parseInt(proteinCalorieCount.textContent) + parseInt(grainCalorieCount.textContent) + parseInt(vegetablesCalorieCount.textContent)
//     }
//     else if (e.target.servingsize.value == "Meal"){
//     mealCalorie = ((parseInt(proteinCalorieCount.textContent) + parseInt(grainCalorieCount.textContent) + parseInt(vegetablesCalorieCount.textContent))*2)
//     }
//     else if (e.target.servingsize.value == "Feast"){
//     mealCalorie = ((parseInt(proteinCalorieCount.textContent) + parseInt(grainCalorieCount.textContent) + parseInt(vegetablesCalorieCount.textContent))*3)
//     }
//     totalCalorie.textContent(mealCalorie)
    
// }