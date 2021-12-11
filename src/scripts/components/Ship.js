export class Ship { 
    size = null;
    direction = null;
    killed = false;
    div = null;

    constructor(size, direction){
        this.size = size;
        this.direction = direction;

        const div = document.createElement('div');
        div.classList.add('ship')
    }

}