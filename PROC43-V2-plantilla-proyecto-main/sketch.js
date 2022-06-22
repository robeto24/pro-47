
var gato;
var perrosgroup;
var perrosImg;
var gatoImg;
var lava1;
var lava2;
var lava3;
var lava4;
var dogs=[];

var obstaculo1;
var obstaculo2;
var obstaculo3;
var obstaculo4;
var obstaculo5;
var obstaculo6;



function preload() {

perrosImg = loadImage("perrosfinal.png");  
gatoImg = loadImage("gatofinal.png");

}

function doggen(){
  for(var i=0; i<8;i++){
    var dog= createSprite(Math.round(random(100,1200)),Math.round(random(100,900)),10,10)
    dog.addImage("perros",perrosImg);
    dog.scale=0.1;
    dogs.push(dog)
  }
}

function setup() {
  createCanvas(1300,1000);

perrosgroup = createGroup();

 gato = createSprite(650,500,20,20);


lava1 = createSprite(650,0,1300,20);
lava2 = createSprite(650,1000,1300,20);
lava3 = createSprite(0,500,20,1300);
lava4 = createSprite(1300,500,20,1300);


obstaculo1 = createSprite(350,800,100,50);
obstaculo2 = createSprite(1000,400,50,100);
obstaculo3 = createSprite(800,350,50,100);
obstaculo4 = createSprite(350,400,100,150);
obstaculo5 = createSprite(560,590,150,20);
obstaculo6 = createSprite(40,300,200,50);
doggen();

}

function draw() {
  background("#2F1010");

 gato.addImage("gato",gatoImg)
 gato.scale = 0.1

 juego();


  drawSprites()
}

function movimiento(){

if(keyDown("W")){

gato.velocityY = -2;

}

if(keyDown("s")){

  gato.velocityY = 2;
  
  }
  if(keyDown("a")){

    gato.velocityX = -2;
    
    }
    if(keyDown("d")){

      gato.velocityX = 2;
      
      }
}


function inicio(){


}

function juego(){

  movimiento();
  
//muerte

if(gato.isTouching(obstaculo1)||gato.isTouching(obstaculo2)||gato.isTouching(obstaculo3)||gato.isTouching(obstaculo4)||gato.isTouching(obstaculo5)||gato.isTouching(obstaculo6)){

  gato.destroy();
}



  for(var i=0; i<dogs.length;i++){
    if(gato.isTouching(dogs[i])){
   dogs[i].x = random(1300,100);
   dogs[i].y = random(1300,100);

    }
  }

  for(var i=0; i<dogs.length;i++){
    var distancia= dist(gato.x,gato.y,dogs[i].x,dogs[i].y);
      if(distancia<80){
        console.log(1);
        dogs[i].velocityX=gato.velocityX+2;
        dogs[i].velocityY=gato.velocityY+2;
      }
      else {
        dogs[i].velocityX=0
        dogs[i].velocityY=0
      }
    }
  

  //lava
  if(lava1.isTouching(gato)||lava2.isTouching(gato)||lava3.isTouching(gato)||lava4.isTouching(gato)){
    gato.remove();
  }


}


function fin(){

inicio();

}
