import React from 'react';
// import DefaultLayout from '../components/DefaultLayout';

function DefaultLayout(props) {
  return (
    <div className='layout'>

        <div className="header">
          <h1 className="logo">EXPENSE MONEY</h1>
        </div>

        <div className="content">
          {props.children}
        </div>

        
    </div>
  )
}

export default DefaultLayout