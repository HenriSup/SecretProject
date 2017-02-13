class LightBehavior extends Sup.Behavior {
  children:Sup.Actor[]
  lightShouldBeOn:boolean=false
  
  awake() {
    this.children = this.actor.getChildren()
  }

  update() {
    this.checkForLight()
  }
  
  checkForLight(){
    if (this.lightShouldBeOn){}
  }
}
Sup.registerBehavior(LightBehavior);
