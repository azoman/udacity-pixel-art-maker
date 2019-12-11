// Select size input, heigh, width, etc.
const gridSize = document.getElementById("sizePicker");
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");
const gridCanvas = document.getElementById("pixelCanvas");

function makeGrid() {
	  //rows
	  for (var x=0; x < gridHeight.value; x++) {
			  const row = gridCanvas.insertRow(x);
			  // columns
			  for (var y=0; y < gridWidth.value; y++) {
			  	  const column = row.insertCell(y);
					  // fill in the box when clicked.
				    column.addEventListener("click", function(event) {
							  event.target.style.backgroundColor = document.getElementById("colorPicker").value;
						});
			  }
		}
}

// remove the default 'submit' action, then wipe and clear the canvas
document.getElementById("sizePicker").addEventListener("submit", function(event) {
	  event.preventDefault();
	  wipeGrid();
	  makeGrid();
});

// when creating a new grid, it just appends to the old, one... :(
// here's _a_ way to clear it (using what James and Julia refered to as "truely")
// and without changing original .html
function wipeGrid() {
  	while (gridCanvas.firstChild) {
		    gridCanvas.removeChild(gridCanvas.firstChild);
	  }
}

