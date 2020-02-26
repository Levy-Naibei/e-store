import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

//create context
const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: storeProducts,
    detailProduct: detailProduct
  }

  handleDetails = () => {
    console.log('Hello from details');
  }

  addToCart = () => {
    console.log('Add to cart');
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetails,
        addToCart: this.addToCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
