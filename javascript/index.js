const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particleArray = [];
const colorArray = ['red', 'blue', 'green', 'purple'];

// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     ctx.fillStyle = 'white';
//     ctx.fillRect(10, 10, 50, 50);

//     //white filled circle
//     ctx.beginPath();
//     ctx.arc(100, 100, 50, 0, Math.PI * 2);
//     ctx.fill();

//     //blue stroke circle
//     ctx.strokeStyle = 'blue';
//     ctx.beginPath();
//     ctx.arc(300, 300, 50, 0, Math.PI * 2);
//     ctx.stroke();
//     ctx.fill();
// })
// //white filled rectangle/square
// ctx.fillStyle = 'white';
// ctx.fillRect(10, 10, 50, 50);

// //white filled circle
// ctx.beginPath();
// ctx.arc(100, 100, 50, 0, Math.PI * 2);
// ctx.fill();

// //blue stroke circle
// ctx.strokeStyle = 'blue';
// ctx.beginPath();
// ctx.arc(200, 200, 50, 0, Math.PI * 2);
// ctx.stroke();
// ctx.fillStyle = 'red';
// ctx.fill();

// //circle within a circle
// ctx.beginPath();
// ctx.fillStyle = 'blue';
// ctx.arc(300, 300, 50, 0, Math.PI * 2);
// ctx.fill();
// // ctx.closePath();
// ctx.beginPath();
// ctx.strokeStyle = 'white';
// ctx.arc(300, 300, 25, 0, Math.PI * 2);
// ctx.stroke();


// const mouse = {
//     x: null,
//     y: null
// };

//FUNCTIONALITY TO DRAW CIRCLE ON A MOUSE CLICK
// canvas.addEventListener('click', function(event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     console.log(event);
//     drawCircle();
// })

// FUNCTIONALITY TO DRAW CIRCLE ON MOUSE MOVE
// canvas.addEventListener('mousemove', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
//     drawRect();
// })

// window.addEventListener('resize', function(){
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // ctx.fillStyle = 'blue';
    
//     // ctx.beginPath();
//     // ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI * 2);
//     // ctx.fill();

//     drawCircle();
//     drawRect();
// })

// function drawCircle(){
    
//     ctx.beginPath();
//     ctx.fillStyle = 'blue';
//     ctx.arc(mouse.x, mouse.y, 10, 0, Math.PI * 2);
//     ctx.fill();
// }

// function drawRect(){
//     ctx.fillStyle = 'red';
//     ctx.fillRect(mouse.x, mouse.y, 10, 10);
// }


//ANIMATION
//create particles

class Particle {
    constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        this.size = Math.random()*15+1;
        this.speedX = Math.random()*3-1.5;
        this.speedY = Math.random()*3-1.5;
        this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    }
    update(){
        //update position
        this.x += this.speedX;
        this.y += this.speedY;
        //update size
        if(this.size > 2) this.size -= 0.01;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function particleInit(number){
    for(let i=0; i<number; i++){
        particleArray.push(new Particle());
    }
}
particleInit(500);

function handleParticles(){
    for(let i=0; i<particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles()
    requestAnimationFrame(animate);
}
animate();
