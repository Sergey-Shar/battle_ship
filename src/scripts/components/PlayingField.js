import { isUnderPoint } from "../utils";

export class Field {
    ships = [];
    shots = [];
    field = null;
    table = null;
    dock = null;
    polygon = null;
    cells = [];

    constructor() {
        const field = document.createElement('div');
        field.classList.add('playing-field');

        const table = document.createElement('table');
        table.classList.add('playing-field__table');

        const dock = document.createElement('div');
        dock.classList.add('playing-field__dock');

        const polygon = document.createElement('div');
        polygon.classList.add('playing-field__polygon');

        Object.assign(this, { field, table, dock, polygon })
        field.append(table, dock, polygon)

        for(let y =  0; y < 10; y++){
            const row = []
            const tr = document.createElement('tr')
            tr.classList.add('playing-field__row')
            tr.dataset.y = y
            for(let x = 0; x < 10; x++){
                const td = document.createElement('td')
                td.classList.add('playing-field__item')
                Object.assign(td.dataset, {x, y})

                tr.append(td)
                row.push(td)
            }
            table.append(tr)
            this.cells.push(row)
        }

        for(let x = 0; x < 10; x++){
            const cell = this.cells[0][x]
            const marker =  document.createElement('div')
            marker.classList.add('marker','marker-column')
            marker.textContent = "ABCDEFGHIJ"[x]
            cell.append(marker)
        }

        for(let y = 0; y < 10; y++){
            const cell = this.cells[y][0]
            const marker =  document.createElement('div')
            marker.classList.add('marker','marker-row')
            marker.textContent =  y + 1
            cell.append(marker)
        }
    }

    addShip(ship) {
        if (this.ships.includes(ship)) {
            return false;
        }
       this.addShipInDock(ship)

       this.ships.push(ship);
            return true;
    };

      addShipInDock(ship) {
          this.dock.append(ship.div)
         if (ship.placed){
         }  else {
             ship.div.style.left = `${ship.startX}rem`
             ship.div.style.top = `${ship.startY}rem`
         }
      }

      isUnder (point){
          return isUnderPoint(point, this.field)
      }

    removeShip(ship) {
        if (!this.ships.includes(ship)) {
            return false;
        }
        const index = this.ships.indexOf(ship);
        this.ships.splice(index, 1);
        return true;
    };

    removeAllShips() {
        const [...ships] = this.ships
        ships.forEach(item => this.removeShip(item))
        return ships.length;
    };

    addShot() { };

    removeShot() { };

    removeAllShots() {
        const [...shots] = this.shots
        shots.forEach(item => this.removeShot(item))
        return shots.length;
    };
}