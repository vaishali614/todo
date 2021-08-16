import React from 'react';
import BusinessTop from './BusinessTop';
import BusinessBottom from './BusinessBottom';
import './business.css'

const Business = () => {
  return (
    <div   style={{backgroundColor:"white",marginLeft:"15px",marginRight:"15px"}}>
      <div className="liveheader bullet" style={{backgroundColor:"#F5EE61"}}>Business</div>
      <div className=" border" style={{border:"1px solid red",marginLeft:"20px",marginRight:"20px"}}>
      <div className="container-fluid ">
      <BusinessTop />
      <BusinessBottom />
    </div>
      </div>
     
    </div>
  );
};

export default Business;
