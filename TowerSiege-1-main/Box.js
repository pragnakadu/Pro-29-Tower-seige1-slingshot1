class Box  {
  constructor(x, y, width, height){
    
   var options ={
      
    restitution : 0.0 , 
    friction : 0.004
    }


this.width = width
this.height = height
this.body = Bodies.rectangle( x , y , width , height,options)
this.color = color(random(0,255),random(0,255),random(0,255))
World.add(world , this.body)
  }


  display(){
 var angle = this.body.angle
 var pos = this.body.position

 push()
 translate(pos.x , pos.y )
 rotate(angle)
 rectMode(CENTER)
 fill (this.color)
 rect(0 , 0 , this.width , this.height)
 pop()



  }


  
};
