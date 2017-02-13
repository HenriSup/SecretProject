class DialogBehavior extends Sup.Behavior {
  
  finishedTalking:boolean = false
  finaltext:string =""
  actualText:string=""
  frameCounter:number=0
  frameBetweenLetters:number=5
  canStart:boolean = false
  
  awake() {
  }

  update() {
    if (this.canStart){
      this.frameCounter++
      if (this.frameCounter>=this.frameBetweenLetters){
        this.addLetter()
        this.frameCounter=0
      }
    }
  }
  
  public setText(text:string){
    this.finaltext=text
    this.canStart=true
  }
  
  setNewText(text:string){
    this.actor.textRenderer.setText(text)
  }
  
  addLetter(){
    this.actualText = this.actualText + this.finaltext.charAt(0)
    this.finaltext=this.finaltext.slice(1)
    this.setNewText(this.actualText)
    if(this.finaltext.length<=0){
      this.finishedTalking=true
    }
  }
}
Sup.registerBehavior(DialogBehavior);
