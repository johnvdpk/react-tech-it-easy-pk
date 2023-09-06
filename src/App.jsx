import './App.css';
import './constants/inventory.js';
import './helpers/Sold.js';
import sold from "./helpers/Sold.js";
import Import from "./helpers/Import.js";
import AboutToSell from "./helpers/AboutToSell.js";
import NameProduct from "./helpers/NameProduct.js";
import Price from "./helpers/Price.js";
import {ScreenSizes} from "./helpers/Screen.js";
import {bestSellingTv, inventory} from "./constants/inventory.js";



function App() {

    function sortBestSellers() {
        inventory.sort((a, b) => {
            return a.sold - b.sold;
        });

        console.log(inventory);
    }

    function sortCheapest() {
        inventory.sort((a, b) => {
            return a.price - b.price;
        });

        console.log(inventory);
    }

    function sortSport() {
        inventory.sort((a, b) => {
            return a.refreshRate - b.refreshRate;
        });

        console.log(inventory);
    }



    return (

    <div className="ipvbody">

        <div className="wrapper">
            <h1>Tech it Easy Dashboard</h1>
            <h3>Verkoop overzicht</h3>
            <div className="flex-container">
                <div className="box left">
                    <h5>Aantal verkochte TVs</h5>
                    <h5>{sold()}</h5>
                </div>
                <div className="box middle">
                    <h5>Aantal ingekochte producten</h5>
                    <h5>{Import()}</h5>
                </div>
                <div className="box right">
                    <h5>Aantal verkochte TVs</h5>
                    <h5>{AboutToSell()}</h5>
                </div>
            </div>

            <div className="flex-container2">
                <div className="bestProduct">
                    <img className="bestsellingTV" src={bestSellingTv.sourceImg} />
                </div>
                <div className="bestsellingTVinfo">
                <h3>{NameProduct()}</h3>
                <h4>{Price()},-</h4>
                <h5>{ScreenSizes(bestSellingTv.availableSizes)}</h5>
                </div>
            </div>

            <section>
            <h3>Alle tvs</h3>

            <button type="button" onClick={sortBestSellers}>Meest verkocht eerst</button>
            <button type="button" onClick={sortCheapest}>Goedkoopste eerst</button>
            <button type="button" onClick={sortSport}>Meest geschikt voor sport eerst</button>

                {inventory.map((tv)=>
                    <article className="product" key={tv.type}>
                        {/* Voeg hier de inhoud van je product toe */}
                    </article>
                )}
            </section>


        </div>
    </div>

    );
}

export default App;
