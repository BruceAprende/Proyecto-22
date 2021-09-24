var starImg,bgImg,bg;
var star, starBody;
var fairy,fairyImg,fairyVoice;
//crea la variable para el sprite del hada y fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carga aquí la animación del hada
	fairyImg=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//escribe el código para reproducir el sonido fairyVoice
	fairyVoice.loop();

	//crea el sprite del hada, y agrega la animación para el hada
	fairy=createSprite(200,650);
	fairy.addAnimation("hadaMoviendose",fairyImg);
	fairy.scale=0.1;

	//sprite del fondo
	bg=createSprite(1200,375);
	bg.addImage("fondo",bgImg);
	bg.scale=0.5;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if (keyDown("DOWN_ARROW")) {
	Matter.Body.setStatic(starBody,false); 
}
	if(keyDown("LEFT_ARROW")){
		fairy.x=fairy.x-2;
	}
	if(keyDown("RIGHT_ARROW")){
		fairy.x=fairy.x+2;
	}
  //escribe aquí el código para detener la estrella en la mano del hada
  if(star.y>590 && starBody.position.y>590){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}