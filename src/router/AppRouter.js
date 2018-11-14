import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import MarketsContainer from '../components/markets/MarketsContainer';


const AppRouter = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Markets</Link>
            </li>
            <li>
              <Link to="/liveStocks/">Live Stocks</Link>
            </li>
            <li>
              <Link to="/stocks/">Stocks</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={MarketsContainer} />
      </div>
    </Router>
  );
  
  export default AppRouter;