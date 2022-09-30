let canvas = document.getElementById('gamezone');
let context = canvas.getContext('2d');
let scoreshow = document.getElementById('score');

let birdimg = new Image();
let hinhnenchinh = new Image();
let ongtren = new Image();
let ongduoi = new Image();
birdimg.src = "bird.png";
hinhnenchinh.src = "nenchinh.png";
ongtren.src = "ongtren.png";
ongduoi.src = "ongduoi.png";
let score = 0;
let khoangcachhaiong = 140;
let khoangcachdenongduoi;

class Bird {
    x;
    y;

    constructor() {
        this.x = hinhnenchinh.width / 5;
        this.y = hinhnenchinh.height / 2;
    }
}

class Ong {
    ong = [];

    constructor() {
        this.ong[0] = {
            x: canvas.width,
            y: 0
        }
    }

}

let bird = new Bird();
let ong1 = new Ong();

function run() {
    context.drawImage(hinhnenchinh, 0, 0);
    context.drawImage(birdimg, bird.x, bird.y);

    for (let i = 0; i < ong1.ong.length; i++) {
        khoangcachdenongduoi = ongtren.height + khoangcachhaiong;
        context.drawImage(ongtren, ong1.ong[i].x, ong1.ong[i].y);
        context.drawImage(ongduoi, ong1.ong[i].x, ong1.ong[i].y + khoangcachdenongduoi);
        ong1.ong[i].x -= 5;
        if (ong1.ong[i].x === canvas.width / 2) {
            ong1.ong.push({
                x: canvas.width,
                y: Math.floor(Math.random() * ongtren.height) - ongtren.height
            })
        }
        if (ong1.ong[i].x === 0) ong1.ong.splice(0, 1);
        if (ong1.ong[i].x === bird.x) score++;
        if (bird.y + birdimg.height === canvas.height ||
            bird.x + birdimg.width >= ong1.ong[i].x && bird.x <= ong1.ong[i].x + ongtren.width
            && (bird.y <= ong1.ong[i].y + ongtren.height ||
                bird.y + birdimg.height >= ong1.ong[i].y + khoangcachdenongduoi)
        ) {
            context.font = "50px Arial";
            context.fillText("Game Over", 300, 250);
            return;
        }
    }
    scoreshow.innerHTML = "score: " + score;
    bird.y += 3;
    requestAnimationFrame(run);
}

document.addEventListener("keydown", function () {
    bird.y -= 60;
})

run();

document.getElementById("play").addEventListener("click", restart);

function restart() {
    score = 0;
    bird = new Bird();
    ong1 = new Ong();
    run();
}


