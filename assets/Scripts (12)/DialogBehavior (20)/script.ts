class DialogBehavior extends Sup.Behavior {
  
  finishedTalking:boolean = false
  finaltext:string =""
  actualText:string=""
  frameCounter:number=0
  frameBetweenLetters:number=5
  canStart:boolean = false
  private talkingSound = []
  private soundCursor=0;
  
  awake() {
    for (var i=0;i<5;i++){
      this.talkingSound.push(new Sup.Audio.SoundPlayer("Sounds/TalkingSound", 0.1, { loop: false }))
    }
  }

  update() {
    if (!this.finishedTalking && Sup.getActor("Pix").spriteRenderer.getAnimation()!="Talking"){
      Sup.getActor("Pix").spriteRenderer.setAnimation("Talking",true)
    } else {
      if (Sup.getActor("Pix").spriteRenderer.getAnimation()!="Idle" && this.finishedTalking){
        Sup.getActor("Pix").spriteRenderer.setAnimation("Idle",true)
      }
    }
    if (this.canStart){
      this.frameCounter++
      if (this.frameCounter>=this.frameBetweenLetters){
        this.addLetter()
        this.frameBetweenLetters=Sup.Math.Random.integer(3,6)
      }
    }
    
    if(this.finishedTalking && Sup.Input.wasMouseButtonJustPressed(0)){
      Sup.getActor("Scenario").getBehavior(ScenarioBehavior).shouldGoToNextScript=true
    }
  }
  
  public setText(text:string){
    this.finaltext=text
    this.canStart=true
  }
  
  setNewText(text:string){
    this.actor.textRenderer.setText(text)
    this.playSound()
  }
  
  addLetter(){
    this.actualText = this.actualText + this.finaltext.charAt(0)
    if (this.finaltext.charAt(0) == "\b"){
      this.frameCounter=-30
    } else {
      this.frameCounter=0
    }
    this.finaltext=this.finaltext.slice(1)
    if(!this.finishedTalking){this.setNewText(this.actualText)}
    if(this.finaltext.length<=0){
      this.finishedTalking=true
    }
  }
  
  playSound(){
    this.talkingSound[this.soundCursor].setVolume(0.2);
    this.talkingSound[this.soundCursor].setPitch(Sup.Math.Random.float(-0.1,-0.2));
    this.talkingSound[this.soundCursor].play();
    this.soundCursor++;
    if (this.soundCursor>=this.talkingSound.length){
      this.soundCursor=0;
    }
  }
}
Sup.registerBehavior(DialogBehavior);
