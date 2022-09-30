let ball = new Ball(200,300,20,"red");
ball.draw();
let bar = new Bar(100,400,200,10)
bar.draw()

setInterval(function (){
ball.move();
    ball.draw();
    ball.colision(bar)
    bar.draw();
    console.log(ball.y)
},50)