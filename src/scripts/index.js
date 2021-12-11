import style from  '../styles/style.css';
import { App } from './components/App';
import { Preparation } from './states/Preparation';



const app = new App({
    preparation : Preparation
})
app.start('preparation')

