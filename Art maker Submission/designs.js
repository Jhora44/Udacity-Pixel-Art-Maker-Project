// Variables
var gridSize = document.querySelector('#sizePicker');
var table = document.querySelector('#pixelCanvas');
var color = document.querySelector('#colorPicker');
var gridCell = document.getElementsByTagName('table');

// Select size input
gridSize.addEventListener('submit', function (submit) {

  submit.preventDefault();
  var row = document.querySelector('#inputWidth').value;
  var column = document.querySelector('#inputHeight').value;
  makeGrid(row,column);
  
})

// When size is submitted by the user, call makeGrid()
function makeGrid(r,c) {

  while (table.firstChild) 
    table.removeChild(table.firstChild);
  
    for (let x = 0; x < r; x++) {
        const row = document.createElement('tr');
        table.appendChild(row);
    
        for (let y = 0; y < c; y++) {
            const column = document.createElement('td');
            row.appendChild(column);
     }
   }
   colorCells();
}

// Select color input
function colorCells() {

  for (var x = 0; x < gridCell.length; x++) {

    gridCell[x].addEventListener('click', function (click) {
			gridCell = click.target.style.backgroundColor = color.value;
    })
    gridCell[x].addEventListener('dblclick', function (dblclick) {
			gridCell = dblclick.target.style.backgroundColor = '#ffffff';
		})
  }
};
makeGrid(10,10);