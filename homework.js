//Ex.1 - creating the random coordinates for rectangle and mentioning the x and y coordinates on console

<style>
  #canvas{
    border: solid 1px grey;
  };
</style>
<canvas id="canvas" width="100" height="100"></canvas>

<script>
	const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
  
  
    const rand = function(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
    };
     
  const createPoints = function(count, canvasWidth, canvasHeight){
    point={
      x     : rand(0, canvasWidth-50),
      y     : rand(0, canvasHeight-50),                            
      width : 50,
      height: 50,
      xDelta: 1,
      ydelta: 1,
      color : 'red'
    }
  };
    
  createPoints(4, 100, 100);                            
  
    context.fillStyle = point.color;
    context.fillRect(point.x, point.y, point.width, point.height);
  
  
const amount = function(count){
   const helper = function(i){
      if(i => count){
      return;
      }
      return f(i+1);
   };
   helper(0);
};
  amount(3);
  
  console.log("x coordinate is " + point.x);
  console.log("y coordinate is " + point.y);
</script>   





//Ex.2 - creating a bunch of boxes, with different colors, bouncing around all over the screen

<style>
  #canvas{
      border : solid 1px green 
  }
</style>
<canvas id="canvas" width="500" height="300"></canvas>

<script>
	const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d")

    const point1 = {
        x      : 0,
        y      : 0,
        width  : 40,
        height : 30,
        color  : 'red',
        xDelta : 3,
        yDelta : 4
    };
	const point2 = {
        x      : 0,
        y      : 0,
        width  : 20,
        height : 20,
        color  : 'green',
        xDelta : 5,
        yDelta : 4.5
    };
	const point3 = {
        x      : 0,
        y      : 0,
        width  : 20,
        height : 40,
        color  : 'blue',
        xDelta : 4,
        yDelta : 3
    };
	const point4 = {
        x      : 0,
        y      : 0,
        width  : 40,
        height : 20,
        color  : 'yellow',
        xDelta : 2,
        yDelta : 2
    };
  
    const draw = function() {
      context.fillStyle = 'rgba(0, 0, 0, 0.1)'
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = point1.color;
      context.fillRect(point1.x, point1.y, point1.width, point1.height);
      context.fillStyle = point2.color;
      context.fillRect(point2.x, point2.y, point2.width, point2.height);
      context.fillStyle = point3.color;
      context.fillRect(point3.x, point3.y, point3.width, point3.height);
      context.fillStyle = point4.color;
      context.fillRect(point4.x, point4.y, point4.width, point4.height);
    };
  
  const updateData = function(){
     if(point1.x >= canvas.width - point1.width){
    point1.xDelta = -point1.xDelta;
    }
   	if(point1.x < 0){
    point1.xDelta = -point1.xDelta;
    }
    if(point1.y >= canvas.height - point1.height){
    point1.yDelta = -point1.yDelta;
    }
    if(point1.y < 0){
    point1.yDelta = -point1.yDelta;
    }
  point1.x = point1.x + point1.xDelta;
  point1.y = point1.y + point1.yDelta;
    
    
     if(point2.x >= canvas.width - point2.width){
    point2.xDelta = -point2.xDelta;
    }
   	if(point2.x < 0){
    point2.xDelta = -point2.xDelta;
    }
    if(point2.y >= canvas.height - point2.height){
    point2.yDelta = -point2.yDelta;
    }
    if(point2.y < 0){
    point2.yDelta = -point2.yDelta;
    }
    point2.x = point2.x + point2.xDelta;
    point2.y = point2.y + point2.yDelta;
    
     if(point3.x >= canvas.width - point3.width){
    point3.xDelta = -point3.xDelta;
    }
   	if(point3.x < 0){
    point3.xDelta = -point3.xDelta;
    }
    if(point3.y >= canvas.height - point3.height){
    point3.yDelta = -point3.yDelta;
    }
    if(point3.y < 0){
    point3.yDelta = -point3.yDelta;
    }
  point3.x = point3.x + point3.xDelta;
  point3.y = point3.y + point3.yDelta;
    
     if(point4.x >= canvas.width - point4.width){
    point4.xDelta = -point4.xDelta;
    }
   	if(point4.x < 0){
    point4.xDelta = -point4.xDelta;
    }
    if(point4.y >= canvas.height - point4.height){
    point4.yDelta = -point4.yDelta;
    }
    if(point4.y < 0){
    point4.yDelta = -point4.yDelta;
    }
  point4.x = point4.x + point4.xDelta;
  point4.y = point4.y + point4.yDelta;
    };
  
  const loop = function(){
  draw();
    updateData();
    requestAnimationFrame(loop);
  };
  loop();
  
