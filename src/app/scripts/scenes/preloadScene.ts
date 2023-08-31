
export default class PreloadScene extends Phaser.Scene {
  loadingBar!: Phaser.GameObjects.Graphics
  progressBar!: Phaser.GameObjects.Graphics
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.cameras.main.setBackgroundColor(0x98d687)
    this.createLoadingBar()

    this.load.on("progress",
      (value: number) => {
        console.log(value);
        console.log('value');
        this.progressBar.clear();
        this.progressBar.fillStyle(0xfff6d3, 1);
        this.progressBar.fillRect(
          this.cameras.main.width / 4 - 2,
          this.cameras.main.height / 2 - 18,
          (this.cameras.main.width / 2) * value,
          40
        );
      });

    this.load.on("fileprogress",
      (file: any) => {

        console.log(file.src);

      })

    this.load.on("complete",
      () => {
        this.progressBar.destroy();
        this.loadingBar.destroy();
        console.log('complete');

      });
    this.add.text(this.cameras.main.width / 3.8, this.cameras.main.height / 2.5, `Loading...`,
      { color: 'green', fontSize: '24px', fontStyle: 'bold' });

    this.load.image('background', 'assets/img/bg.png')
    this.load.image('star', 'assets/img/star.png')
    this.load.image('bomb', 'assets/img/bombig.png')
    this.load.spritesheet('dude', 'assets/img/boy.png', { frameWidth: 74, frameHeight: 112.78 })
    this.load.audio('backsound', "assets/audio/backsound.wav")
    this.load.audio('poin', 'assets/audio/poin.wav')
    this.load.audio('jump', 'assets/audio/jump.wav')
    this.load.audio('gameover', 'assets/audio/gameover.wav')


  }

  create() {
    this.scene.start('MainMenuScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
  private createLoadingBar() {
    this.loadingBar = this.add.graphics()
    this.loadingBar.fillStyle(0x5dae47, 1);
    this.loadingBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      40
    );
    this.progressBar = this.add.graphics();
  }
}
