
const Engine=Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var holder,ball,ground;
var stand_1, stand_2;
var ball2;
var slingshot;
var PolygonImg;

function preload(){
PolygonImg=loadImage("polygon.png");

}

function setup(){
 var canvas=createCanvas(1200,400);
 //rectMode=(CENTER);
 engine=Engine.create();
 world=engine.world;

ground=new Ground(200,250,20,20);
//(600,height,20,20)
stand_1=new Stand(380,300,270,10);
stand_2=new Stand(700,200,200,10);
//level 1
block1=new Block(280,275,30,40);
block2=new Block(310,275,30,40);
block3=new Block(340,275,30,40);
block4=new Block(370,275,30,40)
block5=new Block(400,275,30,40);
block6=new Block(430,275,30,40);
block7=new Block(460,275,30,40);
block8=new Block(490,275,30,40);
//level 2
block9=new Block(310,235,30,40);
block10=new Block(340,235,30,40);
block11=new Block(370,235,30,40);
block12=new Block(400,235,30,40);
block13=new Block(430,195,30,40);
block14=new Block(460,235,30,40);
//level 3
block15=new Block(340,195,30,40);
block16=new Block(370,195,30,40);
block17=new Block(400,195,30,40);
block18=new Block(430,195,30,40);
//level 4
block19=new Block(370,155,30,40);
block20=new Block(400,155,30,40);






ball=Bodies.circle(50,200,20);
World.add(world,ball);

slingshot=new SlingShot(this.ball,{x:200,y:200})


}



function draw(){
background("white")
Engine.update(engine);

strokeWeight(15);
stand_1.display();
stand_2.display();


stroke(15);
fill("red")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
fill("green")
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
fill("blue")
block15.display();
block16.display();
block17.display();
block18.display();
fill("yellow")
block19.display();
block20.display();
ground.display();

ellipse(ball.position.x,ball.position.y,20);
slingshot.display();
text(mouseX+","+mouseY,mouseX,mouseY);

    }

    function mouseDragged(){
        Matter.Body.setPosition(this.ball,{x:mouseX,mouseY});
     }

     function mouseReleased(){
         slingshot.fly();
     }




