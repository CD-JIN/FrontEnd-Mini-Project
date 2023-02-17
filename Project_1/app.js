const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);

ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 150);
ctx.lineTo(450, 200);

ctx.fill();
