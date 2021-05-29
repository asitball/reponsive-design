import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}>
        <Home/>
        </Route>
        <Route exact path="/service" component={Service}>
        </Route>
        <Route exact path='/contact' component={Contact}>
        </Route>
        <Route exact path='/about' component={About}>
        </Route>
      </Switch>
      
    </div>
  );
};

export default App;