import style from  '../styles/style.css';
import Application from  './components/Application';
import PreparationScene from './scenes/PreparationScene.js';
import ComputerScene from './scenes/ComputerScene';


const app = new Application({
	preparation: PreparationScene,
	computer: ComputerScene,
});

app.start("preparation");

