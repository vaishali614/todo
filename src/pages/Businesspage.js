import React from 'react';
import Business from '../components/business/Business';
import Navbar from '../components/navbar/Navbar';

const Businesspage = () => {
  return (
    <div style={{ backgroundColor: '#F4F4F4' }}>
      <Navbar business={true} />
      <Business />
    </div>
  );
};

export default Businesspage;
