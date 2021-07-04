import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './componets/Landing';
import Verify from './componets/verify/Verify';
import { Provider } from 'react-redux';
import store from './store/store.js';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route exact path='/' component={Landing}></Route>
            <Route exact path='/verify' component={Verify}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
