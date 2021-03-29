var mouseEvent = "empty";
var last_X, last_Y;

canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

var color = "red";
var line_width = 2;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    line_width = document.getElementById("line-width").value;
    color = document.getElementById("color").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_X = e.clientX - canvas.offsetLeft;
    current_Y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginpath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.moveTo(last_X, last_Y);
        ctx.lineTo(current_X, current_Y);
        ctx.stroke();
    }

    last_X = current_X;
    last_Y = current_Y;
}

var last_X_touch, last_Y_touch;
var width = screen.width;

var new_width = width - 70;
var height = screen.height - 30;

if(width < 992) {
    document.getElementById("canvas").width = new_width;
    document.getElementById("canvas").height = height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    last_X_touch = e.touches[0].clientX - canvas.offsetLeft;
    last_Y_touch = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_X_touch = e.touches[0].clientX - canvas.offsetLeft;
    current_Y_touch = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
    ctx.moveTo(last_X_touch, last_Y_touch);
    ctx.lineTo(current_X_touch, current_Y_touch);
    ctx.stroke();

    last_X_touch = current_X_touch;
    last_Y_touch = current_Y_touch;
}

function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}