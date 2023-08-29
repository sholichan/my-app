export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
      super(scene, x, y, 'star')
      scene.add.existing(this)
      scene.physics.add.existing(this)
      this.scale = 2

      this.setCollideWorldBounds(true)
        .setBounce(0.2)
        .setInteractive()
        .on('pointerdown', () => {
          this.setVelocityY(-400)
        })
    }
  }
  