import React from 'react';
import {Link} from 'react-router-dom';

export default function CartTotals({value}) {

    const{clearCart, cartTax, cartTotal, cartSubtotal} = value;
  return (
    <React.Fragment>
        <div className='container'>
            <div className='row'>
                <div className='col-10 col-sm-8 ml-md-auto ml-sm-5 mt-2 text-capitalize text-right'>
                    <Link to='/'>
                        <button className='btn btn-outline-danger text-uppercase px-4 mb-3'
                        type='button'
                        onClick={()=>clearCart()}>
                            clear cart
                        </button>
                    </Link>

                    <h5 className='text-title'>
                        <span>subtotal : </span> 
                        <strong> $ {cartSubtotal}</strong>
                    </h5>

                    <h5 className='text-title'>
                        <span>tax : </span> 
                        <strong> $ {cartTax}</strong>
                    </h5>

                    <h5 className='text-title'>
                        <span>total : </span> 
                        <strong> $ {cartTotal}</strong>
                    </h5>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
}