</script>










//Ex.3 criminal car against police (moving police car and bouncing policemen)

<canvas id='canvas' width=800 height=300></canvas>

<script>
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const backImg = new Image();   
  backImg.src = 'http://www.planwallpaper.com/static/images/6909249-black-hd-background.jpg';
  
  const carImg = new Image();
  carImg.src = 'https://www.roadtestreviews.com/wp-content/uploads/2016/05/topview.png';
  
  const autoImg = new Image();
  autoImg.src = 'http://www.welcomia.com/uploads/png/preview/police_car_top_view_12068.png';
  
  const copImg = new Image();
  copImg.src = 'https://lh3.googleusercontent.com/bhY4X0_aMSq-pRDm-TIF5l4e7skhhVCR8JBC0M8eq13K7gj5NN6sf5ojYPWo5mm4OoHYhYbcFBDRSvao-3Mu1w=s400';
  
  const car = {
      img   : carImg,
      x     : 10,
      y     : 10,
      width : 90,
      height: 44,
      xDelta: 0,
      yDelta: 0
  };
  const auto={
      img   : autoImg,
      x     : 300,
      y     : 13,
      width : 110,
      height: 60,
      xDelta: 0,
      yDelta: 0
  };
  
  const police={
  	  img   : copImg,
      x     : 100,
      y     : 100,
      width : 30,
      height: 60,
      xDelta: 2,
      yDelta: 1
  };
  const police1={
  	  img   : copImg,
      x     : 120,
      y     : 150,
      width : 40,
      height: 65,
      xDelta: 1,
      yDelta: 2
  };
  const police2={
  	  img   : copImg,
      x     : 500,
      y     : 170,
      width : 50,
      height: 50,
      xDelta: 1,
      yDelta: 2
  };
  
  const draw = function(){
     ctx.drawImage(backImg, 0, 0, canvas.width, canvas.height);
     ctx.drawImage(auto.img, auto.x, auto.y, auto.width, auto.height);	
     ctx.drawImage(car.img, car.x, car.y, car.width, car.height);
     ctx.drawImage(police.img, police.x, police.y, police.width, police.height);
     ctx.drawImage(police1.img, police1.x, police1.y, police1.width, police1.height);
     ctx.drawImage(police2.img, police2.x, police2.y, police2.width, police2.height);
  };
  
  const updateData = function(){

    auto.x = auto.x - 4.5;
    
    if(auto.x <= -auto.width){
    auto.x = canvas.width - auto.x
	auto.y = auto.y + 100    
    }
    if(auto.y >= canvas.height - auto.width/2){
   	auto.y = 15
    }
    
    //Some code of intersaction
 	
    };

  
  const updateCop = function(){  
     if(police.x >= canvas.width - police.width){
    police.xDelta = -police.xDelta;
    }
   	if(police.x < 0){
    police.xDelta = -police.xDelta;
    }
    if(police.y >= canvas.height - police.height){
    police.yDelta = -police.yDelta;
    }
    if(police.y < 0){
    police.yDelta = -police.yDelta;
    }
  police.x = police.x + police.xDelta;
  police.y = police.y + police.yDelta;
    
    if(police1.x >= canvas.width - police1.width){
    police1.xDelta = -police1.xDelta;
    }
   	if(police1.x < 0){
    police1.xDelta = -police1.xDelta;
    }
    if(police1.y >= canvas.height - police1.height){
    police1.yDelta = -police1.yDelta;
    }
    if(police1.y < 0){
    police1.yDelta = -police1.yDelta;
    }
  police1.x = police1.x + police1.xDelta;
  police1.y = police1.y + police1.yDelta;
  };
  
  const loop = function(){
    draw();
    updateData();
    updateCop();
    requestAnimationFrame(loop);
  };
  loop();
  
const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;

document.addEventListener('keydown', function(event) {
	if(event.keyCode === rightKey) {
      car.x = car.x + 25;
      if(car.x >= canvas.width-15){
      	car.x = -car.width
      }
  	} else if(event.keyCode === leftKey) {
      car.x = car.x - 20;
      if(car.x <= -car.width){
      	car.x = canvas.width-20
      }
  	} else if(event.keyCode === upKey) {
      car.y = car.y - 20;
      if(car.y < -car.y){
      	car.y = canvas.height
      }      
  	} else if(event.keyCode === downKey) {
      car.y = car.y + 20;
      if(car.y > canvas.height){
      	car.y = 0;
      }
  	}
   
}, false);
</script> 


