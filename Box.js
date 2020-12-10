class Block {
    constructor(x, y,width,height) {
      var options = {
        'density':0.8,
        'friction': 1.0,
        'restitution':1
      };
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("yellow");
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
      pop();
    };
  };