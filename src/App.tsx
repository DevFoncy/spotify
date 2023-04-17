import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import { Exercise1 } from './infraestructure/ui/Exercise1';
import { Exercise2 } from './infraestructure/ui/Exercise2';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/exercise1">
                <Exercise1 />
            </Route>
            <Route path="/">
                <Exercise1 />
            </Route>
          
        </Switch>
    </Router>
  )
}

export default App;
