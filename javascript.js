const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    const div = document.createElement('div');
    div.id = i;
    div.className = 'pixel';
    container.appendChild(div);
}

var target = document.querySelectorAll('.pixel');

    for (var i = 0; i < target.length; i++ ) {
        target[i].addEventListener('mouseover', function() {
            this.className = 'black';
        })
    }
function newScreen() {
    var size = window.prompt("What size would you like your Etch-A-Sketch to be?");
    container.innerHTML = "";
    for (let i = 1; i <= size; i++) {
        const div = document.createElement('div');
        div.id = i;
        div.className = 'pixel';
        container.appendChild(div);
    }
    target = document.querySelectorAll('.pixel');

    for (var i = 0; i < target.length; i++ ) {
        target[i].addEventListener('mouseover', function() {
            this.className = 'black';
        })
    }
}