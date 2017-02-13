class FadeBehavior extends Sup.Behavior {

  counter = 0
  awake() {
    
  }

  update() {
    this.actor.spriteRenderer.setOpacity(this.actor.spriteRenderer.getOpacity()-0.005)
    if (this.counter>120){
      Sup.getActor("Scenario").getBehavior(ScenarioBehavior).shouldGoToNextScript=true
      
      this.actor.destroy()
    }
    if (this.actor.spriteRenderer.getOpacity()<=0){
      this.counter++
    }
    
  }

}
Sup.registerBehavior(FadeBehavior);
