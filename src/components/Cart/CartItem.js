import React from 'react';

export default function CartItem({item, value}) {
    const{id, img, title, price, count, total} = item;
    const{increment, decrement, removeItem} = value;
  return (
    <div className='row text-capitalize text-center my-2'>
        <div className='col-10 col-lg-2 mx-auto'>
            <img
                src = {img}
                style = {{width:'5rem', height:'5rem'}}
                alt = 'product'
                className='img-fluid'            
            />
        </div>

        <div className='col-10 col-lg-2 mx-auto'>
            <span className='d-lg-none'>product : </span>{title}
        </div>

        <div className='col-10 col-lg-2 mx-auto'>
            <span className='d-lg-none'>price : $ </span>{price}
        </div>

        <div className='col-10 col-lg-2 mx-auto my-2 my-lg-0'>
            <div className='d-flex justify-content-center'>
                <div>
                    <span className='btn btn-outline-primary mx-1' onClick={()=> decrement(id)}> &#45; </span>
                    <span className='btn btn-light mx-1'>{count}</span>                
                    <span className='btn btn-outline-primary mx-1' onClick={()=> increment(id)}> &#43; </span>
                </div>               
            </div>
        </div>

        <div className='col-10 col-lg-2 mx-auto'>
            <div className='del-icon' onClick={()=>removeItem(id)}>
                 <i className="fas fa-trash-alt"></i> 
            </div>
        </div>

        <div className='col-10 col-lg-2 mx-auto'>
            <strong> <span className= 'd-lg-none'>item total : $ </span>{total}</strong>
        </div>

    </div>
  );
}
