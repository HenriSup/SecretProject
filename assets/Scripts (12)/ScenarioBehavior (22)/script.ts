class ScenarioBehavior extends Sup.Behavior {
  actualScript:number=0
  scriptPlaying:boolean=false
  public shouldGoToNextScript:boolean=false
  textPrefabs:Sup.Actor[] = []
  textInputPrefabs:Sup.Actor[] = []
  timer=0
  music = new Sup.Audio.SoundPlayer("Sounds/YouMan", 0.1, { loop: true })
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
      case 9 :
        this.script9();
        break;
      case 10 :
        this.script10();
        break; 
      case 11 :
        this.script11();
        break;
      case 12 :
        this.script12();
        break;
      case 13 :
        this.script13();
        break;
      case 14 :
        this.script14();
        break;
      case 15 :
        this.script15();
        break;
      case 16 :
        this.script16();
        break;
      case 17 :
        this.script17();
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
    var pix = Sup.getActor("Pix")
    if (!this.scriptPlaying){
      pix.spriteRenderer.setAnimation("Drawing Remote",false)
      this.scriptPlaying=true
    }
    if (pix.spriteRenderer.getAnimation()=="Drawing Remote" && pix.spriteRenderer.getAnimationFrameIndex() == pix.spriteRenderer.getAnimationFrameCount()-1){
      pix.spriteRenderer.setAnimation("Idle Remote",true)
    }
    if (pix.spriteRenderer.getAnimation()=="Idle Remote"){
      this.timer++
      var frameTime= pix.spriteRenderer.getAnimationFrameTime()
      if (this.timer>=30){
        pix.spriteRenderer.setAnimation("Idle Remote Pushed",true)
        pix.spriteRenderer.setAnimationFrameTime(frameTime)
        var remoteSound = new Sup.Audio.SoundPlayer("Sounds/RemoteSound", 0.1, { loop: false })
        remoteSound.play()
        Sup.getActor("JukeBox").spriteRenderer.setAnimation("On")
        Sup.getActor("JukeBox").spriteRenderer.setOpacity(1)
        
      }
    }
    if (this.timer>=30){
      this.timer++
      if(this.timer>=60){
       
        if(!this.music.isPlaying()){
          this.music.play()
          Sup.getActor("JukeBox").spriteRenderer.setAnimation("Idle With Beat")
        }
        if (this.timer>=90){
          if (pix.spriteRenderer.getAnimation()=="Idle Remote Pushed"){
            pix.spriteRenderer.setAnimation("Holstering Remote",false)
          }
          if (pix.spriteRenderer.getAnimation()=="Holstering Remote" && pix.spriteRenderer.getAnimationFrameIndex() == pix.spriteRenderer.getAnimationFrameCount()-1){
            pix.spriteRenderer.setAnimation("Idle",true)
            
          }
          if (this.timer>=150){
            this.nextScript()
          }
        }
           
      }
    }
  }
  script8(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("HEY, SYMPAS CETTE MUSIQUE :)")
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
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("PEUX TU ME DONNER TON NOM ?")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      Sup.getActor("Pix").spriteRenderer.setAnimation("Idle Bored")
      this.nextScript()
    }
  }
  
  script10(){
    if (!this.scriptPlaying){
      var textInput = Sup.appendScene("Prefabs/TextInputPrefab")[0]
      this.textInputPrefabs.push(textInput)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      this.nextScript()
    }
    Sup.log(this.shouldGoToNextScript)
  }
  
  script11(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("JE SUIS PRESQUE CERTAIN QUE C'EST PAS UN NOM ÇA :P")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  
  script12(){
    if (!this.scriptPlaying){
      if (this.timer>60){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      
      text.getBehavior(DialogBehavior).setText("BIZARRE... ON DIRAIT QUE TON CLAVIER BUG")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
      }
      this.timer++
    }
    if(this.shouldGoToNextScript){
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  } 
  script13(){
    if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("LAISSE-MOI TE DONNER UN COUP DE MAIN :)")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  } 
  script14(){
    var pix = Sup.getActor("Pix")
    if (!this.scriptPlaying){
      pix.spriteRenderer.setAnimation("Drawing Keyboard",false)
      this.scriptPlaying=true
    }
    if (pix.spriteRenderer.getAnimation()=="Drawing Keyboard" && pix.spriteRenderer.getAnimationFrameIndex() == pix.spriteRenderer.getAnimationFrameCount()-1){
      pix.spriteRenderer.setAnimation("Idle Keyboard",true)
    }
    if (pix.spriteRenderer.getAnimation()=="Idle Keyboard"){
      this.timer++
      var manonNumber= this.textInputPrefabs[0].getBehavior(TextInputBehavior).manonNumber;
      if (this.timer>=30 && manonNumber==0){
        var keyboardSound = new Sup.Audio.SoundPlayer("Sounds/KeyboardSound", 0.3, { loop: false })
        keyboardSound.setPitch(Sup.Math.Random.float(0,0.5))
        keyboardSound.play()
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).SetText("M----")
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).manonNumber++
      }
      if (this.timer>=90 && manonNumber==1){
        var keyboardSound = new Sup.Audio.SoundPlayer("Sounds/KeyboardSound", 0.3, { loop: false })
        keyboardSound.setPitch(Sup.Math.Random.float(0,0.5))
        keyboardSound.play()
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).SetText("MA---")
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).manonNumber++
      }
      if (this.timer>=120 && manonNumber==2){
        var keyboardSound = new Sup.Audio.SoundPlayer("Sounds/KeyboardSound", 0.3, { loop: false })
        keyboardSound.setPitch(Sup.Math.Random.float(0,0.5))
        keyboardSound.play()
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).SetText("MAN--")
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).manonNumber++
      }
      if (this.timer>=180 && manonNumber==3){
        var keyboardSound = new Sup.Audio.SoundPlayer("Sounds/KeyboardSound", 0.3, { loop: false })
        keyboardSound.setPitch(Sup.Math.Random.float(0,0.5))
        keyboardSound.play()
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).SetText("MANO-")
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).manonNumber++
      }
      if (this.timer>=210 && manonNumber==4){
        var keyboardSound = new Sup.Audio.SoundPlayer("Sounds/KeyboardSound", 0.3, { loop: false })
        keyboardSound.setPitch(Sup.Math.Random.float(0,0.5))
        keyboardSound.play()
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).SetText("MANON")
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).manonNumber++
       
      }
      if (this.timer>=230 && manonNumber==5){
        var validationSound = new Sup.Audio.SoundPlayer("Sounds/Validation", 0.3, { loop: false })
        validationSound.setPitch(Sup.Math.Random.float(0,0.5))
        validationSound.play()
        this.textInputPrefabs[0].getBehavior(TextInputBehavior).manonNumber++
         pix.spriteRenderer.setAnimation("Holstering Keyboard",false)
      }
    }
    
    if (pix.spriteRenderer.getAnimation()=="Holstering Keyboard" && pix.spriteRenderer.getAnimationFrameIndex() == pix.spriteRenderer.getAnimationFrameCount()-1){
      pix.spriteRenderer.setAnimation("Idle",true)
      this.nextScript()
    }


  }
  
  script15(){
     if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("VOILA C'EST MIEUX NON ?")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      this.textInputPrefabs[0].destroy()
      this.textInputPrefabs.shift()
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  script16(){
     if (!this.scriptPlaying){
      var text = Sup.appendScene("Prefabs/TextPrefab")[0]
      text.getBehavior(DialogBehavior).setText("OK PREMIERE QUESTION")
      this.textPrefabs.push(text)
      this.scriptPlaying=true
    }
    if(this.shouldGoToNextScript){
      this.textPrefabs[0].destroy()
      this.textPrefabs.shift()
      this.nextScript()
    }
  }
  
  script17(){
    var pix = Sup.getActor("Pix")
    if (!this.scriptPlaying){
      pix.spriteRenderer.setAnimation("Drawing Remote",false)
      this.scriptPlaying=true
    }
    if (pix.spriteRenderer.getAnimation()=="Drawing Remote" && pix.spriteRenderer.getAnimationFrameIndex() == pix.spriteRenderer.getAnimationFrameCount()-1){
      pix.spriteRenderer.setAnimation("Idle Remote",true)
    }
    if (pix.spriteRenderer.getAnimation()=="Idle Remote"){
      this.timer++
      var frameTime= pix.spriteRenderer.getAnimationFrameTime()
      if (this.timer>=30){
        pix.spriteRenderer.setAnimation("Idle Remote Pushed",true)
        pix.spriteRenderer.setAnimationFrameTime(frameTime)
        var remoteSound = new Sup.Audio.SoundPlayer("Sounds/RemoteSound", 0.1, { loop: false })
        remoteSound.play()
      }
    }
    
    this.timer++
      if (this.timer>=60){
        if (pix.spriteRenderer.getAnimation()=="Idle Remote Pushed"){
          pix.spriteRenderer.setAnimation("Holstering Remote",false)
        }
        if (pix.spriteRenderer.getAnimation()=="Holstering Remote" && pix.spriteRenderer.getAnimationFrameIndex() == pix.spriteRenderer.getAnimationFrameCount()-1){
          pix.spriteRenderer.setAnimation("Idle",true)
        }
        if (this.timer>=150){
          Sup.getActor("Pix").spriteRenderer.setAnimation("Idle Bored",true)
          this.nextScript()
        }
      }
  }
  
  script18(){

  }
  
  public nextScript(){
    this.actualScript++
    this.scriptPlaying=false
    this.shouldGoToNextScript=false
    this.timer=0
    //Sup.log("Nouveau script :"+this.actualScript)
    
    //Sup.log(this.textPrefabs)
  }
}
Sup.registerBehavior(ScenarioBehavior);
