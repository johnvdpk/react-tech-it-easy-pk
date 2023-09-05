import {inventory} from "./inventory.js";



function Testb() {

const test = inventory.find(tv => tv.price);

for (let i = 0; i <= test; i ++) {
    const b = inventory.map[i];
    test.push(b)
}

return test;

}

export default Testb;