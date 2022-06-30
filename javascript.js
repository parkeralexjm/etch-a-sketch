const container = document.querySelector('#container');

for (let i = 1; i <= 16; i++) {
    const div = document.createElement('div');
    div.id = i;
    div.className = 'pixel';
    
    container.appendChild(div);
}

const target = document.querySelectorAll('.pixel');

    for (var i = 0; i < target.length; i++ ) {
        target[i].addEventListener('mouseover', function() {
            this.className = 'black';
        })
    }