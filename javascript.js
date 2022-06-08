const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    const div = document.createElement('div');
    div.id = i;
    div.className = 'pixel';
    container.appendChild(div);
}

const pixels = document.getElementsByClassName('pixel')
pixels.onmouseover = function(){mouseOver()};

function mouseOver() {
    pixels.style.color = 'black';
}