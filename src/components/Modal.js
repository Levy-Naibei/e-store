import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value) => {
            const {modalOpen, closeModal} = value;
            const {img, title, price} = value.modalProduct;

            if(!modalOpen){
                return null;
            }
            else{
               return (
                <ModalContainer>
                    <div className='container'>
                        <div className='row'>
                            <div id='modal' className='col-8 col-md-6 col-lg-4 mx-auto text-center text-capitalize p-3'>
                                <h3> item added to cart </h3> 
                                <img  src={img} alt='phone img' className='img-fluid'/>
                                <h4>{title}</h4>
                                <h5 className='text-muted'>price: $ {price}</h5>

                                <Link to='/'>
                                    <ButtonContainer onClick={()=> closeModal()}>
                                        continue shopping
                                    </ButtonContainer>
                                </Link>

                                <Link to='/my-cart'>
                                    <ButtonContainer 
                                        cart  onClick={()=> closeModal()}>
                                        go to cart
                                    </ButtonContainer>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ModalContainer>
              );
            }
          }}
      </ProductConsumer>
    );
  }
}

const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;

    #modal {
        background: var(--mainWhite);
    }
`