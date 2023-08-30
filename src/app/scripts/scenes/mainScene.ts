import Player from '../objects/player'
import FpsText from '../objects/fpsText'
import ScoreText from '../objects/scoeText'
import Star from '../objects/star'
import Bomb from '../objects/bomb'


export default class MainScene extends Phaser.Scene {
  fpsText!: FpsText
  player!: Player
  background!: Phaser.GameObjects.Image
  star!: Star
  bomb!: Bomb
  backSound!: Phaser.Sound.BaseSound
  poin!: Phaser.Sound.BaseSound
  jump!: Phaser.Sound.BaseSound
  gameOver!: Phaser.Sound.BaseSound
  scoreText!: ScoreText
  jumpCount!: number

  keyW!: Phaser.Input.Keyboard.Key
  keyA!: Phaser.Input.Keyboard.Key
  keyS!: Phaser.Input.Keyboard.Key
  keyD!: Phaser.Input.Keyboard.Key

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.keyW = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.keyA = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.keyS = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.keyD = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.D)


    this.background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background')
    this.backSound = this.sound.add('backsound', { loop: true, volume: 0.3 })
    this.poin = this.sound.add('poin', { loop: false })
    this.jump = this.sound.add('jump', { loop: false, volume: 0.3 })
    this.gameOver = this.sound.add('gameover', { loop: false })
    this.backSound.play()

    this.player = new Player(this, this.cameras.main.width / 2, this.cameras.main.height / 1.5)
    this.fpsText = new FpsText(this)
    var score = 0
    this.scoreText = new ScoreText(this, score)
    this.jumpCount = 0


    //add random star
    const collectStar = (player: any, star: any) => {
      star.disableBody(true, true);
      score += 10
      this.scoreText.setText(`SCORE ${score}`)
      this.poin.play()
    }
    const randomStar = () => {
      this.star = new Star(this, Phaser.Math.FloatBetween(0, this.cameras.main.width), -50)
      this.physics.add.collider(this.player, this.star, collectStar)
    }
    this.time.addEvent({ delay: Phaser.Math.Between(2000, 2500), callback: randomStar, callbackScope: this, repeat: 1000 })

    //add bomb
    const hitBomb = (player: any, bomb: any) => {
      // bomb.disableBody(true, true);
      player.setTint(0xff0000);
      this.physics.pause()
      this.cameras.main.shake(250)
      this.backSound.pause()
      this.gameOver.play()
      const gameOverBack = () => {
        this.scene.start('MainMenuScene')

      }
      this.time.addEvent({ delay: 3000, callback: gameOverBack, callbackScope: this, repeat: 1 })
    }
    const randomBomb = () => {
      this.bomb = new Bomb(this, Phaser.Math.FloatBetween(0, this.cameras.main.width), -50)
      this.physics.add.collider(this.player, this.bomb, hitBomb)
    }
    this.time.addEvent({ delay: 700, callback: randomBomb, callbackScope: this, repeat: 1000 })

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#ffffff',
        fontSize: '24px'
      })
      .setOrigin(1, 0)
  }

  update() {
    if (this.keyW.isDown && this.player.body!.blocked.down) {
      this.jump.play()
      this.player.setVelocityY(-300)
      this.jumpCount = 1
      console.log(this.player.body!.blocked.down);
      console.log(this.player.y);
    } else if (this.jumpCount == 1 && this.keyW.isDown && this.player.y <= 600) {
      this.jump.play()
      this.player.setVelocityY(-300)
      this.jumpCount = 0
      console.log(this.player.y);
      console.log(this.jumpCount);
    }
    if (this.keyS.isDown) {
      this.player.setVelocityY(400)
      console.log(this.player.body!.touching.down);
    }

    if (this.keyA.isDown) {
      this.player.setVelocityX(-400)
      this.player.play("right", true)
      this.player.flipX = true
    } else if (this.keyD.isDown) {
      this.player.setVelocityX(400)
      this.player.play("right", true)
      this.player.flipX = false
    }
    else {
      this.player.play("turn")
      this.player.setVelocityX(0)
    }


    this.fpsText.update()
    this.scoreText.update()
  }
}
