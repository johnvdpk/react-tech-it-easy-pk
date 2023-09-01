import './App.css';
import './constants/inventory.js';
import './helpers/Sold.js';
import sold from "./helpers/Sold.js";
import Import from "./helpers/Import.js";
import AboutToSell from "./helpers/AboutToSell.js";
import {bestSellingTv} from "./constants/inventory.js";
import NameProduct from "./helpers/NameProduct.js";
import Price from "./helpers/Price.js";

function App() {

  return (
      <body>
          <div className="wrapper">
            <h1>Tech it Easy Dashboard</h1>
            <h3>Verkoop overzicht</h3>
                <div className= "flex-container">
                    <div class="box left">
                    <h5>Aantal verkochte TV's</h5>
                        <h5>{sold()}</h5>
                    </div>
                    <div className="box middle">
                        <h5>Aantal ingekochte producten</h5>
                        <h5>{Import()}</h5>
                    </div>
                    <div className="box right">
                        <h5>Aantal verkochte TV's</h5>
                        <h5>{AboutToSell()}</h5>
                    </div>
                </div>

              <div className="bestProduct">
                  <p>{NameProduct()}</p>
              </div>
              <p>{Price()}</p>

          </div>
      </body>
  )
}

export default App
