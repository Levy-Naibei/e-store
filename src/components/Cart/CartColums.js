import React from 'react';

export default function CartColums() {
  return (
    <div className='container-fluid d-none d-lg-block text-center'>
        <div className='row text-bright'>
            <div className='col-10 col-lg-2 mx-auto'>
                <p className='text-uppercase'>products</p>
            </div>

            <div className='col-10 col-lg-2 mx-auto'>
                <p className='text-uppercase'>name of product</p>
            </div>

            <div className='col-10 col-lg-2 mx-auto'>
                <p className='text-uppercase'>price</p>
            </div>

            <div className='col-10 col-lg-2 mx-auto'>
                <p className='text-uppercase'>quantity</p>
            </div>

            <div className='col-10 col-lg-2 mx-auto'>
                <p className='text-uppercase'>remove</p>
            </div>

            <div className='col-10 col-lg-2 mx-auto'>
                <p className='text-uppercase'>total</p>
            </div>
        </div>
    </div>
  );
}
