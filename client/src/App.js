import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Landing from './componets/Landing';
import Verify from './componets/Verify';
import Vote from './componets/Vote';

function App() {
  return (
<Router>
    <div className="App">
    <Route exact path = "/" component={Landing}></Route>
    <Route exact path = "/verify" component={Verify}></Route>
    <Route exact path = "/vote" component={Vote}></Route>

    </div>
  </Router>
  );
}
export default App;
