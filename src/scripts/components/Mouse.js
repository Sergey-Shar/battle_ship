export class Mouse {
    item = null

    under = false;
    pUnder = false;

    x = null;
    y = null;

    pX = null;
    pY = null;

    left = false;
    pLeft = false;

    delta = 0;
    pDelta = 0;

    constructor (item) {
        this.item = item;

        const update = (event,state) => {
            this.changesState()
            this.x = event.clientX;
            this.y = event.clientY;
            this.delta = 0;
            this.under = state;
        }

        item.addEventListener('mousemove',(event)=> {
            this.changesState()
            update(event, true)
        });
        item.addEventListener('mouseenter',(event) => {
            this.changesState()
            update(event, true)
        });
        item.addEventListener('mouseleave',(event) => {
            this.changesState()
            update(event, false)
        });
        item.addEventListener('mousedown',(event) => {
            this.changesState()
            update(event, true)
            event.button === 0 && (this.left = true);
        });
        item.addEventListener('mouseup',(event) => {
            this.changesState()
            update(event, true)
            event.button === 0 && (this.left = false);
        });
        item.addEventListener('wheel',(event) => {
            this.changesState()
            update(event, true)
            this.delta = event.deltaY > 0 ? 1 : -1;
        });
    }

    changesState () {
        this.pX = this.x;
        this.pY = this.y;
        this.pUnder = this.under;
        this.pLeft = this.left;
        this.pDeta = this.delta;
        this.delta = 0;
    }
    

}