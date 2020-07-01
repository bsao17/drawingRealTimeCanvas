let canvas = document.getElementById('canvasDisplay');
let ctx = canvas.getContext('2d');

let clickX = new Array();
let clickY = new Array();
let clickDrag = new Array();
let paint;

function addClick(x, y, dragging){

    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);

}
