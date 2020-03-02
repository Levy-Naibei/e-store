import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

//create context
const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct
  }

  componentDidMount(){
    this.setProducts();
  }

  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      const singleItem = {...item};
      tempProducts = [...tempProducts, singleItem];
    });

    this.setState(() => {
      return {products: tempProducts};
    });
  };

  handleDetails = () => {
    console.log('Hello from details');
  };

  addToCart = (id) => {
    console.log(`the id is  ${id}`);
  };

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
