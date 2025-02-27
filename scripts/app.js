//Get input
const numberInput = document.querySelector("#numberInput");

//Adding event listener
numberInput.addEventListener("input", function(){
    let numValue = Number(numberInput.value);

    if(numValue <= -10 || numValue >= 10){
        alert("The number should be between -10 to 10");
    }
});

//Object creation (fruit)
const fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
};

//Get elements for fruit properties 
document.querySelector("#fruitName").innerHTML = `Name: ${fruit.name}`;
document.querySelector("#fruitColor").innerHTML = `Name: ${fruit.color}`;
document.querySelector("#fruitTaste").innerHTML = `Name: ${fruit.taste}`;