class Plinko {
    constructor(x, y) {
      var options = {
           isStatic : true,
          'restitution': 1,
          'friction': 0
      }
      
      this.r = 10;
      this.body = Bodies.circle(x, y, this.r, options);
      //this.Matter.body = Matter.bodies.circle(this.x, this.y, this.r*2, options)
      World.add(world, this.body);
    }

    display() {
      
    var plinkoPos = this.body.position
    var angle = this.body.angle;
     push();

     translate(plinkoPos.x, plinkoPos.y);
     rotate(angle);
     noStroke();
     fill("white");
     ellipseMode(RADIUS);
     ellipse(0, 0, this.r, this.r);
     
     pop();

    }

  };