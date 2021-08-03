class block{
    constructor(x,y,width,height){
        var options={
        restitutiion:0.1,
        desnity:5,
        friction:0.5,
        stiffness:10


        }
    this.x=x
    this.y=y
    this.width=width
    this.height=height
    
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    World.add(world,this.body)
    
    
    
    }
    display(){
    var pos=this.body.position
       
    
    
    push()
    translate(pos.x,pos.y)
    fill(255)
    stroke(100,100,200)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
    
    
    
    
    }
    
    
    
    
    
    
    }