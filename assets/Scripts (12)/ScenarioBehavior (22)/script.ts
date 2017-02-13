class ScenarioBehavior extends Sup.Behavior {
  actualScript:number=0
  scriptPlaying:boolean=false
  public shouldGoToNextScript:boolean=false
  textPrefabs:Sup.Actor[] = []
  timer=0
  awake() {
    
  }

  update() {
    switch (this.actualScript)
    {
      case 0 :
        this.script0();
        break;
      case 1 :
        this.script1();
        break; 
      case 2 :
        this.script2();
        break;
      case 3 :
        this.script3();
        break;
      case 4 :
        this.script4();
        break;
      case 5 :
        this.script5();
        break;
      case 6 :
        this.script6();
        break;
      case 7 :
        this.script7();
        break;
      case 8 :
        this.script8();
        break;
    }
  }
  
  script0(){
    if (!this.scriptPlaying){
      var fadeIn = Sup.appendScene("Prefabs/FadeIn")[0]
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      this.nextScript()
    }
  }
  
  script1(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("OH TU ES DEJA LA ?")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  script2(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("LAISSE MOI UN INSTANT, J'ARRIVE")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
   
  script3(){
    var pix = Sup.getActor("Pix")
    if (pix.getPosition().x>0){
      if (pix.spriteRenderer.getAnimation()!="Running"){
        pix.spriteRenderer.setAnimation("Running",true)
      }
      var pixPosition=pix.getPosition()
      pix.setPosition(pixPosition.x-5,pixPosition.y)
    } else {
      if (pix.spriteRenderer.getAnimation()!="Idle"){
        pix.spriteRenderer.setAnimation("Idle",true)
      }
      this.timer++
      if (this.timer>60){
        this.nextScript()
      }
    }
   
   
  }
  
  script4(){
    if (!this.scriptPlaying){
      Sup.getActor("Light").getBehavior(LightBehavior).switchLightOn()
      this.scriptPlaying=true
    }
    this.timer++
    if (this.timer>50){
      this.nextScript()
    }
  }
  script5(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("SALUT, MOI C'EST PIX !")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  
  script6(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("OUI MON CREATEUR N'A PAS ETE TRES ORIGINAL\nPOUR CE QUI EST DE ME NOMMER ...")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  script7(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("NI MEME POUR LE DESIGN D'AILLEURS\nON DIRAIT QU'UN CHAT ET SONIC ONT EU UN ENFANT ...")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  script8(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("EN MEME TEMPS FAUT L'EXCUSER IL EST PAS GRAPHISTE")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  script9(){
     //d'ailleurs peux-tu me donner ton nom ?
  }
  
  script10(){
    
  }
  
  public nextScript(){
    this.actualScript++
    this.scriptPlaying=false
    this.shouldGoToNextScript=false
    this.timer=0
    Sup.log("Nouveau script :"+this.actualScript)
  }
}
Sup.registerBehavior(ScenarioBehavior);
