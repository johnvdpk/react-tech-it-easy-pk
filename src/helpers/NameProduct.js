import {bestSellingTv} from "../constants/inventory.js";

function NameProduct() {

    const NameProduct = bestSellingTv.brand + " " + bestSellingTv.type +" - "+ bestSellingTv.name;

    return NameProduct;

}

export default NameProduct;
