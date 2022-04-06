import React from 'react';
import Game from "./component/Game"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



function App() {
  return (
      <Router>
        <div>
          <h2>Accounts</h2>

          <ul>
            <li>
              <Link to="/easy">easy mode</Link>
            </li>
            <li>
              <Link to="/medium">medium mode</Link>
            </li>
            <li>
              <Link to="/hard">hard mode</Link>
            </li>
            <li>
              <Link to="/help">help info</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/:level" children={<Game />} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
