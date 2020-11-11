class Division {
    constructor(x, y, w, h) {
      var options = {
          isStatic: true
      }
      
      this.body = Bodies.rectangle(x, y, w, h,options)
      this.w = w;
      this.h = h;
      World.add(world, this.body);
    }

    display(){
      var divisionPos = this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(divisionPos.x, divisionPos.y, this.w, this.h);
    }
  };