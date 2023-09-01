export default class FpsText extends Phaser.GameObjects.Text {
  constructor(scene: Phaser.Scene,score: number) {
    super(scene, 10, 40, `SCORE ${score}`, { color: 'white', fontSize: '80px',fontStyle:'bold',backgroundColor:'green' })
    scene.add.existing(this)
    this.setOrigin(0)
  }

}
