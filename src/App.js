import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './components/Navbar';
import ProductList from  './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <Navbar/>
          <Switch>
            <Route exact path = '/' component = {ProductList} />
            <Route path = '/details' component = {Details} />
            <Route path = '/my-cart' component = {Cart} />
            <Route component = {Default} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}


export default App;
