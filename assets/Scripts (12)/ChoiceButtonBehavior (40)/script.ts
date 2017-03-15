class ChoiceButtonBehavior extends Sup.Behavior {
  
  isClickable:boolean = false
  isOn=true
  timer:number = 0
  flickerFrame = 0
  spriteRenderer:Sup.SpriteRenderer 
  awake() {
    this.spriteRenderer=this.actor.spriteRenderer
    this.actor.spriteRenderer.setAnimation("ON")
  }

  update() {
    Sup.log(this.spriteRenderer.getAnimationFrameCount())
    if (this.spriteRenderer.getAnimation()=="Flicker" && (this.spriteRenderer.getAnimationFrameIndex()>=this.spriteRenderer.getAnimationFrameCount()-1)){
      if(this.isOn){
        this.spriteRenderer.setAnimation("ON")
      } else {
        this.spriteRenderer.setAnimation("OFF")
      }
    }
    if (this.timer>=this.flickerFrame){
      this.flicker()
      this.timer=0
      this.flickerFrame = Sup.Math.Random.integer(0,300)
    }
    this.timer++
  }
  
  flicker(){
    this.actor.spriteRenderer.setAnimation("Flicker",false)
  }
}
Sup.registerBehavior(ChoiceButtonBehavior);
