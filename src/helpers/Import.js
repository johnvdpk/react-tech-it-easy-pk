import {inventory} from "../constants/inventory.js";

function Import() {

    let totalImport = 0;

    for(let i = 0; i <inventory.length; i++) {
        totalImport += inventory[i].originalStock;
    }

    return totalImport;
}

export default Import;
