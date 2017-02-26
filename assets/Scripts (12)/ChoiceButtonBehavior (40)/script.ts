class ChoiceButtonBehavior extends Sup.Behavior {
  
  isClickable:boolean = false
  shouldFlicker:boolean = false
  timer:number = 0
  flickerFrame = 0
  awake() {
    this.actor.spriteRenderer.setAnimation("ON")
  }

  update() {
    Sup.Input.getMousePosition()
  }
  
  flicker(){
    this.actor.spriteRenderer.setAnimation("Flicker")
  }
}
Sup.registerBehavior(ChoiceButtonBehavior);
