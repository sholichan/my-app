export default class MainMenuScene extends Phaser.Scene {
    startKey!: Phaser.Input.Keyboard.Key
    startPointer!: Phaser.Input.Pointer
    titleText!: Phaser.GameObjects.Text
    playText!: Phaser.GameObjects.Text
    constructor() {
        super({ key: "MainMenuScene" })
    }

    init() {
        this.cameras.main.setBackgroundColor(0x98d687);
        this.startKey = this.input.keyboard?.addKey(
            Phaser.Input.Keyboard.KeyCodes.ENTER
        ) as Phaser.Input.Keyboard.Key;
        this.startKey.isDown = false;
        this.titleText = this.add.text(this.cameras.main.width/5, this.cameras.main.height/4, `CATCH YOUR STAR`, 
        { color: 'green', fontSize: '80px',fontStyle:'bold' });
        this.playText = this.add.text(this.cameras.main.width/5.5, this.cameras.main.height/2.5, `Klik or press ENTER to Play`, 
        { color: 'green', fontSize: '48px',fontStyle:'bold' });
    }

    update() {
        this.input.on('pointerdown',(pointer:Phaser.Input.Pointer)=>{
            this.scene.start("MainScene")
        })
        if (this.startKey.isDown) {
            this.scene.start("MainScene")
        }
    }

}