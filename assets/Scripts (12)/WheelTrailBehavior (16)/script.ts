class WheelTrailBehavior extends Sup.Behavior {
  timer:number = 0
  lifeTime:number = 3
  
  awake() {
    
  }

  update() {
    var actualOpacity:number = this.actor.spriteRenderer.getOpacity()
    //this.actor.spriteRenderer.setOpacity(actualOpacity-0.15)
    // if (actualOpacity<=0){
    //   this.actor.destroy()
    // }
    this.timer++
    if (this.timer>this.lifeTime){
      this.actor.destroy()
    }
  }
}
Sup.registerBehavior(WheelTrailBehavior);
