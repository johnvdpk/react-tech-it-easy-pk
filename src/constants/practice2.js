import { inventory } from "./inventory.js";

function Testb() {

    const soldOutTVs = [];

    for (let i = 0; i < inventory.length; i++) {
        const sold = inventory[i].sold;
        const stock = inventory[i].originalStock;

        if (sold === stock) {
            soldOutTVs.push(inventory[i]);
        }
    }


    return soldOutTVs;
}

export default Testb;
