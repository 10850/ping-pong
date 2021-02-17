class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class Rect {
    constructor(w, h) {
        this.pos = new Vec;
        this.size = new Vec(w, h);
    }
}

class Ball extends Rect {
    constructor() {
        super(30, 30);
        this.vel = new Vec;
    }
}

const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');

const ball = new Ball;
ball.pos.x = 100;
ball.pos.y = 50;

ball.vel.x=100;
ball.vel.y=100;

let LastTime;
function callback(millis) {
    if (LastTime) {
        update(millis - LastTime/1000);
    }
    LastTime = millis;
    requestAnimationFrame(callback);
}

function update(dt) {
    ball.pos.x += ball.vel.x = dt;
    ball.pos.y += ball.vel.y = dt;

    if (ball.pos.x < 0 || ball.pos.x > canvas.width){
        ball.vel.x = -ball.vel.x;
    }

    if (ball.pos.y < 0 || ball.pos.y > canvas.width){
        ball.vel.y = -ball.vel.y;
    }

    context.fillstyle = '#000';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillstyle = '#fff';
    context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);
}

callback();

