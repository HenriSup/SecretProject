class WheelBehavior extends Sup.Behavior {
  shouldMove:boolean = false
  awake() {
    
  }

  update() {
    if (this.shouldMove){
      var position:Sup.Math.Vector3 = this.actor.getPosition()
      this.actor.setPosition(position.x+25,position.y)
      var trail = Sup.appendScene("Prefabs/WheelTrail")[0]
      var wheelPosition = this.actor.getPosition()
      trail.setPosition(wheelPosition.x,wheelPosition.y,wheelPosition.z-1)
    }

  }
}
Sup.registerBehavior(WheelBehavior);
