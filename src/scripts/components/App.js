import { Mouse } from './Mouse';
import { Field } from './PlayingField';
import { Ship } from './Ship';



export class App {
    player = null;
    opponent = null;
    mouse = null;

    states = {};
    activState = null;

    constructor(states = {}) {
        const mouse = new Mouse(document.body)
        const player = new Field()
        const opponent = new Field()

        Object.assign(this, { mouse, player, opponent })
        document.querySelector('[data-side="player"]').append(player.field)
        document.querySelector('[data-side="opponent"]').append(opponent.field)

        for (const [stateName, StateClass] of Object.entries(states)) {
            this.states[stateName] = new StateClass(stateName, this)
        }

        for (const state of Object.values(this.states)) {
            state.init()
        }

        requestAnimationFrame(() => this.mouseState())
    }

    mouseState() {
        requestAnimationFrame(() => this.mouseState())
        if (this.activState) {
            this.activState.update()
        }
        this.mouse.changesState()
    }

    start(stateName) {
        if (this.activState && this.activState.name === stateName) {
            return false
        }

        if (!this.states.hasOwnProperty(stateName)) {
            return false
        }

        if (this.activState) {
            this.activState.stop()
        }

        const state = this.states[stateName]
        this.activState = state
        state.start()

        return true
    }
}

