import './App.css';
import './constants/inventory.js';
import './helpers/Sold.js';
import sold from "./helpers/Sold.js";

function App() {

  return (
      <body>
    <h1>Begin hier met met maken van de applicatie!</h1>

        <div class="sold">
        <p>Er zijn in totaal {sold()} Tv's verkocht</p>
        </div>
      </body>
  )
}

export default App
