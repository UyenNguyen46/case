class Bar{

    x;
    y;
    width;
    height;
    color;
    canvas;
    ctx;

    constructor(x,y,width,height,color) {

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.canvas =  document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');


    }
   draw(){

        this.ctx.beginPath();
this.ctx.rect(this.x,this.y,this.width,this.height);
this.ctx.fillStyle = 'blue';
this.ctx.fill();
this.ctx.closePath();
   }
}