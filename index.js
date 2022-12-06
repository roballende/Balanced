fetch("http://localhost:3000/Foods")
    .then(resp => resp.json())
    .then(foodArray => {renderArray(foodArray)})
    
//DOM Selector


//This will show meat, grain, vegetables in table


//Functions

