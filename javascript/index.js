const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(10, 10, 50, 50);

    //white filled circle
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();

    //blue stroke circle
    ctx.strokeStyle = 'blue';
    ctx.beginPath();
    ctx.arc(300, 300, 50, 0, Math.PI * 2);
    ctx.stroke();
})
//white filled rectangle/square
ctx.fillStyle = 'white';
ctx.fillRect(10, 10, 50, 50);

//white filled circle
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2);
ctx.fill();

//blue stroke circle
ctx.strokeStyle = 'blue';
ctx.beginPath();
ctx.arc(300, 300, 50, 0, Math.PI * 2);
ctx.stroke();