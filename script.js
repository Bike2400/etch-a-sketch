function populateBoard(size){
    const sketch = document.querySelector('.sketch');
    sketch.style.gridTemplateColumns = `repeat(${size},1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size},1fr)`;

   let amount = size * size;
    for(let i =0;i<amount;i++){
        const square = document.createElement('div');
        sketch.insertAdjacentElement('beforeend',square);
        square.style.backgroundColor = 'black';
    }
}
populateBoard(16);
