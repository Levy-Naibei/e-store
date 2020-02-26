import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

export default class Product extends Component {
  render() {

    const {id, title, img, price, company, info, inCart} = this.props.product;

    return (
      <ProductWrapper className='col-9 col-md-6 col-lg-3 mx-auto my-3'>
        <div className = 'card'>
          <div className='img-container p-5' 
            onClick={() => console.log('you clicked an image container')}>
              <Link to='/details'>
                <img src={img} alt='product' className='card-img-top'/>
              </Link>

              <button className= 'card-btn' disabled={inCart? true:false}
                onClick = {() => {
                  console.log('added to cart');
              }}>
                {inCart ? (
                  <p className='text-capitalize mb-0' disabled>
                    {' '}
                     in cart
                  </p>) : (
                    <i className='fas fa-cart-plus'></i>
                )}
              </button>
          </div>
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='font-italic text-blue mb-0'>
               <span className='mr-0'>$</span> {price}</h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}


const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }

  &:hover {
    .card {
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 4px 4px 5px 0 rgba(0,0,0,0.2);
    }

    .card-footer{
       background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 0.5s linear;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.4);
  }

  .card-btn{
    position: absolute;
    font-size: 1.4rem;
    padding: 0.2rem 0.4rem;
    border:none;
    border-radius: 0.5rem 0 0 0;
    bottom: 0;
    right: 0;
    background: var(--lightBlue);
    color: var(--mainWhite);
    transition: all 0.5s linear;
    transform: translate(100%, 100%);
  }

  .img-container:hover .card-btn {
    transform:translate(0, 0);
  }

  .card-btn:hover {
    cursor: pointer;
    color: var(--mainBlue);
  }


`