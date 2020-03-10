import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data';

//create context
const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalProduct: detailProduct,
    modalOpen: false,
    cartSubtotal: 0,
    cartTax: 0,
    cartTotal: 0

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

  getItem = (id) => {
    const product = this.state.products.find(item => item.id === id);
      return product;
  }

  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(()=> {
      return {detailProduct:product};
    })
  };

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {products:tempProducts, cart:[...this.state.cart, product]};
    }, ()=> this.addTotals())

  };

  // open modal
  openModal =(id)=> {
    const product = this.getItem(id);
    this.setState(() => {
      return {modalProduct:product, modalOpen:true};
    })
  }

  // close modal
  closeModal =()=> {
    this.setState(() => {
      return {modalOpen: false}
    })
  }

  
  increment =(id)=>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;

    this.setState(()=>{
      return{cart: [...tempCart]}
    }, ()=> {
      this.addTotals();
    }
    );
  }

  decrement =(id)=>{
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;

    if(product.count === 0){
      this.removeItem(id);
    }
    else {
      
      product.total = product.count * product.price;
      this.setState(()=>{
        return{cart: [...tempCart]}
      }, ()=> {
        this.addTotals();
      }
      );
    }
  };


  removeItem =(id)=>{
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.count= 0;
    removedProduct.inCart = false;
    removedProduct.total = 0;

    this.setState(()=>{
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      }
    }, ()=>{
      this.addTotals();
      }
    );
  }

  clearCart =()=>{
    this.setState(()=>{
      return {cart:[]};
    }, ()=> {
      this.setProducts();
      this.addTotals();
    })
  }

  addTotals=()=>{
    let subTotal=0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.16;
    const tax = parseFloat(tempTax.toFixed(2));
    const tempTotal = subTotal + tax;
    const total = parseFloat(tempTotal.toFixed(2));
    this.setState(() => {
      return {
        cartSubtotal: subTotal,
        cartTax: tax,
        cartTotal: total
      }
    });
  }

  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state, 
        handleDetail: this.handleDetail,
        addToCart: this.addToCart,
        openModal: this.openModal,
        closeModal: this.closeModal,
        increment: this.increment,
        decrement: this.decrement,
        removeItem: this.removeItem,
        clearCart: this.clearCart
      }}>
          {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
