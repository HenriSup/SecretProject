class TextInputBehavior extends Sup.Behavior {
  
  finishedTalking:boolean = false
  finaltext:string =""
  firstText:string= "ENTER YOUR NAME\n\n"
  actualText:string="-----"
  frameCounter:number=0
  frameBetweenLetters:number=5
  public manonNumber:number=0
  canStart:boolean = false
  textCursor:number=0
  numberOfBackspace:number=0
  keyboardIsLocked:boolean=false
  isWhite:boolean=true
  hasCallForNextScript:boolean=false
  timer:number=0
  
  private talkingSound = []
  private soundCursor=0;
  private randomStringTabl = ["P","X","Q","A","E","N","D","O","!","?","9","5","3","M","H","U"]
  
  awake() {
    for (var i=0;i<5;i++){
      this.talkingSound.push(new Sup.Audio.SoundPlayer("Sounds/TalkingSound", 0.1, { loop: false }))
    }
  }

  update() {
    if (this.manonNumber==6){
      this.timer++
      this.shouldBlink()
    }
    if (!this.keyboardIsLocked){
      var textInput = Sup.Input.getTextEntered()
      if (textInput.length>0){
        for (var i=0; i<textInput.length; i++){
          var value = this.randomStringTabl[Sup.Math.Random.integer(0,this.randomStringTabl.length-1)]
          this.actualText = this.actualText.substr(0, this.textCursor) + value + this.actualText.substr(this.textCursor + 1);
          //Sup.log(this.actualText)
          if (this.textCursor<4){
            this.textCursor++
          }
        }
      }
      if (Sup.Input.wasKeyJustPressed("BACK_SPACE")){
        var test = 0
        if (this.actualText!="-----"){
          this.actualText="-----"
          this.textCursor=0
          this.numberOfBackspace++
          var failSound = new Sup.Audio.SoundPlayer("Sounds/BackSpaceFail", 0.3, { loop: false })
          failSound.setPitch(Sup.Math.Random.float(0,0.5))
          failSound.play()
        }
        if (this.numberOfBackspace>=3){
          this.keyboardIsLocked=true
        }
      }
    } else {
      if (!this.hasCallForNextScript){
        Sup.getActor("Scenario").getBehavior(ScenarioBehavior).shouldGoToNextScript=true
        this.hasCallForNextScript=true
      }
      
    }
    
    this.actor.textRenderer.setText(this.firstText+this.actualText)
  }
  
  shouldBlink(){
    if (this.timer>10){
      if(!this.isWhite){
        this.actor.textRenderer.setColor(1,1,1)
        this.isWhite=true
      }
      else {
        this.actor.textRenderer.setColor(0,1,0)
        this.isWhite=false
      }
      this.timer=0
    }
  }
  
  public SetText(text:string){
    this.actualText=text
  }

  

  

}
Sup.registerBehavior(TextInputBehavior);
