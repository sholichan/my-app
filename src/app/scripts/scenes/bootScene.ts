
export default class BootScene extends Phaser.Scene {
    loadingBar!: Phaser.GameObjects.Graphics
    progressBar!: Phaser.GameObjects.Graphics

    constructor() {
        super({ key: "BootScene" })
    }

    preload() {
        this.cameras.main.setBackgroundColor("green")
        this.createLoadingBar()

        this.load.on("progress",
            (value: number) => {
                this.progressBar.clear();
                this.progressBar.fillStyle(0xfff6d3);
                this.progressBar.fillRect(
                    this.cameras.main.width / 4,
                    this.cameras.main.height / 4,
                    (this.cameras.main.width / 2) * value,
                    16
                );
            });

        this.load.on("complete",
            () => {
                this.progressBar.destroy();
                this.loadingBar.destroy();
            });
    }

    update() {
        this.scene.start('PreloadScene')
    }

    private createLoadingBar() {
        this.loadingBar = this.add.graphics()
        this.loadingBar.fillStyle(0x5dae47, 1);
        this.loadingBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            20
        );
        this.progressBar = this.add.graphics();
    }
}