// global variables
const container = document.querySelector('#container');

// initial settings for the size of the grid


// New screen function taking parameter for the size of the grid
function newScreen() {
    // Prompt the user for the size of the new grid
    var size = window.prompt("How many pixels would you like your Etch-A-Sketch to have on the side? (max 100)");
    // Calculate the size of the width of each row
    if (size > 100) {
        alert("Etch-A-Sketch must be below 100 pixels wide");
        return;
    }
    
    if (size == null){
        size = 16;
    } 
    var pixelSize = 50/size + "rem";
    // Create an array
    let pixelArray = [];
    // Reset the container
    container.innerHTML = "";
    // Assign the container to a variable
    const mainContainerDiv = document.getElementById("container");
    // Iterate through until you reach the input size
    for (let i = 1; i <= size; i++) {
        // For each div created loop through and make the input number of pixels
        pixelArray[i] = document.createElement('div');
        // Add the new div to the DOM
        mainContainerDiv.appendChild(pixelArray[i]);
        // Iterate for each pixel for the row
        for (var j = 1; j <= size; j++){
            // Create a new div
            const newDiv = document.createElement("div");
            // Create a class attribute
            const classAttribute = document.createAttribute("class");
            // Set the value of the class
            classAttribute.value = "pixel";
            // Add the class to the div
            newDiv.setAttributeNode(classAttribute);
            // Create a style for the width
            const widthHeightAttribute = document.createAttribute("style");
            // Assign the value to the style attribute
            widthHeightAttribute.value = `width: ${pixelSize}; height: ${pixelSize};`;
            // Add the style to the div
            newDiv.setAttributeNode(widthHeightAttribute);
            // Add the new element with the text content to the DOM
            pixelArray[i].appendChild(newDiv);
        
        }
        // div.id = i;
        // div.className = 'pixel';
        // container.appendChild(div);
    }
    // target = document.querySelectorAll('.pixel');

    // Checks mouseover to change pixel to black
var target = document.querySelectorAll('.pixel');
    for (var i = 0; i <= target.length; i++ ) {
        target[i].addEventListener('mouseover', function() {
            this.className = 'black';
        })
    }
}