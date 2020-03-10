import React, { Component } from 'react';

export default class Default extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 mx-auto text-center pt-5'>
            <h3 className='display-3'> 404 error</h3>
            <h3>Oops! page not found!</h3>
            <h4> The requested url
              <span className='text-danger'> {this.props.location.pathname} </span>
                was not found
            </h4>
          </div>
        </div>
      </div>
    );
  }
}
