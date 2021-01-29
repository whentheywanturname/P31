class rain{
  constructor(x,y){
      var options = {
        'restitution':0.8,
            'friction':0.1,
            'density':1.0
      }
 
      this.body = Bodies.circle(x, y,5,options);
      this.r = 5;
      World.add(world, this.body)
  }
  display(){
     ellipseMode(RADIUS);
      strokeWeight(4);
      fill(255,0,255)
      ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
  } 
}