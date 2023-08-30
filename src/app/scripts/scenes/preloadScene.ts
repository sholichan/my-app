
export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('background','assets/img/bg.png')
    this.load.image('star','assets/img/star.png')
    this.load.image('bomb','assets/img/bombig.png')
    this.load.spritesheet('dude', 'assets/img/boy.png',{frameWidth:74,frameHeight:112.78})
    this.load.audio('backsound',"assets/audio/backsound.wav")
    this.load.audio('poin','assets/audio/poin.wav')
    this.load.audio('jump','assets/audio/jump.wav')
    this.load.audio('gameover','assets/audio/gameover.wav')
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
}
