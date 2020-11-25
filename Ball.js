class Ball extends BaseClass {
  constructor(x,y){
    super(x,y,30,30);
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    fill("black");
    super.display();
    fill("black");
  }
}
