import Import from "./Import.js";
import Sold from "./Sold.js";

function AboutToBuy() {

    let totalAboutToBuy = Import() - Sold()

    return totalAboutToBuy;
}

export default AboutToBuy;

