class ScenarioBehavior extends Sup.Behavior {
  awake() {
    var text = Sup.appendScene("Prefabs/TextPrefab")[0]
    text.getBehavior(DialogBehavior).setText("BONJOUR, MON NOM EST PIX \nRAVI DE FAIRE TA CONNAISANCE")
  }

  update() {
    
  }
}
Sup.registerBehavior(ScenarioBehavior);
