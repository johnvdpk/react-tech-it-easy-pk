import {inventory} from "./inventory.js";



function Test() {
    //const test = inventory[0].name;
    const items = [];

    for (let i = 0; i < inventory.length; i++) {
        const name = inventory[i].name;
        items.push(name);

    }

    return items;

}

export default Test;