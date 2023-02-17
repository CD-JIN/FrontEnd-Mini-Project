const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.fillRect(200, 200, 20, 100);
ctx.fillRect(360, 200, 20, 100);
ctx.fillRect(260, 200, 60, 200);

ctx.arc(290, 150, 40, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.arc(277, 140, 8, Math.PI, 2 * Math.PI);
ctx.arc(303, 140, 8, Math.PI, 2 * Math.PI);
ctx.fill();
