import React from 'react';
import BusinessTopv from './BusinessTopv';
import BusinessBottomv from './BusinessBottomv';
import './businessv.css'

const Businessv = () => {
  return (
    <div   style={{backgroundColor:"white",marginLeft:"15px",marginRight:"15px"}}>
      <div className="liveheader bullet" style={{backgroundColor:"#F5EE61"}}>Business</div>
      <div className=" border" style={{border:"1px solid red",marginLeft:"20px",marginRight:"20px"}}>
      <div className="container-fluid ">
      <BusinessTopv />
      <BusinessBottomv />
    </div>
      </div>
     
    </div>
  );
};

export default Businessv;
