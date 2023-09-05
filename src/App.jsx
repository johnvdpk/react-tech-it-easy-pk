import './App.css';
import './constants/inventory.js';
import './helpers/Sold.js';
import sold from "./helpers/Sold.js";
import Import from "./helpers/Import.js";
import AboutToSell from "./helpers/AboutToSell.js";
import NameProduct from "./helpers/NameProduct.js";
import Price from "./helpers/Price.js";
import {ScreenSizes} from "./helpers/Screen.js";
import {bestSellingTv} from "./constants/inventory.js";
import Test from "./constants/practice.js";
import Testb from "./constants/practice2.js";

function App() {
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

            <button onClick={() => console.log('Geklikt op meest verkocht')}>Meest verkocht eerst</button>
            <button onClick={() => console.log('Geklikt op goekoopste eerst!')}>Goedkoopste eerst</button>
            <button onClick={() => console.log('Geklikt op geschikt voor sport')}>Meest geschikt voor sport eerst</button>

            <p>alle tvs</p>
            <p>{Test()}</p>
            <p></p>
            <p>{Testb()}</p>
            <div className="opsomming">




            </div>


        </div>
    </div>

    );
}

export default App;
