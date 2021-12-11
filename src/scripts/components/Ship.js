 import { isUnderPoint } from "../utils";

 export class Ship { 
    size = null;
    direction = null;
    startX = null;
    startY = null;
    killed = false;
    div = null;

    x = null;
    y = null;

    get placed (){
        return this.x  !== null && this.y !== null
    }

    constructor(size, direction, startX, startY){
        this.size = size;
        this.direction = direction;

        const div = document.createElement('div');
        div.classList.add('ship')
        
        Object.assign(this, {div, startX, startY})
        this.setDirection(direction, true)
    }

    setDirection(newDirection, force = false){
        if(!force && this.direction === newDirection){
            return false
        }
        this.div.classList.remove(`ship-${this.direction}-${this.size}`)
        this.direction = newDirection
        this.div.classList.add(`ship__${this.direction}-${this.size}`)

        return true
    }

    toggleDirection () {
        const newDirection = this.direction === 'row' && 'column' 
        this.setDirection(newDirection)
    }

    isUnder(point){
        return isUnderPoint(point, this.div)
    }

}