import React from 'react';

import { BrowserRouter, Switch, Route }from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import Destinations from './pages/destinations/destinations';
import MountBlanc from './pages/destinations/mountBlanc/mountBlanc';
import Tours from './pages/tours/tours';


function App() {
 
  return (
    <div className="app">
     <BrowserRouter>
        <Switch>
            <Route path="/" component={Homepage} exact />
            <Route path="/destinations" component={Destinations} exact/>
            <Route path="/destinations/mountblanc" component={MountBlanc}/>
            <Route path="/tours" component={Tours} exact/>
        </Switch>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
