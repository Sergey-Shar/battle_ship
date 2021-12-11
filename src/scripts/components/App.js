import { Mouse}  from './Mouse';
import { Field } from './PlayingField';
import { Ship } from './Ship';



const App = () => {
 const player = new Field()
 const opponent = new Field()

 document.querySelector('[data-side="player"]').append(player.field)
 document.querySelector('[data-side="opponent"]').append(opponent.field)
}

export {App}