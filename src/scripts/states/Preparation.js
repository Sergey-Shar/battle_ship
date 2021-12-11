import { Ship } from "../components/Ship";
import { State } from "../components/State";
import { shipDatas } from "./shipDatas";




export class Preparation  extends State{
    draggedShip = null;
   
    init(){
    const { player }= this.app
       shipDatas.forEach(({size, direction, startX, startY,})=> {
           const ship = new Ship(size, direction, startX, startY) 
          player.addShip(ship)
       })
    }
    start(){
       
    }
    update(){
       const { mouse, player } = this.app
       
       if(!this.draggedShip && mouse.left && !mouse.pLeft){
       
       const ship = player.ships.find((ship) => ship.isUnder(mouse))
       const a = player.ships.find(item => item)
       if(ship) {
           
           this.draggedShip = ship
           
        }
    }
    if (mouse.left  && this.draggedShip){
        const {left, top} = player.field.getBoundingClientRect()
     
        this.draggedShip.div.style.left = `${mouse.x - left}rem`
        this.draggedShip.div.style.top = `${mouse.y - top}rem`
        }

        if(!mouse.left && this.draggedShip){
            this.draggedShip = null
        }

        if(this.draggedShip && mouse.delta){
            this.draggedShip.toggleDirection()
        }
    }
    stop(){
        
    }
}