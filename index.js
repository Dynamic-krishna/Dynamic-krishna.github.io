    // Typing effect with js 
    var typed = new Typed('.typinjs', {
        strings: ['Krishna Singh Rathore.', 'Developer.', 'Unemployee guy'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

     /*
    // slider js
    let box = document.querySelectorAll('.slider .box');
    console.log(box)
    let next = document.getElementById('next');
    let prev = document.getElementById('prev')

    let active = 9;
    function loadShow(){
        let stt = 0;
        box[active].style.transform = `none`;
        box[active].style.zIndex = 1;
        box[active].style.filter = `none`;
        box[active].style.opacity = 1;

        for(var i=active+1; i<box.length;i++){
            stt++;
            box[i].style.transform = `translateX(${-120*stt}px) scale(${1-0.2*stt})`;
            box[i].style.zIndex = -stt;
            box[i].style.filter = `blur(5px)`
            box[i].style.opacity = stt > 2 ? 0:0.6;
        }
        stt = 0;
        for(var i = active-1; i >= 0; i--){
            stt++;
            box[i].style.transform = `translateX(${-120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(1deg)`;
            box[i].style.zIndex = -stt;
            box[i].style.filter = `blur(5px)`;
            box[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
    }
    loadShow();

    next.onclick = function(){
        active = active + 1 < box.length ? active+1:active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active-1 : active;
        console.log(active);
        loadShow()
    }

    // background canvas effect 
   const canvas = document.getElementById('backeffect');
const ctx = canvas.getContext('2d');

const dots = Array(750,);
const can_w = canvas.width = window.innerWidth;
const can_h = canvas.height = window.innerHeight;

function Cricle(x,y,dx,dy,r){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;

    function draw(x,y,dx,dy,r){
        ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.stroke();
    ctx.closePath();
    }

    function update(){

    }
}
function anime(){
    FramerateofAnimation(anime());
    console.log("kkk")
}
anime();*/
/*// Function to draw circle
function drawCircle(x, y, r, color) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// Draw initial circles
dots.forEach(function(_, index) {
    var x = Math.random() * canvas.width;
    var y = Math.random() * canvas.height;
    var r = 20;
    var color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    drawCircle(x, y, r, color);
});

// Function to update circles
function update(dots) {
    dots.forEach((_, index) => {
        // Move the circle along the x-axis
        dots[index].x += 20;
        console.log(dots[index].x);
    });
};

// Call the update function
update(dots);
*/