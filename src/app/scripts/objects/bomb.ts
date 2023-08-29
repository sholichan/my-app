export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
      super(scene, x, y, 'bomb')
      scene.add.existing(this)
      scene.physics.add.existing(this)
      this.scale = 0.03

      // this.setCollideWorldBounds(true)
      //   .setBounce(0.2)
      //   .setInteractive()
      //   .on('pointerdown', () => {
      //     this.setVelocityY(-400)
      //   })
    }
  }
  