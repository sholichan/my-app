export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'dude')
    scene.add.existing(this)
    scene.physics.add.existing(this)
    this.scale = 1.5
    // this.anims.create(
    //   {
    //     key: 'left',
    //     frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
    //     frameRate: 10,
    //     repeat: -1
    //   }
    // )
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 0 }],
      frameRate: 20
    })
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 15,
      repeat: -1
    });
    this.setCollideWorldBounds(true)
      .setBounce(0.2)
      .setInteractive()
      .on('pointerdown', () => {
        this.setVelocityY(-400)
      })
  }
}
