import '../main.css';

let iconSize = 72;
let centralIconSize = 140;

let canvas = document.querySelector('canvas');
fitToContainer(canvas);

function fitToContainer(canvas){
    canvas.style.width ='100%';
    canvas.style.height='100%';

    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    console.log( 'width', canvas.width );
    console.log( 'height', canvas.height );
}

let centralIcon = document.getElementsByClassName('central')[0];
let centralIconCoords = centralIcon.getBoundingClientRect();

let additionalIcons = document.querySelectorAll('.icon:not(.central)');
let ctx = canvas.getContext("2d");
additionalIcons.forEach(drawLine);


console.log(centralIconCoords);
console.log(centralIconCoords.left/2 + centralIconCoords.right/2);
console.log(centralIconCoords.top/2 + centralIconCoords.bottom/2);

function drawLine(item, i, arr) {
    ctx.moveTo(centralIconCoords.left/2 + centralIconCoords.right/2,
        centralIconCoords.top/2 + centralIconCoords.bottom/2);
    let iconCoords = item.getBoundingClientRect();
    ctx.lineTo(iconCoords.left/2 + iconCoords.right/2,
        iconCoords.top/2 + iconCoords.bottom/2);
    ctx.stroke();
}