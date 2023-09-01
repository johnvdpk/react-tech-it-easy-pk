import {inventory} from "../constants/inventory.js";
import Import from "./Import.js";
import Sold from "./Sold.js";

function AboutToSell() {

    let AboutToSell = Import() - Sold();

    return AboutToSell;
}

export default AboutToSell;
