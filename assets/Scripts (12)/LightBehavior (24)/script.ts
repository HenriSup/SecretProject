class LightBehavior extends Sup.Behavior {
  children:Sup.Actor[]
  lightShouldBeOn:boolean=false
  lightIsOn:boolean=false
  lightSound = new Sup.Audio.SoundPlayer("Sounds/LightSound", 0.3, { loop: false })
  
  awake() {
    this.children = this.actor.getChildren()
    this.children.forEach(function (child){child.spriteRenderer.setOpacity(0)})
  }

  update() {
    this.checkForLight()
  }
  
  checkForLight(){
    if (this.lightShouldBeOn){
      this.children.forEach(function (child){child.spriteRenderer.setOpacity(1)})
      this.lightIsOn=true
      Sup.getActor("Pix").spriteRenderer.setColor(new Sup.Color(1,1,1))
      //Sup.log(Sup.getActor("Pix").spriteRenderer.getColor())
    }
  }
  
  public switchLightOn(){
    this.lightSound.setLoop(false)
    this.lightSound.play()
    this.lightShouldBeOn=true
  }
}
Sup.registerBehavior(LightBehavior);
