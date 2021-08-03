const Engine= Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var engine,world
var polygon1
var ground1,ground2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22,block23,block24,block25
var slingshot1

function preload(){

    polygon33=loadImage("polygon.png")
    
    }

function setup(){
    createCanvas(1200,800)
    
    engine=Engine.create()
    world=engine.world
    polygon1=new polygon(200,200,50,50)
    ground1= new ground(555,500,200,50)
     block1=new block(555,470,35,35)
     block2=new block(590,470,35,35)
     block3=new block(510,470,35,35)
     block4=new block(608,470,35,35)
     block5=new block(500,470,35,35)
     ground2= new ground(800,300,200,35)
     
     block6=new block(520,440,35,35)
     block7=new block(540,440,35,35)
     block8=new block(565,440,35,35)
     block9=new block(580,440,35,35)
     block10= new block(595,400,35,35)
     block11=new block(560,400,35,35)
     block12= new block(520,400,35,35)
     block13= new block(555,350,35,35)
     block14= new block(730,275,35,35)
     block15= new block(760,275,35,35)
     block16= new block(790,275,35,35)
     block17= new block(820,275,35,35)
     block18= new block(850,275,35,35)
     block19=new block(830,255,35,35)
     block20= new block(800,255,35,35)
     block21= new block(780,255,35,35)
     block22= new block(750,255,35,35)
     block23= new block(800,230,35,35)
     block24= new block(780,230,35,35)
     block25= new block(790,210,35,35)
     slingshot1=new sling(polygon1.body,{x:200,y:200})
    Engine.run(engine)




}
function draw(){
    background(0)
    text("drag polygon and release to knock down blocks",50,50)
    slingshot1.display()
polygon1.display()
ground1.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()
block25.display()
ground2.display()



drawSprites()






}
function mouseDragged(){
Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})



}
function mouseReleased(){
slingshot1.fly()
}


































