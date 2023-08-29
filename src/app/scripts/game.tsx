import 'phaser'
import Phaser, { Game as GameType } from "phaser";
import MainScene from './scenes/mainScene'
import PreloadScene from './scenes/preloadScene'
import { useEffect, useState } from 'react';

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const Game = () => {
  const [game, setGame] = useState<GameType>()
  useEffect(() => {
    if (!game) {
      const initPhaser = async () => {
        const PhaserGame = new Phaser.Game({
          type: Phaser.AUTO,
          backgroundColor: '#ffffff',
          scale: {
            parent: 'phaser-game',
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: DEFAULT_WIDTH,
            height: DEFAULT_HEIGHT
          },
          scene: [
            PreloadScene,
             MainScene
            ],
          physics: {
            default: 'arcade',
            arcade: {
              debug: false,
              gravity: { y: 500 }
            }
          }
        });
        setGame(PhaserGame)
      }
      initPhaser();
    }
    
  }, [game])
  return <div id="phaser-game" key={"phaser-game"}></div>;
}
export default Game; 