//Opdracht 2a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Dit geeft het personeel een duidelijk overzicht van wat zij verkopen. Dat er dubbele merknamen in komen, is niet erg.

import {inventory} from "../constants/inventory.js";

function AllTvs() {

    const AllTvs = inventory.map((tvs) => {
       return tvs.name;
    });

    return AllTvs;

}

export default AllTvs;