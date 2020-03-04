import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import {ProductConsumer} from '../context';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {id, title, price, img, company, info, inCart} = value.detailProduct;

        return(
          <div className='container py-5'>

            {/* product title */}
            <div className='row'>
              <div className='col-10 my-5 mx-auto text-center text-slanted text-blue'>
                <h2>{title}</h2>
              </div>
            </div>

            {/* product info */}
            <div className='row'>

              {/* image */}
              <div className='col-10 col-md-6 my-5 mx-auto text-center text-slanted text-blue'>
                  <img src={img} className='img-fluid' alt='product-img'/>
              </div>

                {/* text */}
              <div className='col-10 col-md-6 my-3 mx-auto text-capitalize'>
                <h3>Model : {title}</h3>

                {/*company */}
                <h4 className='text-title text-muted mt-3 mb-2'>
                  made by : <span>{company}</span>
                </h4>
                
                {/* price */}
                <h4 className='text-blue'>
                  <strong>
                    price : <span>$</span>{price}
                  </strong>
                </h4>
                
                {/* product feature */}
                <p className=' mt-3 mb-2 text-muted lead'>{info}</p>

                {/* buttons  */}
                <div>
                  <Link to='/'>
                    <ButtonContainer>
                      back to products
                    </ButtonContainer>
                  </Link>

                  <ButtonContainer 
                    className = 'mx-5'
                    cart
                    disabled = {inCart? true:false}
                    onClick = {() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}>
                      {inCart? 'in Cart':'add to cart'}
                  </ButtonContainer>
            
                </div>
              </div>
            </div>
          </div>
        );
        }}
      </ProductConsumer>
    );
  }
}
