import './App.css';
import './constants/inventory.js';
import './helpers/Sold.js';
import sold from "./helpers/Sold.js";
import Import from "./helpers/Import.js";
import AboutToBuy from "./helpers/AboutToBuy.js";
import {inventory} from "./constants/inventory.js";
import Test from "./constants/practice.js";

function App() {

  return (

    <h1>Begin hier met met maken van de applicatie!</h1>

    <div className="flex-container">
        <div className="sold">
            <p>Er zijn in totaal {sold()} Tv's verkocht</p>
        </div>
        <div className="import">
            <p>Er zijn in totaal {Import()} Tv's verkocht</p>
        </div>
        <div className="aboutToBuy">
            <p>Er zijn in totaal {AboutToBuy()} Tv's verkocht</p>
        </div>

    </div>
      </body>
  )
}

export default App
