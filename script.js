let color = 'black';


function populateBoard(size){
    const sketch = document.querySelector('.sketch');
    sketch.style.gridTemplateColumns = `repeat(${size},1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size},1fr)`;
    let squares = document.querySelectorAll('div');
    squares.forEach((div => div.style.backgroundColor = 'white'));

   let amount = size * size;
    for(let i =0;i<amount;i++){
        const square = document.createElement('div');
        square.addEventListener('mouseover',colorSquare)
        sketch.insertAdjacentElement('beforeend',square);
        square.style.backgroundColor = 'white';
    }
}
populateBoard(16);

function changeSize(input){
    if(input >=2 && input <=100){
        document.querySelector('.error').style.display = 'none';
        populateBoard(input);
    }
    else{
        document.querySelector('.error').style.display = 'flex';
    }
}

function colorSquare(){
if(color === 'random'){
    this.style.backgroundColor = `hsl(${Math.random() *300}, 100%,50%)`;
}
else{
    this.style.backgroundColor = color;
}
}

function changeColor(choice){
    color = choice;
}

function resetButton(){
    let squares = document.querySelectorAll('div');
    squares.forEach((div => div.style.backgroundColor = 'white'));
}
