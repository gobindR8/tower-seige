class ground{
constructor(x,y,width,height){
this.x=x
this.y=y
this.width=width
this.height=height

this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic:true})
World.add(world,this.body)



}
display(){
var pos=this.body.position
   


push()
translate(pos.x,pos.y)
fill(255)
stroke(255)
rectMode(CENTER)
rect(0,0,this.width,this.height)
pop()




}






}